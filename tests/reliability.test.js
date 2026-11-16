import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import fr from '../src/locales/fr.js'
import en from '../src/locales/en.js'
import es from '../src/locales/es.js'
import ln from '../src/locales/ln.js'

const view = readFileSync(new URL('../src/views/RecrutementView.vue', import.meta.url), 'utf8')
const script = view.match(/<script setup>([\s\S]*?)<\/script>/)[1]
  .replace(/^import .*$/gm, '')
  .replace('import.meta.env.VITE_WEB3FORMS_KEY', 'testKey')

function createForm({ key = 'test-only', fetchImpl, immediateTimeout = false } = {}) {
  const requests = []
  let cleanup
  let cleared = false
  const context = vm.createContext({
    testKey: key,
    reactive: (value) => value,
    ref: (value) => ({ value }),
    nextTick: async () => {},
    onUnmounted: (callback) => { cleanup = callback },
    useI18n: () => ({ t: (key) => key, locale: { value: 'fr' } }),
    useContent: () => ({ maash: { value: {} }, recrutement: { value: fr.recrutement } }),
    FormData,
    AbortController,
    setTimeout: (callback) => {
      if (immediateTimeout) queueMicrotask(callback)
      return 1
    },
    clearTimeout: () => { cleared = true },
    fetch: async (...args) => {
      requests.push(args)
      return fetchImpl ? fetchImpl(...args) : { ok: true, json: async () => ({ success: true }) }
    },
  })
  vm.runInContext(`${script}\nglobalThis.subject = { form, status, errorMsg, honeypot, submit, validate, choosePost, applicationSection, nameInput }`, context)
  Object.assign(context.subject.form, {
    nom: 'Candidat Test', tel: '+243973000000', email: 'test@example.com',
    poste: fr.recrutement.postes[0].code, consent: true,
  })
  return { ...context.subject, requests, cleanup: () => cleanup(), cleared: () => cleared }
}

test('404 puis page valide : suppression de noindex, sans doublon', () => {
  const source = readFileSync(new URL('../src/router/index.js', import.meta.url), 'utf8')
  const seo = source.slice(source.indexOf('export function applySeo'), source.indexOf('router.afterEach'))
    .replace('export function', 'function')
  const nodes = []
  const document = {
    querySelector: (selector) => selector === 'meta[name="robots"]' ? nodes[0] : null,
    createElement: () => ({
      attributes: {},
      setAttribute(key, value) { this.attributes[key] = value },
      remove() { nodes.splice(nodes.indexOf(this), 1) },
    }),
    head: { appendChild: (node) => nodes.push(node) },
  }
  const context = vm.createContext({
    document, i18n: { global: { te: () => false } }, setMeta: () => {},
    location: { origin: 'https://example.test' }, DEFAULT_TITLE: 'MAASH', DEFAULT_DESCRIPTION: 'Test',
  })
  vm.runInContext(seo, context)
  context.applySeo({ name: 'introuvable', meta: {}, fullPath: '/absent' })
  context.applySeo({ name: 'introuvable', meta: {}, fullPath: '/absent' })
  assert.equal(nodes.length, 1)
  assert.equal(nodes[0].attributes.content, 'noindex, follow')
  context.applySeo({ name: 'accueil', meta: {}, fullPath: '/' })
  assert.equal(nodes.length, 0)
})

test('soumission immédiate : envoi réel simulé, poste stable et consentement inclus', async () => {
  const subject = createForm()
  await subject.submit()
  assert.equal(subject.requests.length, 1)
  const body = subject.requests[0][1].body
  assert.equal(body.get('poste'), fr.recrutement.postes[0].code)
  assert.equal(body.get('poste_libelle'), fr.recrutement.postes[0].nom)
  assert.equal(body.get('consentement'), 'true')
  assert.equal(subject.status.value, 'success')
  assert.equal(subject.form.nom, '')
  assert.equal(subject.cleared(), true)
})

test('honeypot et clé absente : aucun faux succès, aucune requête', async () => {
  const subject = createForm()
  subject.honeypot.value = 'bot'
  await subject.submit()
  assert.equal(subject.status.value, 'error')
  assert.equal(subject.requests.length, 0)
  const missingKey = createForm({ key: '' })
  await missingKey.submit()
  assert.equal(missingKey.status.value, 'error')
  assert.equal(missingKey.requests.length, 0)
})

test('validation : longueurs, poste inconnu, email, téléphone et consentement', () => {
  for (const [field, value, error] of [
    ['nom', 'x'.repeat(121), 'errLength'],
    ['poste', 'inconnu', 'errRequired'],
    ['email', 'incorrect', 'errEmail'],
    ['tel', '123', 'errTel'],
    ['consent', false, 'errConsent'],
  ]) {
    const subject = createForm()
    subject.form[field] = value
    assert.equal(subject.validate(), `ui.recrutement.${error}`)
  }
})

