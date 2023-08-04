export const sunscreen= $(`//div/p[contains(@class,"font-weight-bold top-space-10")][contains(.,"SPF-50")][following::p[contains(.,"Price")]]`);
export const sunBlock= $(`//div/p[contains(@class,"font-weight-bold top-space-10")][contains(.,"SPF-30") or contains(.,"spf-30")][following::p[contains(.,"Price")]]`);
export const cart=$(`//button[contains(@class,"thin-text nav-link")]`);
export const cartItem= $(`//div//table[contains(@class,"table table-striped")]//following::th/following::td[contains(.,"SPF-50") or contains(.,"spf-30") or contains(.,"SPF-30")]`);
export const total=$(`//div//p[contains(@class,"justify-content-center h4 top-space-20")]`);
export  const paymentButton=$(`//div//button[contains(@class,"stripe-button-el")]`);
export const getEmail= $('#email');
export  const monthYear=$(`//div//input[contains(@id,"cc-exp")]`);
export const CVC= $(`//div//input[contains(@id,"cc-csc")]`);
export const postalAddress=$(`//div//input[contains(@id,"billing-zip")]`);
export const submitButton=$(`//div//button[contains(@id,"submitButton")]`);
export const payment=$(`//div//button[contains(@class,"stripe-button-el")]`)
export const confirmation= $('//div//p[contains(@class,"text-justify")]');
export const paymentStatus=$(`//div//h2[contains(.,"PAYMENT")]`);

export async function spf50Prices(){
 return $$(`//div/p[contains(@class,"font-weight-bold top-space-10")][contains(.,"SPF-50")][following::p[contains(.,"Price")]]/following-sibling::p`);
} 
export async function spf30Prices(){
    return $$(`//div/p[contains(@class,"font-weight-bold top-space-10")][contains(.,"SPF-30") or contains(.,"spf-30")][following::p[contains(.,"Price")]]/following-sibling::p`);
}

export async function iFrame(){
    return $(`//iframe[contains(@name,"stripe_checkout_app")]`);
  }

export async function cardNumberText(){
    return $('//div[contains(@class,"cardNumberInput input top")]').$(`//div//input[contains(@id,"card_number")]`);
}

export async function addSPF30Button(leastValue:any){
    return $(`//div/p[contains(@class,"font-weight-bold top-space-10")][contains(.,"SPF-30") or contains(.,"spf-30")]/following-sibling::p[contains(.,"${leastValue}")]/following-sibling::button`)


}
export async function addSPF50Button(leastValue:any){
    return $(`//div/p[contains(@class,"font-weight-bold top-space-10")][contains(.,"SPF-50") or contains(.,"spf-50")]/following-sibling::p[contains(.,"${leastValue}")]/following-sibling::button`)
}
export async function cartItemPrice(){
    return $$(`//div//table[contains(@class,"table table-striped")]//following::th/following::td[contains(.,"almond") or contains(.,"Aloe")]`); 
   }