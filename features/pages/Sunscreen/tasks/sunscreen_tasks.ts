import { cardNumberText, cartItem, cartItemPrice, getEmail } from "../../Sunscreen/user_interface/sunscreen_ui";
import { clickAddSPF30, clickAddSPF50, clickCartButton, clickPaymentButton, clickSubmitButton } from "../actions/sunscreen_actions";
import { checkEquals } from "../assertions/sunscreen_assertions";
import { CVC, iFrame, monthYear, postalAddress, spf30Prices, spf50Prices, total } from "../user_interface/sunscreen_ui";

export async function leastExpensiveSPF50(){
  const prices = await spf50Prices();
  if ( prices.length > 0) {
    let priceArray:any= [];
    for (let i = 0; i < prices.length; i++) {
      let element = prices[i];
      let priceText = await element.getText();
      let numericString = await priceText.replace(/\D/g, '');
      let price = parseFloat(numericString);
      await priceArray.push(price);
    }
    let leastExpensive = Math.min(...priceArray);
    console.log(leastExpensive);
    return leastExpensive;
}

}
export async function leastExpensiveSPF30(){
  const prices = await spf30Prices();
  if ( prices.length > 0) {
    let priceArray:any= [];
    for (let i = 0; i < prices.length; i++) {
      let element = prices[i];
      let priceText = await element.getText();
      let numericString = await priceText.replace(/\D/g, '');
      let price = parseFloat(numericString);
      await priceArray.push(price);
    }
    let leastExpensive = Math.min(...priceArray);
    console.log(leastExpensive);
    return leastExpensive;
}
 
}

export async function addSPF50() {
    await clickAddSPF50();

}

export async function addSPF30() {
   await clickAddSPF30();
}

export async function clickCart() {
  await clickCartButton();
}

export async function verifyCartItem(){
  const cartItems=await cartItem;
  const items=await cartItemPrice();
  let priceArray: any[] = [];
  let sum = 0;
      for (let i = 0; i < items.length; i++) {
        let element = await items[i];
        let priceValue = await element.getText();
        let numericString = priceValue.replace(/\D/g, '');
        let price = parseFloat(numericString);
        priceArray.push(price);
        // sum of both items in the priceArray
        for (let j = 0; j < priceArray.length; j++) {
          sum += priceArray[j];
        }   
      }
      console.log("The sum of both items is:",sum);
      console.log(items);
      const totalP:any=await total;
      let totalValue=await totalP.getText();
      let numericString = await totalValue.replace(/\D/g, '');
      let totalPrice:any = parseFloat(numericString);
      console.log("Total price is:",totalPrice);
      
      //VERIFY that total price equals to sum of item price.
      await checkEquals(sum===totalPrice,sum===totalPrice,"The sum of items is not equal to total price.",[]) 
}

export async function verifyPayment(){
  //clicking the payment button to add payment details
  await clickPaymentButton();
  //switching to iframe
  const iframeElement = await iFrame();
  await iframeElement.waitForExist();
  await browser.switchToFrame(iframeElement);
  //set email id
  let email=await getEmail;
  await email.waitForExist();
  await email.waitForDisplayed();
  await email.isDisplayed();
  await email.click();
  await email.setValue("fatima.noor@emumba.com");
  await email.click();
  //set card number value
  const cardNumberField=await cardNumberText();
  await cardNumberField.setValue("4242");
  await cardNumberField.addValue('4242');
  await cardNumberField.addValue('4242');
  await cardNumberField.addValue('4242');
  await cardNumberField.addValue('4242');
  await cardNumberField.click();
  // await cardNumber.addValue(4242424242424242);
  await cardNumberField.click();
  //Set value for month and year
  const mm_yy=await monthYear;
  mm_yy.waitForClickable();
   await  mm_yy.setValue('03');
   await mm_yy.addValue('27');
   await mm_yy.click();
   //set value for CVC
  const cvc=await CVC;
  await cvc.waitForClickable();
  await cvc.setValue(345);
  await cvc.click();
  //set value for postal address
  const zip_code=await postalAddress;
  await zip_code.isDisplayed();
  await zip_code.isEnabled();
  await zip_code.waitForClickable();
  await zip_code.setValue(65432);
  console.log("zip code value",zip_code)
  //after filling out the stripe form , clicking the submit button
  await clickSubmitButton();
}

