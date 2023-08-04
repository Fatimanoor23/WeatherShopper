Feature: Shop for moisturizers and sunscreens

As a customer
I want to be able to shop for moisturizers and sunscreens
So that I can protect my skin from the elements

Background:

Given I am on the weather shopper website

Scenario: Shop for moisturizers when the weather is below 19 degrees

When the weather is below 19 degrees
Then I should be taken to the moisturizers page


Scenario: Shop for sunscreens when the weather is above 34 degrees

when the weather is above 34 degrees
Then I should be taken to the sunscreens page


