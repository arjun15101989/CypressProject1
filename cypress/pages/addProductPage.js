export class addProductPage{
    
weblocators={


    signIn : "(div[class='panel header'] li[data-label='or'] a)",
    emailID : '#email',
    pwd: "body > div:nth-child(5) > main:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > fieldset:nth-child(2) > div:nth-child(3) > div:nth-child(2) > input:nth-child(1)",
    CTAsignIN : '#send2 span , .email span',
    productCategoryList : '#ui-id-2',
    mensProduct : "a[id='ui-id-5'] span[class='ui-menu-icon ui-icon ui-icon-carat-1-e']",
    searchBox : "#search",
    searchTshirtMan : "#qs-option-2",
    sortByOptionPDP : "div[class='column main'] div:nth-child(1) div:nth-child(3) label:nth-child(1)",
    searchProductHeader : ".base",
    productName : "body > div:nth-child(5) > main:nth-child(4) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > ol:nth-child(1) > li:nth-child(2) > div:nth-child(1) > div:nth-child(2) > strong:nth-child(1) > a:nth-child(1)",
    productHeaderName: ".base", 
    SelectsizeOfProduct : "#option-label-size-143-item-170",
    productPrice : "span[id='product-price-510'] span[class='price']",
    productColor : "#option-label-color-93-item-50", 
    productQuantity : "#qty",
    addToCartCTAOnPDP : "button[id='product-addtocart-button'] span",
    addToCartMsg : "div[data-bind='html: $parent.prepareMessageForHtml(message.text)']",
    verifyStarRating : "body > div:nth-child(5) > main:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)",
    reviewSection : "div[class='reviews-actions'] span:nth-child(2)",
    addReview : ".action.add",
    reviewerName : "#nickname_field",
    summaryReview : "#summary_field",
    giveReview : "#review_field",
    removeProductFromCart : "a[title='Remove item']",
    submitReviewCTA : "button[class='action submit primary']",
    footerMsg : "small[class='copyright'] span",
    addToWishList : "a[class='action towishlist'] span",
    addToWishList : "a[class='action tocompare'] span",
    cartQuantity : ".counter-number",
    productTotalPrice : "span[data-bind='html: cart().subtotal_excl_tax'] span[class='price']",
    itemInCartOnCard : ".count",
    totalQuantityOnCard: "#cart-item-281667-qty",
    sizeOnCard : "div[class='swatch-opt-510'] div[aria-label='Size']",
    eachPriceOnCard : "span[class='minicart-price'] span[class='price']",
    proceedToCheckoutCTA : "#top-cart-btn-checkout",
    shippingPageFname : "#O42IFJG",
    shippingPageLname : "#QJF6C54",
    shippingPageCompanyName : "#QRJ35N3",
    shippingPageAdd1 : "#BCF6JFY",
    shippingPageAdd2 : "#C09PJQR",
    shippingPageAdd3 : "#U38W3XX",
    shippingPageCityName : "#JI4BPES",
    shippingPageStateName : "#SSSXIO5",
    shippingPageCountryName : "#U4XG8YR",
    shippingPagePhoneNo : "#OO4TODU",
    shippingMethodTitle : "div[class='checkout-shipping-method'] div[class='step-title']",
    shippingMethodFirdstCheckBox : "input[value='tablerate_bestway']",
    nextCTAOnShippingPage : ".primary",
    shippingPagePostalCode : "#TO6OOHP",
    shipingAddCheckBox : "#billing-address-same-as-shipping-checkmo",
    orderSummuryTitle : "span[class='title']" ,
    orderSummuryProductName : ".product-item-name",
    orderSummuryProductQuantity: ".value",
    orderSummuryProductPriceTotal : "span[class='cart-price'] span[class='price']",
    orderSummuryProductColor : "dd:nth-child(2)",
    shippingPageAddCTA : ".button.action.continue.primary",
    placeOrderCTA : "body.checkout-index-index.page-layout-checkout:nth-child(2) div.page-wrapper:nth-child(6) main.page-main div.columns:nth-child(3) div.column.main div.checkout-container:nth-child(3) div.opc-wrapper:nth-child(5) ol.opc li.checkout-payment-method div.step-content form.form.payments fieldset.fieldset:nth-child(2) div.opc-payment:nth-child(5) div.items.payment-methods div.payment-group div.payment-method._active div.payment-method-content div.actions-toolbar div.primary button.action.primary.checkout > span:nth-child(1)",
    thankyouPurchaseMsg : "body.checkout-onepage-success.page-layout-1column:nth-child(2) div.page-wrapper:nth-child(5) main.page-main div.page-title-wrapper:nth-child(2) h1.page-title > span.base",
    yourOrderNoIs : "div[class='page-wrapper'] p:nth-child(1)",
    continueShoppingCTA : "a[class='action primary continue'] span",
    validatehomePageLogo : "img[src='https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/images/logo.svg']",
    myAccDropdown : "div[class='panel header'] button[type='button']",
    signoutDropDownMenu : "div[aria-hidden='false'] li[data-label='or'] a",
    addNewAdd : '.action.action-show-popup',
    shipHereCTA : "button[class='action primary action-save-address'] span"


}

validateSearchBox()
    {
        cy.get(this.weblocators.searchBox).contains('Search entire store here...')
    }

validateProductCategoryList()
    {
        cy.get(this.weblocators.productCategoryList).contains("What's New","Women","Men","Gear","Training","Sale")
    }

validateSearchBoxOnHomePage()
    {
        cy.get(this.weblocators.searchBox).should('have.css','element.style')
    }

validateSearchBoxwithProductName()
{
    cy.get(this.weblocators.searchBox).type('Tshirt')
}

verifyCartIcon()
    {
        cy.get(this.weblocators.verifyCartIcon).should('have.css', '.minicart-wrapper')
    }

validateSortByOption()
    {
        cy.get(this.weblocators.sortByOptionPDP).contains('Sort By')
    }

validatePDPSearchHeading()
    {
        cy.get(this.weblocators.productHeaderName).contains('Search results for')
    }

validateProductName()
{
    cy.get(this.weblocators.productName).contains("Atomic Endurance Running Tee (Crew-Neck)")
}

validateProductSize()
{
cy.get(this.weblocators.sizeOfProduct).contains('XS','S','M','L','XL')
}

validateProductStars()
{
    cy.get(this.weblocators.verifyStarRating).should('have.css' ,'.rating-summary')

}

validateProductPrice()
{
    cy.get(this.weblocators.productPrice).should('have.css' ,'.product-item .price-box .price')

}

validateColorOfProduct()
{
    cy.get(this.weblocators.productColor).should('have.css','.swatch-attribute-options')
}

validateAddToCartCTA() 
{
    cy.get(this.weblocators.addToCartCTA).contains('Add to Cart')
}

validateProductToCart() 
{
    cy.get(this.weblocators.addToCartCTA).click()
    cy.get(this.weblocators.addToCartCTAOnPDP).click()
}

selectTshirt()
{
    cy.get(this.weblocators.searchTshirtMan).click()
}

validateProductQtyInCart()
{
    const productQuantity = 1
    cy.get(this.weblocators.cartQuantity).to.eq('productQuantity')
}

addProductSize()
{
    cy.get(this.weblocators.SelectsizeOfProduct).click()
}

addProductColor()
{
    cy.get(this.weblocators.productColor).click()
}

modifyProductQty()
{
    cy.get(this.weblocators.productQuantity).type(5).clear()
}

addProductQty()
{
    cy.get(this.weblocators.productQuantity).contains(1)
}

validateaddToCartMsg()
{
    cy.get(this.weblocators.addToCartMsg),contains('You added Atomic Endurance Running Tee (Crew-Neck) to your shopping cart.')
}

validateRemoveProduct()
{
    cy.get(this.weblocators.removeProductFromCart).click()
}

validateProductQtyOnPDP()
{
    cy.get(this.weblocators.productTotalPrice).eq.to(this.weblocators.removeProductFromCart)
}

validateProceedToCheckOutCTAOnPDP()
{
    cy.get(this.weblocators.proceedToCheckoutCTA).contains('Proceed to Checkout')
}

clickOnProceedToCheckOutCTAOnPDP()
{
    cy.get(this.weblocators.proceedToCheckoutCTA).click()

}

clickOnFirstNameOnShippingPage()
{
    cy.get(this.weblocators.shippingPageFname).contains('aaba')
    
}

clickOnLastNameOnShippingPage()
{
    cy.get(this.weblocators.shippingPageLname).contains('dhaba')
    
}

clickOnCompanyNameOnShippingPage()
{
    cy.get(this.weblocators.shippingPageCompanyName).tyep('ABC Corp')
    
}
clickOnAdd1OnShippingPage()
{
    cy.get(this.weblocators.shippingPageAdd1).tyep('link Rd')
    
}

clickOnAdd2OnShippingPage()
{
    cy.get(this.weblocators.shippingPageAdd2).type('Goregaon')
    
}

clickOnAdd3OnShippingPage()
{
    cy.get(this.weblocators.shippingPageAdd3).type('Mumbai')
    
}

clickOnCityOnShippingPage()
{
    cy.get(this.weblocators.shippingPageCityName).type('Mumbai')
    
}

clickOnStateOnShippingPage()
{
    cy.get(this.weblocators.shippingPageStateName).click().text('New York')
    
}

clickOnPostalCodeOnShippingPage()
{
    cy.get(this.weblocators.shippingPagePostalCode).type('400104')
    
}

clickOnCountryOnShippingPage()
{
    cy.get(this.weblocators.shippingPageCountryName).type('United States')
    
}

clickOnPhoneNumberOnShippingPage()
{
    cy.get(this.weblocators.shippingPagePhoneNo).type('7208732205')
    
}

selectShippingMethod()
{
    cy.get(this.weblocators.shippingMethodFirdstCheckBox).click()

}

 clickOnNextCTA()
{
    cy.get(this.weblocators.nextCTAOnShippingPage).click()

}

clickOnPlaceOrderCTA()
{
    cy.get(this.weblocators.placeOrderCTA).click()

}

thankyouPurchaseMsg()
{
    cy.get(this.weblocators.thankyouPurchaseMsg).contains('Thank you for your purchase!')
}

clickOnCheckBox()
{
    cy.get(this.weblocators.shipingAddCheckBox).click()
}


addNewAddOnShippingPage()
{
    cy.get(this.weblocators.addNewAdd).click()
}

clickOnShipHereCTA()
{
    cy,get(this.weblocators.shipHereCTA).click()
}

validateOrderNo()
{
    cy.get(this.weblocators.yourOrderNoIs).contains('Your order number is:')
}

}