test('deux soumissions simultanées : une seule requête', async () => {
  let resolve
  const subject = createForm({ fetchImpl: () => new Promise((done) => { resolve = done }) })
  const first = subject.submit()
  await subject.submit()
  assert.equal(subject.requests.length, 1)
  resolve({ ok: true, json: async () => ({ success: true }) })
  await first
  assert.equal(subject.status.value, 'success')
})

test('réponses négatives, JSON invalide et erreur réseau : saisie conservée', async () => {
  for (const fetchImpl of [
    async () => ({ ok: false, status: 500, json: async () => ({ success: true }) }),
    async () => ({ ok: true, status: 200, json: async () => ({ success: false }) }),
    async () => ({ ok: true, status: 200, json: async () => ({ success: 'true' }) }),
    async () => ({ ok: true, status: 200, json: async () => { throw new SyntaxError() } }),
    async () => { throw new Error('network') },
  ]) {
    const subject = createForm({ fetchImpl })
    await subject.submit()
    assert.equal(subject.status.value, 'error')
    assert.equal(subject.form.nom, 'Candidat Test')
    assert.equal(subject.cleared(), true)
  }
})

function pendingRequest(_url, { signal }) {
  return new Promise((_resolve, reject) => {
    signal.addEventListener('abort', () => {
      const error = new Error('aborted')
      error.name = 'AbortError'
      reject(error)
    }, { once: true })
  })
}

test('délai dépassé : erreur traduite, pas de succès', async () => {
  const subject = createForm({ immediateTimeout: true, fetchImpl: pendingRequest })
  await subject.submit()
  assert.equal(subject.status.value, 'error')
  assert.equal(subject.errorMsg.value, 'ui.recrutement.errTimeout')
  assert.equal(subject.form.nom, 'Candidat Test')
})

test('sortie de page : annulation de la requête sans mutation tardive', async () => {
  const subject = createForm({ fetchImpl: pendingRequest })
  const sending = subject.submit()
  subject.cleanup()
  await sending
  assert.equal(subject.requests[0][1].signal.aborted, true)
  assert.equal(subject.status.value, 'sending')
  assert.equal(subject.cleared(), true)
})

test('codes de poste et nouveaux messages cohérents dans les quatre langues', () => {
  for (const catalog of [fr, en, es, ln]) {
    assert.deepEqual(catalog.recrutement.postes.map((poste) => poste.code),
      fr.recrutement.postes.map((poste) => poste.code))
    for (const key of ['errLength', 'errTimeout']) {
      assert.equal(typeof catalog.ui.recrutement[key], 'string')
      assert.ok(catalog.ui.recrutement[key].length > 0)
    }
  }
})

test('six cartes Activités complètes dans toutes les langues', () => {
  const ids = ['consultation', 'distribution', 'echange', 'soutien', 'retraite', 'famille']
  for (const catalog of [fr, en, es, ln]) {
    assert.deepEqual(Object.keys(catalog.ui.activites.cards), ids)
    for (const id of ids) {
      assert.ok(catalog.ui.activites.cards[id].title.trim())
      assert.ok(catalog.ui.activites.cards[id].text.trim())
    }
  }
})

test('poste Administration disponible, présélectionnable et transmis à l’envoi', async () => {
  for (const catalog of [fr, en, es, ln]) {
    const postes = catalog.recrutement.postes.filter((poste) => poste.code === 'administration')
    assert.equal(postes.length, 1)
    assert.ok(postes[0].nom.trim())
  }
  const subject = createForm()
  await subject.choosePost('administration')
  assert.equal(subject.form.poste, 'administration')
  assert.equal(subject.validate(), '')
  await subject.submit()
  assert.equal(subject.status.value, 'success')
  assert.equal(subject.requests[0][1].body.get('poste'), 'administration')
  assert.equal(subject.requests[0][1].body.get('poste_libelle'), 'Administration')
})

test('choix de poste : présélection, saisies conservées et focus sur le formulaire', async () => {
  const subject = createForm()
  let focused = false
  let scrolled = false
  subject.nameInput.value = { focus: () => { focused = true } }
  subject.applicationSection.value = { scrollIntoView: () => { scrolled = true } }
  subject.status.value = 'error'
  subject.errorMsg.value = 'ancienne erreur'
  const code = fr.recrutement.postes[1].code
  await subject.choosePost(code)
  assert.equal(subject.form.poste, code)
  assert.equal(subject.form.nom, 'Candidat Test')
  assert.equal(subject.status.value, 'idle')
  assert.equal(subject.errorMsg.value, '')
  assert.equal(focused, true)
  assert.equal(scrolled, true)
  subject.status.value = 'sending'
  await subject.choosePost(fr.recrutement.postes[0].code)
  assert.equal(subject.form.poste, code)
  subject.status.value = 'success'
  await subject.choosePost(fr.recrutement.postes[0].code)
  assert.equal(subject.status.value, 'idle')
  assert.equal(subject.form.poste, fr.recrutement.postes[0].code)
  await subject.choosePost('inconnu')
  assert.equal(subject.form.poste, fr.recrutement.postes[0].code)
  assert.equal(subject.requests.length, 0)
})