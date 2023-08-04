const { Given, When, Then } = require('@wdio/cucumber-framework');
import { checkStatus } from '../../features/pages/Moisturizer/assertions/moisturizer';
import * as moisturizerTasks from '../../features/pages/Moisturizer/tasks/moisturizerTasks';
import { leastExpensiveAlmond } from '../../features/pages/Moisturizer/tasks/moisturizerTasks';
import { addAloeMoisturizer } from '../../features/pages/Moisturizer/tasks/moisturizerTasks';
import { addAlmondMoisturizer } from '../../features/pages/Moisturizer/tasks/moisturizerTasks';
import { verifyPayment } from '../../features/pages/Moisturizer/tasks/moisturizerTasks';

Given("I am on the moisturizers page", async () => {
    await browser.url('https://weathershopper.pythonanywhere.com/moisturizer');
  });

  When("the least expensive moisturizer containing Aloe should be added to the cart", async () => {
    await addAloeMoisturizer();
  }); 

  When("I select the least expensive moisturizer containing Almond should be added to the cart", async () => {
    await addAlmondMoisturizer();
  });

  Then("I click on the cart icon", async () => {
    await moisturizerTasks.clickCart();
  }); 

  Then("I should be redirected to the cart page", async () => {
    await browser.url('https://weathershopper.pythonanywhere.com/cart');
  });
  
  //scenario 2
  Given('I am on the shopping cart page', async () => {
    await browser.url('https://weathershopper.pythonanywhere.com/cart');
    });
    
  When('I verify that the items in the cart are correct', async () => {
    await moisturizerTasks.verifyCartItems();
    });
    
  When('I fill out my payment details and submit the form', async () => {
    await verifyPayment();
    });
    
  Then('I should see a payment confirmation message', async () => {
   await checkStatus();
   
  })
  
 

