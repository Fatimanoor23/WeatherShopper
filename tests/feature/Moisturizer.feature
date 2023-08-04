Feature: Add moisturizers to the cart and complete payment

Scenario: Add two moisturizers to the cart
    Given I am on the moisturizers page
    When the least expensive moisturizer containing Aloe should be added to the cart
    When I select the least expensive moisturizer containing Almond should be added to the cart
    Then I click on the cart icon
    Then I should be redirected to the cart page

Scenario: Verify shopping cart and complete payment
    Given I am on the shopping cart page
    When I verify that the items in the cart are correct
    When I fill out my payment details and submit the form
    Then I should see a payment confirmation message