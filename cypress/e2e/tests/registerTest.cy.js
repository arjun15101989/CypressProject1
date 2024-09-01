
import registerTestData from "../../fixtures/registerTestData.json"
import { registerPage } from "../../pages/registerPage.js"
const registerObj = new registerPage()




describe('Registration Flow Test Suit', ()=>{

    it('Validate New Registration flow', ()=>{
        registerObj.openURL()
        registerObj.clickregisterCTA()
        registerObj.enterfirstName(registerTestData.firstName)
        registerObj.enterlastName(registerTestData.lastName)
        registerObj.enterEmail(registerTestData.email)
        registerObj.enaterpassWord(registerTestData.password)
        registerObj.enterconfirmPassword(registerTestData.confirmPassword)
        registerObj.clickOncreateAcCTA()
        registerObj.validateSuccessfulRegistration()
        registerObj.clickOnProfileIcon()
        registerObj.clickOnsignOut()
         
    })

 
    it('Validate Already Registerd User', ()=>{
        registerObj.openURL()
        registerObj.clickregisterCTA()
        registerObj.enterfirstName(registerTestData.firstName)
        registerObj.enterlastName(registerTestData.lastName)
        registerObj.enterEmail(registerTestData.email)
        registerObj.enaterpassWord(registerTestData.password)
        registerObj.enterconfirmPassword(registerTestData.password)
        registerObj.clickOncreateAcCTA()
        registerObj.validateRegisteredUser()  
    
    })


    it('Validate First Name field level error messages for Registration flow', ()=>{
        registerObj.openURL()
        registerObj.clickregisterCTA()
        registerObj.clickOncreateAcCTA()
       
         
    })


    it('Validate Last Name field level error messages for Registration flow', ()=>{
        registerObj.openURL()
        registerObj.clickregisterCTA()
        registerObj.clickOncreateAcCTA()
    })


    it('Validate Email field level error messages for Registration flow', ()=>{
        registerObj.openURL()
        registerObj.clickregisterCTA()
        registerObj.clickOncreateAcCTA()
    })


    it('Validate Password field level error messages for Registration flow', ()=>{
        registerObj.openURL()
        registerObj.clickregisterCTA()
        registerObj.clickOncreateAcCTA()
    })


    it('Validate Confirm Password field level error messages for Registration flow', ()=>{
        registerObj.openURL()
        registerObj.clickregisterCTA()
        registerObj.clickOncreateAcCTA()
    })

    
        
})

