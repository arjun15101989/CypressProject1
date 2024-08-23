export class registerPage{

    //https://magento.softwaretestingboard.com/__/#/specs/runner?file=cypress/e2e/tests/samplefile.cy.js

    weblocators={

}  
        
    openURL(){

        cy.visit(Cypress.env('URL'))
    }

   
    clearCookies(){

        this.clearCookies()
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
}