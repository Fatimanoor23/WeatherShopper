import { leastExpensiveAlmond } from "../tasks/moisturizerTasks";
import { leastExpensiveAloe } from "../tasks/moisturizerTasks";
import { addAlmond, addAloe, cart } from "../user_interface/moisturizer";
import { submit } from "../user_interface/moisturizer";
import { payment } from "../user_interface/moisturizer";

export async function clickAddAloe(){
    console.log("Enter aloe moisturizer");
    const leastExpensive = await leastExpensiveAloe();
    const button = await addAloe(leastExpensive);
    await button.click()
}

export async function clickAddAlmond(){
    console.log("Enter an almond Moisturizer")
    const leastExpensive=await leastExpensiveAlmond();
    const button=await addAlmond(leastExpensive);
    await button.click()
}

export async function clickCartButton(){
    let cartBtn=await cart;
    await cartBtn.waitForClickable(); 
    await cartBtn.click();
}

export async function clickPaymentButton(){
    const paymentButton=await payment; 
    await paymentButton.waitForClickable();
    await paymentButton.click();
}

export async function clickSubmitButton(){
    const submitButton=await submit;
    await submitButton.waitForDisplayed();
    await submitButton.waitForClickable();
    await submitButton.click(); 
}