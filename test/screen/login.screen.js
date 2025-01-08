class LoginScreen {
  constructor() {
    (this.fieldUsername = "~Username input field"),
      (this.fieldPassword = "~Password input field"),
      (this.buttonLogin = "~Login button");
    this.errorMessage =
      'android=new UiSelector().text("Provided credentials do not match any user in this service.")';
  }

  async accessLoginScreen() {
    await $(this.fieldUsername).setValue("Username");
    await $(this.fieldPassword).setValue("Password");
    await $(this.buttonLogin).click();
  }

  async accessLoginInvalidScreen() {
    await $(this.fieldUsername).setValue("bob@example.com");
    await $(this.fieldPassword).setValue("10203040");
    await $(this.buttonLogin).click();
  }
}

export default new LoginScreen();
