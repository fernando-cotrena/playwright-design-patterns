import { test } from "../fixtures/login-fixtures"

test.describe('Login funcionalidad', () => {

  test('Login exitoso con credenciales válidas', async ({ loginActions }) => {
    await loginActions.navigateToLogin()
    await loginActions.loginAs('student', 'Password123')
    await loginActions.shouldBeLogged()
  })

  test('Login fallido con credenciales inválidas', async ({ loginActions }) => {
    await loginActions.navigateToLogin()
    await loginActions.loginAs('student', 'wrong-password')
    await loginActions.shouldSeeLoginError()
  })
})
