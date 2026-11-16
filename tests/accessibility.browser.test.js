import test from 'node:test'
import assert from 'node:assert/strict'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import { chromium } from 'playwright'
import fr from '../src/locales/fr.js'
import en from '../src/locales/en.js'
import es from '../src/locales/es.js'
import ln from '../src/locales/ln.js'

test('Activités multilingues et modales accessibles au clavier', async () => {
  const server = await createServer({
    root: fileURLToPath(new URL('../', import.meta.url)),
    server: { host: '127.0.0.1', port: 0, open: false },
  })
  let browser
  try {
    await server.listen()
    const { port } = server.httpServer.address()
    const origin = `http://127.0.0.1:${port}`
    browser = await chromium.launch()
    const page = await browser.newPage()
    // Test local uniquement : aucune requête vers les services externes.
    await page.route('**/*', (route) => {
      if (route.request().url().startsWith(`${origin}/`)) return route.continue()
      return route.abort()
    })
    await page.goto(`${origin}/activites`)
    await page.locator('.activity-card').first().waitFor()
    for (const [code, catalog] of Object.entries({ fr, en, es, ln })) {
      await page.locator('.lang-btn').click()
      const index = ['fr', 'ln', 'en', 'es'].indexOf(code)
      await page.locator('.lang-item').nth(index).click()
      for (const [i, card] of Object.values(catalog.ui.activites.cards).entries()) {
        const article = page.locator('.activity-card').nth(i)
        await page.waitForFunction(({ i, title }) =>
          document.querySelectorAll('.activity-card h3')[i]?.textContent === title,
        { i, title: card.title })
        assert.equal(await article.locator('p').textContent(), card.text)
        assert.equal(await article.locator('img').getAttribute('alt'), card.title)
      }
    }
    await page.goto(`${origin}/recrutement`)
    const posts = page.locator('button.poste-card')
    const name = page.locator('input[name="nom"]')
    await posts.first().waitFor()
    for (const [index, poste] of fr.recrutement.postes.entries()) {
      if (index === 0) {
        await posts.nth(index).click()
      } else {
        await posts.nth(index).focus()
        await page.keyboard.press(index % 2 ? 'Enter' : 'Space')
      }
      await page.waitForFunction(() => document.activeElement?.getAttribute('name') === 'nom')
      assert.equal(await page.locator('select[name="poste"]').inputValue(), poste.code)
      assert.equal(await posts.nth(index).getAttribute('aria-pressed'), 'true')
      if (index === 0) await name.fill('Candidat Test')
      assert.equal(await name.inputValue(), 'Candidat Test')
    }
    await page.goto(`${origin}/services`)
    const cards = page.locator('.presta-card[aria-haspopup="dialog"]')
    await cards.first().waitFor()
    const dialog = page.locator('#hospital-dialog')
    const originalOverflow = await page.evaluate(() => document.body.style.overflow)
    for (const index of [0, 1]) {
      const card = cards.nth(index)
      await card.focus()
      await page.keyboard.press(index === 0 ? 'Enter' : 'Space')
      await dialog.waitFor({ state: 'visible' })
      assert.equal(await dialog.evaluate((el) => el.matches(':modal')), true)
      assert.equal(await page.locator('.hosp-close').evaluate((el) => el === document.activeElement), true)
      // Dépasser le nombre de contrôles pour tester les deux sens de tabulation.
      const count = await dialog.locator('a, button').count()
      for (const key of ['Tab', 'Shift+Tab']) {
        for (let i = 0; i < count + 2; i++) {
          await page.keyboard.press(key)
          assert.equal(await dialog.evaluate((el) => el.contains(document.activeElement)), true)
        }
      }
      // Changement programmatique : le sélecteur du header est volontairement
      // inaccessible pendant showModal(), car l'arrière-plan est inerte.
      for (const [code, catalog] of Object.entries({ fr, en, es, ln })) {
        await page.evaluate(async (code) => {
          const { setLocale } = await import('/src/i18n/index.js')
          setLocale(code)
        }, code)
        const expected = index === 1 ? catalog.hopitaux.vip : catalog.hopitaux
        await page.waitForFunction((title) =>
          document.querySelector('#hospital-dialog-title')?.textContent === title, expected.titre)
        assert.equal(await dialog.locator('.hosp-item').count(), expected.liste.length)
      }
      await page.keyboard.press('Escape')
      await dialog.waitFor({ state: 'hidden' })
      await page.waitForFunction(() => document.activeElement?.matches('.presta-card'))
      assert.equal(await card.evaluate((el) => el === document.activeElement), true)
      assert.equal(await page.evaluate(() => document.body.style.overflow), originalOverflow)
    }
    // Bouton Fermer puis clic sur le fond.
    await cards.first().click()
    await page.locator('.hosp-close').click()
    await dialog.waitFor({ state: 'hidden' })
    await cards.first().click()
    await dialog.click({ position: { x: 2, y: 2 } })
    await dialog.waitFor({ state: 'hidden' })
    // Démontage via navigation SPA : rétablissement du défilement.
    await cards.first().click()
    await page.evaluate(async () => {
      const { default: router } = await import('/src/router/index.js')
      await router.push('/activites')
    })
    await page.locator('.activity-card').first().waitFor()
    assert.equal(await page.evaluate(() => document.body.style.overflow), originalOverflow)
    assert.equal(await dialog.count(), 0)
  } finally {
    await browser?.close()
    await server.close()
  }
})