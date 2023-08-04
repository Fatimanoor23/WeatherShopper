import { moisturizerButton, sunscreenButton } from "../user-interfaces/ws_main_userInterface";


export async function clickSunscreenButton(){
    const Button = await sunscreenButton;
    // const btnText = await Button.getText();
    await Button.click();
  
 }
 export async function clickMoisturizerButton(){
    const Button =await moisturizerButton;
    // const btnText = await Button.getText();
    await Button.click();
 }