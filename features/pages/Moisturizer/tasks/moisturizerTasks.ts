
import { cartItem } from '../user_interface/moisturizer';
import { cartItemPrice } from '../user_interface/moisturizer';
import { total } from '../user_interface/moisturizer';
import { getEmail } from '../user_interface/moisturizer';
import { CVC } from '../user_interface/moisturizer';
import { cardNumberText } from '../user_interface/moisturizer';
import { monthYear } from '../user_interface/moisturizer';
import { postalAddress } from '../user_interface/moisturizer';
import { iFrame } from '../user_interface/moisturizer';
import { clickAddAlmond, clickAddAloe, clickCartButton, clickPaymentButton, clickSubmitButton } from '../actions/moisturizer';
import { checkEquals} from '../assertions/moisturizer';
import { aloePrice,almondPrice } from '../user_interface/moisturizer';
export async function leastExpensiveAloe(){
  const prices = await aloePrice();
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
//await verifyLeastExpensive(leastExpensiveAloe,leastExpensiveAloe,"This is not least expensive moisturizer.",[]);
}
export async function leastExpensiveAlmond(){
  const prices = await almondPrice();
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
 //await verifyLeastExpensive(leastExpensiveAlmond,leastExpensiveAlmond,"This is not least expensive moisturizer.",[])
}

export async function addAlmondMoisturizer() {
await clickAddAlmond();
}

export async function addAloeMoisturizer() {
  await clickAddAloe();
}

export async function clickCart() {
  await clickCartButton();
}

export async function verifyCartItems(){
  const cartItems=await cartItem();
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
  await cardNumberField.addValue('4242');//can add for loop for this
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

