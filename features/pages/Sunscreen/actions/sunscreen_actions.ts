import { leastExpensiveSPF30, leastExpensiveSPF50 } from "../tasks/sunscreen_tasks";
import { addSPF30Button, addSPF50Button, cart, payment, submitButton } from "../user_interface/sunscreen_ui";


export async function clickAddSPF50(){
    const leastExpensive = await leastExpensiveSPF50();
    const button = await addSPF50Button(leastExpensive);
    await button.click()
}

export async function clickAddSPF30(){
    const leastExpensive=await leastExpensiveSPF30();
    const button=await addSPF30Button(leastExpensive);
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
    const submit=await submitButton;
    await submit.waitForDisplayed();
    await submit.waitForClickable();
    await submit.click(); 
}