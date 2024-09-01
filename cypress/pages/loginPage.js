import loginTestData from "../../fixtures/loginTestData.json";
export class loginPage{

    //https://magento.softwaretestingboard.com/__/#/specs/runner?file=cypress/e2e/tests/samplefile.cy.js

    weblocators={

    signIn : "(div[class='panel header'] li[data-label='or'] a)",
    emailID : '#email',
    passWord : '#pass',
    viewEmailIDField : '.email span',
    viewPassWordField : '.password span',
    viewCTAsignIN:'#send2 span , .email span',
    viewforgotPwdLink : ".remind span , #send2 span , .email span",
    CTAsignIN : '#send2 span , .email span',
    emailErrorMsg : "#email-error",
    pwdErrorMsg : "#pass-error",
    forgotPwdLink : "a[class='action remind'] span",
    successfulLoggedIn : "div[class='panel header'] span[class='logged-in']",
    notRegisteredUserMsg : "div[data-bind='html: $parent.prepareMessageForHtml(message.text)']"
    
  }  
        
    openURL()
    {
        cy.visit(Cypress.env('URL'))
    }

    clickSignIn()
    {
        cy.get(this.weblocators.signIn).click()
    }
        
    verifyEmailIDfield()
    {
        cy.get(this.weblocators.viewEmailIDField).contains('Email')    
    }

    verifyPwdField()
    {
        cy.get(this.weblocators.viewPassWordField).contains('Password')
    }

    verifySignInCTA()
    {
        cy.get(this.weblocators.viewCTAsignIN).contains('Sign In')    
    }

    enterEmailNoData()
    {
      cy.get(this.weblocators.emailID).type(loginTestData.users.noEmail)
    }

    enterPasswordNoData()
    {
        cy.get(this.weblocators.passWord).type(loginTestData.users.noPwd)    
    }   
  
    
    enterEmailRegTestData()
    {
      cy.get(this.weblocators.emailID).type(loginTestData.users.registeredEmail)
    }

    enterPasswordRegTestData()
    {
        cy.get(this.weblocators.passWord).type(loginTestData.users.regPwd)    
    }

    
    enterEmailNotRegTestData()
    {
      cy.get(this.weblocators.emailID).type(loginTestData.users.notRegisteredEmail)
    }

    enterPasswordNotRegTestData()
    {
        cy.get(this.weblocators.passWord).type(loginTestData.users.notRegPwd)    
    }

    ClickOnSignInCTA()
    {
      cy.get(this.weblocators.CTAsignIN).click()
    }
     
    loginwithRegisteredUser()
    {
      cy.get(this.weblocators.registeredUser).contains('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    }

    validateFieldInvalidErrorMsg()
    {
      cy.get(this.weblocators.requiredFieldErrorMsg).contains('This is a required field.')
    }

    
    validateSucessfulLogin()
    {
      cy.get(this.weblocators.successfulLoggedIn).contains('loginTestData.users.registeredEmail')
    }


    validateEmailFieldWithBlank()
      {
        cy.get(this.weblocators.emailErrorMsg).contains('This is a required field.')
      }
    
    validatePwdFieldWithBlank()
    
    {
      cy.get(this.weblocators.pwdErrorMsg).contains('This is a required field.')
    }
  
    validateNotRegisteredUser()
    {
      cy.get(this.weblocators.notRegisteredUserMsg).contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    }

    
    validateRegisteredUser()
    {
      cy.get(this.weblocators.successfulLoggedIn).contains('Welcome, aaba dhaba!')
    }

    validateForgotPwdLink()
    {
      cy.get(this.weblocators.forgotPwdLink).should('have.text', 'Forgot Your Password?')
    }





  }