import { expect } from '@playwright/test'
import { LoginPage } from '../pages/login-page'

export class LoginActions {
  readonly loginPage: LoginPage

  constructor(loginPage: LoginPage) {
    this.loginPage = loginPage
  }

  async navigateToLogin() {
    await this.loginPage.visit()
  }

  async loginAs(user: string, pass: string) {
    await this.loginPage.fillUsername(user)
    await this.loginPage.fillPassword(pass)
    await this.loginPage.clickLoginButton()
  }

  async shouldBeLogged() {
    await expect(this.loginPage.page).not.toHaveURL(/.*login.*/)
  }

  async shouldSeeLoginError() {
    await expect(
      this.loginPage.page.locator('#error, .error-message, [data-test="error"]')
    ).toBeVisible()
  }
}
