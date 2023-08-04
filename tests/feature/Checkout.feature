Feature: Shopping Cart Checkout

  Scenario: Verify shopping cart and complete payment

    Given I am on the shopping cart page
    When I verify that the shopping cart looks correct
    And I fill out my payment details and submit the form
    Then I should see a payment confirmation message
  

