import { clickMoisturizerButton, clickSunscreenButton } from "../actions/ws_actions";
import { temperature } from "../user-interfaces/ws_main_userInterface";

export async function getTemperature(){
    const tempElement = await temperature;
    const temp = await (tempElement.getText());
    let temperatureValue = parseInt(temp);
    console.log(temperatureValue);
    return temperatureValue;
}
export async function goToMoisturizerPage(){
    const temperatureValue=await getTemperature();
    if(temperatureValue<19){
        await clickMoisturizerButton();
    
    }
}
export async function goToSunscreenPage(){
    const temperatureValue=await getTemperature();
    if(temperatureValue>34){
        await clickSunscreenButton();
    }
}