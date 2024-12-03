import { expect, browser, $ } from "@wdio/globals";

describe("Login", () => {
  it("Login sucess", async () => {
    await $(
      '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView'
    ).click(); //Clica no menu 3 linhas
    await $("//*[@text= 'Log In']").click(); //Escolhe a opção de login
    await $("~Username input field").setValue("username");
    await $("~Password input field").setValue("senha");
    await $("~Login button").click();
    await $(
      'android=new UiSelector().text("Provided credentials do not match any user in this service.")'
    ).toHaveText("Provided credentials do not match any user in this service.");
  });
});
