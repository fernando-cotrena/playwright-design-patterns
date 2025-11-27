import { Page, Locator } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly loginButton: Locator

  constructor(page: Page) {
    this.page = page
    this.usernameInput = page.locator('#username')
    this.passwordInput = page.locator('#password')
    this.loginButton = page.locator('#submit')
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username)
  }

  async visit() {
    await this.page.goto('/practice-test-login/')
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password)
  }

  async clickLoginButton() {
    await this.loginButton.click()
  }
}
