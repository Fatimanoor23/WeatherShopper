const { Given, When, Then } = require('@wdio/cucumber-framework');
import assert from 'soft-assert';
import { verifyCartItems } from '../../features/pages/Moisturizer/tasks/moisturizerTasks';
import { clickCart, verifyCartItem, verifyPayment } from '../../features/pages/Sunscreen/tasks/sunscreen_tasks';
import { clickAddSPF30, clickAddSPF50 } from '../../features/pages/Sunscreen/actions/sunscreen_actions';
import { verifycheckStatus } from '../../features/pages/Sunscreen/assertions/sunscreen_assertions';

Given('I am on the sunscreen page', async () => {
    await browser.url('https://weathershopper.pythonanywhere.com/sunscreen');
  });
  
  When('I select the least expensive sunscreen that is SPF-50 should be added to my cart', async () => {
    await clickAddSPF50();
  });

  When('I select the least expensive sunscreen that is SPF-30 should be added to the cart', async () => {
    await clickAddSPF30();
  });

  Then('I click on the cart', async () => {
    await clickCart();
  
  });
  
  Then('I should be redirected to the cart page', async () => {
    //redirected to cartPage where we checkout 
    await expect(browser).toHaveUrlContaining('/cart');
  });

  //scenario 2  
  Given('I am on the shopping cart page', async () => {
   
    await browser.url('https://weathershopper.pythonanywhere.com/cart');
    });
    
    When('I verify that the items in the cart are correct', async () => {
      await verifyCartItem();
      })
    
    When('I fill out my payment details and submit the form', async () =>{
      await verifyPayment();

    });
    
  Then('I should see a payment confirmation message', async () => {
    await verifycheckStatus(); 
  })
  
 

