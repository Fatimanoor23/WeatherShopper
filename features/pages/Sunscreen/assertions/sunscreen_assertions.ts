import assert from 'soft-assert';
import { confirmation, paymentStatus } from '../user_interface/sunscreen_ui';


export async function checkEquals(condition: boolean, condition2:boolean, message:string,[]) {
    await assert.softAssert(condition,condition2, message,[]);
    await assert.softAssertAll(); 
}
  
export async function verifyConfirmationMessage(actual,expected:string,message:string,[]){
    await assert.softAssert(actual,expected,"error",[])
    await assert.softAssertAll();
}

export async function verifyPaymentConfirmationPage(){
    await expect(browser).toHaveUrlContaining('/confirmation');
}

export async function verifycheckStatus(){
    await verifyPaymentConfirmationPage();
    const Status:any=await paymentStatus;
    await Status.waitForDisplayed();
    const confirmationText=await confirmation.getText();
    const confirmation_msg=await confirmationText.toLowerCase();
    const statusText= await  Status.getText();
    const status=statusText.toLowerCase();
    console.log(confirmation_msg);
    console.log(status);
    await verifyConfirmationMessage(status,"payment success","error",[]);  
  }
  