
import loginTestData from "../../fixtures/loginTestData.json";
import { loginPage } from "../../pages/loginPage.js";
const loginObj = new loginPage();


describe("Login Flow Test Suit", () => {
   it("Validate Login Page with visibility of Email Field", () => {
    loginObj.openURL();
    loginObj.verifyEmailIDfield();
  })

  it("Validate Login Page with visibility of password Field", () => {
    loginObj.openURL();
    loginObj.verifyPwdField();
  })

  it("Validate Login Page with visibility of SignIn CTA ", () => {
    loginObj.openURL();
    loginObj.verifySignInCTA();
  })

  it("Validate Login Page with visibility of forgot your password link ", () => {
    loginObj.openURL();
    loginObj.validateForgotPwdLink();
  })

  it("Validate field error messages with No Values for email and password field on login page", () => {
    loginObj.openURL();
    loginObj.enterEmailNoData();
    loginObj.enterEmailNoData();
    loginObj.ClickOnSignInCTA();
    loginObj.validateEmailFieldWithBlank()
    loginObj.validatePwdFieldWithBlank()
  })

  it("Validate Login flow with Not Registered User", () => {
    loginObj.openURL();
    loginObj.enterEmailNotRegTestData();
    loginObj.enterPasswordNotRegTestData();
    loginObj.ClickOnSignInCTA();
    loginObj.validateNotRegisteredUser()
  })

  it("Validate Login flow with Registered User", () => {
    loginObj.openURL();
    loginObj.enterEmailRegTestData();
    loginObj.enterPasswordRegTestData();
    loginObj.ClickOnSignInCTA();
    loginObj.validateRegisteredUser()

  })

});  

