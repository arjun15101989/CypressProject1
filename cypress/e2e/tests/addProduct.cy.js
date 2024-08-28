import loginTestData from '../fixtures/loginTestData.json'
import addProjectPage from '../tests/addProductPage.js'
const addProductObj = new addProjectPage ()


describe('Product Details Page Testing', () => {
    before(() => {

    cy.login(loginTestData.users.registeredEmail, loginTestData.users.regPwd)

    })


    it ('Validate that the search box is visible on Home Page', () =>{

        //addProductObj.
        

    })

    it ('Validate that the Product category list is visible on Home Page', () =>{



    })

    it ('Validate that the product name when user enter product name in search box', () =>{



    })

    it ('Validate that the search box is visible on Home Page', () =>{



    })

    
    it ('Validate that the cart Icon is visible on Home Page', () =>{



    })

    it ('Validate sort by option visible on  Page', () =>{



    })


    it ('Validate Product attributes visible on PDP Page', () =>{



    })

    it ('Validate the “Add to Cart” button functionality  on PDP Page', () =>{



    })


    it ('Validate that items added to the cart appear correctly on PDP Page', () =>{



    })

    it ('Validate the “Remove” button for item on PDP Page', () =>{


    })

    it ('Validate that if the cart displays the total price accurately.', () =>{


    })


    it ('Validate that user can add shipping and billing information.', () =>{


    })

    
    it ('Validate that the order confirmed message', () =>{


    })


    
    it ('Ensure that the user can select a shipping method', () =>{


    })


    it ('Validate  the  order confirmation number', () =>{


    })
    
     
})
