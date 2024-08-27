import { loginPage } from "../../pages/loginPage.js";
const loginObj = new loginPage();

import loginTestData from "../../fixtures/loginTestData.json";

describe("Login Flow Test Suit", () => {
   it("Validate Login Page with visibility of Email Field", () => {
    loginObj.openURL();
    loginObj.verifyEmailIDfield();
  });

  it("Validate Login Page with visibility of password Field", () => {
    loginObj.openURL();
    loginObj.verifyPwdField();
  });

  it("Validate Login Page with visibility of SignIn CTA ", () => {
    loginObj.openURL();
    loginObj.verifySignInCTA();
  });

  it("Validate Login Page with visibility of forgot your password link ", () => {
    loginObj.openURL();
    loginObj.verifyforgotPwd();
  });

  it("Validate field error messages with No Values for email and password field on login page", () => {
    loginObj.openURL();
    loginObj.enterEmail(loginTestData.users.noEmail);
    loginObj.enterPassword(loginTestData.users.noPwd);
    loginObj.ClickOnSignInCTA();
  });

  it("Validate Login flow with Not Registered User", () => {
    loginObj.openURL();
    loginObj.enterEmail(loginTestData.users.notRegisteredEmail);
    loginObj.enterPassword(loginTestData.users.notRegPwd);
    loginObj.ClickOnSignInCTA();
  });

  it("Validate Login flow with Registered User", () => {
    loginObj.openURL();
    loginObj.enterEmail(loginTestData.users.registeredEmail);
    loginObj.enterPassword(loginTestData.users.regPwd);
    loginObj.ClickOnSignInCTA();
  });

  it("Validate Successful login with Registered User", () => {
    loginObj.openURL();
    loginObj.enterEmail(loginTestData.users.registeredEmail);
    loginObj.enterPassword(loginTestData.users.regPwd);
    loginObj.ClickOnSignInCTA();
});
});  

