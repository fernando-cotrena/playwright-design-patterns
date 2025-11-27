import { test as base } from '@playwright/test'
import { LoginPage } from '../ui/pages/login-page'
import { LoginActions } from '../ui/actions/login-actions'

export const test = base.extend<{
  loginActions: LoginActions
}>({
  loginActions: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    const actions = new LoginActions(loginPage)

    await use(actions)
  },
})
