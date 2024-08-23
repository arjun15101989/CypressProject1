export class registerPage{

    //https://magento.softwaretestingboard.com/__/#/specs/runner?file=cypress/e2e/tests/samplefile.cy.js

    weblocators={

    registerCTA: '.panel > .header > :nth-child(3) > a',
    firstName: '#firstname',   
    lastName: '#lastname',
    email: '#email_address',
    passWord : '#password',
    confirmPassword : '#password-confirmation',
    createAcCTA: '[title="Create an Account"]',
    validateRegistration: '[data-bind="html: $parent.prepareMessageForHtml(message.text)"]',
    profileIcon: 'body.account.customer-account-index.page-layout-2columns-left:nth-child(2) div.page-wrapper:nth-child(5) header.page-header div.panel.wrapper div.panel.header ul.header.links li.customer-welcome span.customer-name > button.action.switch',
    signOut: 'body.account.customer-account-index.page-layout-2columns-left:nth-child(2) div.page-wrapper:nth-child(5) header.page-header div.panel.wrapper div.panel.header ul.header.links li.customer-welcome span.customer-name > button.action.switch.selectorgadget_selected',
    registeredUser:  '.message-error > div',
    inValidfirstNameError: '#firstname-error',   
    inValidlastNameError: '#lastname-eror',
    inValidemailError: '#email_address-error',
    inValidpassWordError : '#password-error',
    inValidconfirmPasswordError : '#password-confirmation-error',
    requiredFieldErrorMsg : ".action submit primary" 

}  
        
    openURL(){

        cy.visit(Cypress.env('URL'))
    }



    clickregisterCTA(RegCTA){

        cy.get(this.weblocators.registerCTA).click(RegCTA)

    }
    
    enterfirstName(FName){

        cy.get(this.weblocators.firstName).type(FName)
        
    }

    enterlastName(LName){

        cy.get(this.weblocators.lastName).type(LName)
        
    }

    enterEmail(email){

        cy.get(this.weblocators.email).type(email)
    
        
    }

    
    enaterpassWord(pwd){

        cy.get(this.weblocators.passWord).type(pwd)

    }

    enterconfirmPassword(pwd){

        cy.get(this.weblocators.confirmPassword).type(pwd)
        
    }

    clickOncreateAcCTA(){

        cy.get(this.weblocators.createAcCTA).click()
        
    }


    verifyRegistrationMsg()
    {
      cy.get(this.weblocators.validateRegistration).contains('Thank you for registering with Main Website Store.')

    }


    clickOnProfileIcon()
    {

        cy.get(this.weblocators.profileIcon).click()

        
    }   


    clickOnsignOut()
    {

        cy.get(this.weblocators.signOut).click()
        
        
    }

    validateRegisteredUser()
    {
      cy.get(this.weblocators.registeredUser).contains('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    }

    validateFieldInvalidErrorMsg()
    {
      cy.get(this.weblocators.requiredFieldErrorMsg).contains('This is a required field.')
    }

    
    validateInvalidLastName()
    {
      cy.get(this.weblocators.requiredFieldErrorMsg).contains('This is a required field.')
    }

    
    validateInvalidEmail()
    {
      cy.get(this.weblocators.requiredFieldErrorMsg).contains('This is a required field.')
    }

    
    validateInvalidPwd()
    {
      cy.get(this.weblocators.requiredFieldErrorMsg).contains('This is a required field.')
    }

    
    validateInvalidConfirmedPwd()
    {
      cy.get(this.weblocators.requiredFieldErrorMsg).contains('This is a required field.')
    }

    
    validateReqFieldErrorMsg()
    {
      cy.get(this.weblocators.requiredFieldErrorMsg).contains('* Required Fields')
    }



}