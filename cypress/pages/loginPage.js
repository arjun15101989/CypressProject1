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
    successfulLoggedIn : "div[class='box-content'] p"
    
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

    verifyforgotPwd()
    {
      cy.get(this.weblocators.viewforgotPwdLink).contains('Forgot Your Password ?')
    }

    enterEmail()
    {
      cy.get(this.weblocators.emailID).type()
    }

    enterPassword()
    {
        cy.get(this.weblocators.passWord).type()    
    }   
  
    ClickOnSignInCTA()
    {
      cy,get(this.weblocators.CTAsignIN).click()
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

  }