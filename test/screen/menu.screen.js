class MenuScreen {
  constructor() {
    (this.buttonLeftMenu =
      '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView'),
      (this.buttonLeftLogin = "//*[@text= 'Log In']"),
      (this.fieldUsername = "~Username input field"),
      (this.fieldPassword = "~Password input field"),
      (this.buttonLogin = "~Login button");
  }

  async accessMenuScreen() {
    await $(this.buttonLeftMenu).click();
    await $(this.buttonLeftLogin).click();
  }
}

export default new MenuScreen();
