
import loginTestData from "../../fixtures/loginTestData.json"

import { addProjectPage } from "../../pages/addProductPage.js"
const addProductObj = new addProjectPage()


describe('Product Details Page Testing', () => {
    beforeEach(() => {

    cy.login(loginTestData.users.registeredEmail, loginTestData.users.regPwd)



    })


    it ('Validate that the search box is visible on Home Page', () =>{

        addProductObj.validateSearchBox()

        

    })

    it ('Validate that the Product category list is visible on Home Page', () =>{

        addProductObj.validateProductCategoryList()


    })

    it('Validate that the Search Box is display on Home Page', ()=> {
        
        addProductObj.validateSearchBoxOnHomePage()
    })

    it('Validate that the Search Box has Placeholder', ()=> {
        
        addProductObj.validateSearchBox()
    })

    it ('Validate that the product name when user enter product name in search box', () =>{

        addProductObj.validateSearchBoxwithProductName()

    })

    it ('Validate that the cart Icon is visible on Home Page', () =>{

        addProductObj.verifyCartIcon()

    })

    it ('Validate sort by option visible on  Page', () =>{

        addProductObj.validateSortByOption()

    })


    it ('Validate Product attributes visible on PDP Page', () =>{
        addProductObj.validateProductName()
        addProductObj.validateProductSize()
        addProductObj.validateProductStars()
        addProductObj.validateProductPrice()
        addProductObj.validateColorOfProduct()

    })

    it ('Validate the “Add to Cart” CTA on PDP Page', () =>{

        addProductObj.validateAddToCartCTA()

    })

    it('Validate that the product can be select from search box', () =>{

        addProductObj.selectTshirt()

    })

    it('Validate the add to cart functionality', () => {

        addProductObj.validateProductToCart()

    })

    it('Validate that the user can select the size of product',()=>{

        addProductObj.addProductSize()
        
    })

    
    it('Validate that the user can select the color of product',()=>{

        addProductObj.addProductColor()
        
    })

    
    
    it('Validate that the user can modify quantity of product',()=>{

        addProductObj.modifyProductQty()
        
    })

    it ('Validate that items added to the cart appear correctly on PDP Page', () =>{
    
        addProductObj.validateProductQtyInCart()

    })

    
    it ('Validate that by default quantity should be display as 1 ', () =>{
    
        addProductObj.addProductQty()

    })

    
    it ('Validate that product successfully added in cart message ', () =>{
    
        addProductObj.validateaddToCartMsg()

    })

    it ('Validate the Remove product from cart functionality on PDP Page', () =>{

        addProductObj.validateRemoveProduct()

    })

    it ('Validate that if the cart displays the total price accurately.', () =>{

        addProductObj.validateProductQtyOnPDP()

    })

    it( 'Validate that the Proceed To Checkout CTA is Availble on PDP page')

        addProductObj.validateProceedToCheckOutCTAOnPDP()

    
    it( 'Validate that the Proceed To Checkout CTA is clickable on PDP page')

        addProductObj.clickOnProceedToCheckOutCTAOnPDP()

    it ('Validate that user can add shipping and billing information.', () =>{

        addProductObj.addNewAddOnShippingPage()
        addProductObj.clickOnFirstNameOnShippingPage()
        addProductObj.clickOnLastNameOnShippingPage()
        addProductObj.clickOnCompanyNameOnShippingPage()
        addProductObj.clickOnAdd1OnShippingPage()
        addProductObj.clickOnAdd2OnShippingPage()
        addProductObj.clickOnAdd3OnShippingPage()
        addProductObj.clickOnCityOnShippingPage()
        addProductObj.clickOnStateOnShippingPage()
        addProductObj.clickOnPostalCodeOnShippingPage()
        addProductObj.clickOnCountryOnShippingPage()
        addProductObj.clickOnPhoneNumberOnShippingPage()
        addProductObj.clickOnNextCTA()
        addProductObj.clickOnPlaceOrderCTA()
        addProductObj.thankyouPurchaseMsg()


    })

    
    it ('Validate that the order confirmed message', () =>{

        addProductObj.addProductQty()
        addProductObj.validateaddToCartMsg()
        addProductObj.thankyouPurchaseMsg()

    })


    


    it ('Validate  the  order confirmation number', () =>{

        
        addProductObj.addProductQty()
        addProductObj.validateaddToCartMsg()
        addProductObj.thankyouPurchaseMsg()
        addProductObj.validateOrderNo()

    })
    
     
})
