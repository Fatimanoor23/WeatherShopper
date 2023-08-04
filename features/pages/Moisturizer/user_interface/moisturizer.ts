
export const aloeMoisturizer= $$(`//div//p[@class="font-weight-bold top-space-10"][contains(text(),'Aloe') or contains(text(),'aloe')][following::p[contains(.,"Price")]]`);
export const almondMoisturizer= $$(`//div//p[@class="font-weight-bold top-space-10"][contains(text(),'Almond') or contains(text(),'almond')][following::p[contains(.,"Price")]]`);
export const cart=$(`//button[contains(@class,"thin-text nav-link")]`);
export const payment=$(`//div//button[contains(@class,"stripe-button-el")]`)
export const total= $(`//div//p[contains(@class,"justify-content-center h4 top-space-20")]`); 
export const getEmail= $('#email') 
export const  monthYear= $(`//div//input[contains(@id,"cc-exp")]`);
export const CVC=$(`//div//input[contains(@id,"cc-csc")]`);
export const  postalAddress= $(`//div//input[contains(@id,"billing-zip")]`);
export const submit= $(`//div//button[contains(@id,"submitButton")]`);
export const confirmation= $('//div//p[contains(@class,"text-justify")]');
export const paymentStatus=$(`//div//h2[contains(.,"PAYMENT")]`);

export async function cardNumberText(){
  return $('//div[contains(@class,"cardNumberInput input top")]').$(`//div//input[contains(@id,"card_number")]`);
}
export async function iFrame(){
  return $(`//iframe[contains(@name,"stripe_checkout_app")]`);
}

export async function aloePrice(){
  return $$(`//div//p[@class="font-weight-bold top-space-10"][contains(text(),'Aloe') or contains(text(),'aloe')][following::p[contains(.,"Price")]]/following-sibling::p`);

}
export async function almondPrice(){
  return $$(`//div//p[@class="font-weight-bold top-space-10"][contains(text(),'Almond') or contains(text(),'almond')]/following-sibling::p`);    
}
export async function addAlmond(leastValue:any){
 return $(`//div//p[@class="font-weight-bold top-space-10"][contains(text(),'Almond') or contains(text(),'almond')]/following-sibling::p[contains(.,"${leastValue}")]/following-sibling::button`);
} 
//(`//div//p[@class="font-weight-bold top-space-10"][contains(text(),'Aloe') or contains(text(),'aloe')]/following-sibling::p[contains(.,"${")]/following-sibling::button`)  
export async function addAloe(leastValue:any){
  return $(`//div//p[@class="font-weight-bold top-space-10"][contains(text(),'Aloe') or contains(text(),'aloe')]/following-sibling::p[contains(.,"${leastValue}")]/following-sibling::button`)
}

export async function cartItem(){
  return $$(`//div//table[contains(@class,"table table-striped")]//following::th/following::td[contains(.,"almond") or contains(.,"Aloe")]`); 
 }

  export async function  cartItemPrice(){
  return $$('//div//table[contains(@class,"table table-striped")]//following::th/following::td/following-sibling::td');
}
  


