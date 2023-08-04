Feature:Add sunscreens to the cart and complete payment

  Scenario: Add two sunscreens to the cart
    Given I am on the sunscreen page
      When I select the least expensive sunscreen that is SPF-50 should be added to my cart  
      When I select the least expensive sunscreen that is SPF-30 should be added to the cart
      Then I click on the cart
      Then I should be redirected to the cart page

Scenario: Verify shopping cart and complete payment
    Given I am on the shopping cart page
    When I verify that the items in the cart are correct
    When I fill out my payment details and submit the form
    Then I should see a payment confirmation message