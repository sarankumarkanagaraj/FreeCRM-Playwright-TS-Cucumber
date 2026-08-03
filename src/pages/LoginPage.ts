import { BasePage } from './BasePage';
import { LoginPageLocators } from '../locators/LoginPageLocators';

export class LoginPage extends BasePage {
  private locator = new LoginPageLocators();

  async launchApplication(url: string) {
    await this.page.goto(url);
  }

  async enterUsername(username: string) {
    await this.page.fill(this.locator.email, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.locator.password, password);
  }

  async clickLogin() {
    await this.page.locator(this.locator.loginButton).click();
  }
}
