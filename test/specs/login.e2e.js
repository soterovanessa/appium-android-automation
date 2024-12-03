import { expect, browser, $ } from "@wdio/globals";
import MenuScreen from "../screen/menu.screen";
import loginScreen from "../screen/login.screen";

describe("Login", () => {
  it("Login Fail", async () => {
    await MenuScreen.accessMenuScreen();
    await loginScreen.accessLoginScreen();
    await expect($(loginScreen.errorMessage)).toHaveText(
      "Provided credentials do not match any user in this service."
    );
  });
});
