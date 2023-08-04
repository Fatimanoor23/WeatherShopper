const { Given, When, Then } = require('@wdio/cucumber-framework');
import {  getTemperature, goToMoisturizerPage, goToSunscreenPage } from '../../features/pages/WeatherShopperMainPage/tasks/ws_tasks';


Given("I am on the weather shopper website", async () => {
  await browser.url('https://weathershopper.pythonanywhere.com/');
});

When("the weather is below 19 degrees", async () => {
  await getTemperature();
});

When("the weather is above 34 degrees", async () => {
  await getTemperature(); 
});

Then("I should be taken to the moisturizers page", async () => {
  await goToMoisturizerPage();

});
Then("I should be taken to the sunscreens page", async () => {
  await goToSunscreenPage();
});
