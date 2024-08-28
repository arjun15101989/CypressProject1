class addProductPage{
    
weblocators={


    signIn : "(div[class='panel header'] li[data-label='or'] a)",
    emailID : '#email',
    pwdXpath: "//fieldset[@class='fieldset login']//input[@id='pass']",
    CTAsignIN : '#send2 span , .email span',
    productCategoryList : '#ui-id-2',
    mensProduct : "a[id='ui-id-5'] span[class='ui-menu-icon ui-icon ui-icon-carat-1-e']",
    searchBox : "#search",
    searchTshirtMan : "#qs-option-2",
    sortByOptionPDP : "div[class='column main'] div:nth-child(1) div:nth-child(3) label:nth-child(1)",
    searchProductHeader : ".base",
    productNameXpath : "//a[normalize-space()='Atomic Endurance Running Tee (Crew-Neck)']",
    productHeaderNameXpath : "//span[@class='base']",
    sizeOfProduct : "#option-label-size-143-item-170",
    productPrice : "span[id='product-price-510'] span[class='price']",
    productColor : "#option-label-color-93-item-50", 
    productQuantity : "#qty",
    addToCartCTA : "button[id='product-addtocart-button'] span",
    addToCartMsg : "div[data-bind='html: $parent.prepareMessageForHtml(message.text)']",
    verifyStarRating : "body > div:nth-child(5) > main:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)",
    reviewSection : "div[class='reviews-actions'] span:nth-child(2)",
    addReview : ".action.add",
    reviewerName : "#nickname_field",
    summaryReview : "#summary_field",
    giveReview : "#review_field",
    submitReviewCTA : "button[class='action submit primary']",
    footerMsg : "small[class='copyright'] span",
    addToWishList : "a[class='action towishlist'] span",
    addToWishList : "a[class='action tocompare'] span",
    cartQuantity : ".counter-number",
    productTotalPrice : "span[data-bind='html: cart().subtotal_excl_tax'] span[class='price']",
    itemInCartOnCard : ".count",
    totalQuantityOnCard: "#cart-item-281667-qty",
    sizeOnCardXpath : "dd:nth-child(2) span:nth-child(1)",
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
    orderSummuryTitle : "span[class='title']" ,
    orderSummuryProductName : ".product-item-name",
    orderSummuryProductQuantity: ".value",
    orderSummuryProductPriceTotal : "span[class='cart-price'] span[class='price']",
    orderSummuryProductSizeXpath : "//dd[normalize-space()='XL']",
    orderSummuryProductColor : "dd:nth-child(2)",
    shippingPageAddCTA : ".button.action.continue.primary",
    placeOrderCTAXpath : "//span[normalize-space()='Place Order']",
    thankyouPurchaseMsgXpath : "//span[@class='base']",
    yourOrderNoIs : "div[class='page-wrapper'] p:nth-child(1)",
    continueShoppingCTA : "a[class='action primary continue'] span",
    validatehomePageLogo : "img[src='https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/images/logo.svg']",
    myAccDropdown : "div[class='panel header'] button[type='button']",
    signoutDropDownMenuXpath : "//div[@aria-hidden='false']//a[normalize-space()='Sign Out']"

}

openURL()
    {
        cy.visit(Cypress.env('URL'))
    }




}


