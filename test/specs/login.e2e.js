import { expect, browser, $ } from "@wdio/globals";
import MenuScreen from "../screen/menu.screen";
import loginScreen from "../screen/login.screen";

describe("Login", () => {
  it.skip("Login Fail", async () => {
    await MenuScreen.accessMenuScreen();
    await loginScreen.accessLoginScreen();
    await expect($(loginScreen.errorMessage)).toHaveText(
      "Provided credentials do not match any user in this service."
    );
  });

  it("Login Sucess", async () => {
    await MenuScreen.accessMenuScreen();
    await loginScreen.accessLoginSucessScreen();
  });
});
