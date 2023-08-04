// /*Verify that the shopping cart looks correct. 
// Then, fill out your payment details and submit the form.
//  You can Google for 'Stripe test card numbers' to use valid cards. 
// Note: The payment screen will error 5% of the time by design
// */

// const { Given, When, Then } = require('@wdio/cucumber-framework');
// import assert from 'soft-assert';
// Given('I am on the shopping cart page', async () => {
//   // await browser.url('https://weathershopper.pythonanywhere.com/sunscreen');
//   // const btn=await $(`//div/p[contains(@class,"font-weight-bold top-space-10")][contains(.,"SPF-50")][following::p[contains(.,"Price")]]/following-sibling::p/following-sibling::button`);
//   // await btn.click();
 
//   // const btn2=await $(`//div/p[contains(@class,"font-weight-bold top-space-10")][contains(.,"SPF-30") or contains(.,"spf-30")][following::p[contains(.,"Price")]]/following-sibling::p/following-sibling::button`);
//   // await btn2.click();
 
//   // let cart=await $(`//button[contains(@class,"thin-text nav-link")]//span`);
//   // await expect(cart).toBeClickable();
//   // await cart.click();
//   // await expect(browser).toHaveUrlContaining('/cart');
//   // await browser.url('https://weathershopper.pythonanywhere.com/cart');
//   });
  
//   When('I verify that the shopping cart looks correct', async () => {
//     const cartItems=$(`//div//table[contains(@class,"table table-striped")]//following::th/following::td[contains(.,"SPF-50") or contains(.,"spf-30") or contains(.,"SPF-30")]`);
//     assert.softAssert(cartItems, cartItems,"error",[]);
//     //checking items prices
//     const items=await $$('//div//table[contains(@class,"table table-striped")]//following::th/following::td/following-sibling::td');
//     let priceArray:any=[];
//     var sum=0;
//     for(let i=0;i<items.length;i++){
//       let element=await items[i];
//       let priceValue=await element.getText();
//       let numericString = priceValue.replace(/\D/g, '');
//       let price = parseFloat(numericString);
//       priceArray.push(price);
//      //sum of both items in the array PriceArray
//       for(let i=0;i<priceArray.length;i++){
//         sum+=priceArray[i];
//       }
      

//     }
//     console.log("The sum of both items is:",sum);
//     console.log(items);
    
 

//     const total:any=await $(`//div//p[contains(@class,"justify-content-center h4 top-space-20")]`);
//     let totalValue=await total.getText();
//    /*  let numericString = await priceText.replace(/\D/g, '');
//       let price = await parseFloat(numericString); */
//       let numericString = await totalValue.replace(/\D/g, '');
//       let totalPrice:any = parseFloat(numericString);
//       await console.log("Total price is:",totalPrice);
    
    
//       //VERIFY that total price equals to sum of item price.
//       // await expect(totalPrice).toEqual(sum);
//       await assert.softAssert(sum==totalPrice,sum==totalPrice,"The sum of item-prices is not equal to Total price shown on the cart",[]);
//       await assert.softAssertAll();

    
//   });
  
//   When('I fill out my payment details and submit the form', async () => {

   
//     const paymentButton=await $(`//div//button[contains(@class,"stripe-button-el")]`);
//     await expect(paymentButton).toBeClickable();
//     await paymentButton.click();
//     const iframeElement = await $('//iframe[contains(@name,"stripe_checkout_app")]');
//     await iframeElement.waitForExist();
//     // await iframeElement.waitForDisplayed();
//     await browser.switchToFrame(iframeElement);
//    //filling out the form
//     let email=await $('#email');
//     await email.waitForExist();
//     await email.waitForDisplayed();
//     //await email.isDisplayed();
  
//     await email.click();
//     await email.setValue("fatima.noor@emumba.com");
//     await email.click();
   

//   const cardNumberField=(await $('//div[contains(@class,"cardNumberInput input top")]')).$(`//div//input[contains(@id,"card_number")]`);
//     (await cardNumberField).setValue("4242");
//     (await cardNumberField).addValue('4242');
//     (await cardNumberField).addValue('4242');
//     (await cardNumberField).addValue('4242');
//     (await cardNumberField).addValue('4242');
//     await cardNumberField.click();



//     // await cardNumber.addValue(4242424242424242);
//     await cardNumberField.click();
//     const mm_yy=await $(`//div//input[contains(@id,"cc-exp")]`);
//     mm_yy.waitForClickable();
//      await  mm_yy.setValue('03');
//      await mm_yy.addValue('27');
//      await mm_yy.click();
//     const cvc=await $(`//div//input[contains(@id,"cc-csc")]`);
//       await cvc.waitForClickable();
//     await cvc.setValue(345);
//     await cvc.click();
//     const zip_code=await $(`//div//input[contains(@id,"billing-zip")]`);
    
//     await zip_code.isDisplayed();
//     await zip_code.isEnabled();
//     await zip_code.waitForClickable();
//     await zip_code.setValue(65432);
//     const submitButton=await $(`//div//button[contains(@id,"submitButton")]`);
//     await submitButton.waitForDisplayed();
//     await submitButton.waitForClickable();
//     await submitButton.click();
//   });
  
//   Then('I should see a payment confirmation message', async () => {
// // await expect(browser).toHaveUrlContaining('/cart');
// await expect(browser).toHaveUrlContaining('/confirmation');
// const paymentStatus=$(`//div//h2[contains(.,"PAYMENT")]`);
// const confirmation_msg=(await (await $('//div//p[contains(@class,"text-justify")]')).getText()).toLowerCase();
// const status=(await (await paymentStatus).getText()).toLowerCase();
// if(status==='payment success'){
//   console.log(confirmation_msg);
//   await assert.softAssert(confirmation_msg,confirmation_msg,"error",[]);
// }
// // else{
// //   console.log(confirmation_msg);
// //   await assert.softAssert(confirmation_msg,confirmation_msg,"error",[]);
// // }
// await assert.softAssertAll();


  
// })


    

  

