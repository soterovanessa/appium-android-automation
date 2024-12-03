import { expect, browser, $ } from "@wdio/globals";
import MenuScreen from "../screen/menu.screen";

describe("Login", () => {
  it("Login sucess", async () => {
    await MenuScreen.accessLoginScreen();

    await $("~Username input field").setValue("username");
    await $("~Password input field").setValue("senha");
    await $("~Login button").click();
    await $(
      'android=new UiSelector().text("Provided credentials do not match any user in this service.")'
    ).toHaveText("Provided credentials do not match any user in this service.");
  });
});
