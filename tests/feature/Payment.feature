Feature: Verify Payment Success
  As a user
  I want to verify if my payment was successful
  So that I can ensure my transaction went through

Scenario: Verify Payment Failure
  Given I have added items to my shopping cart
  When I proceed to checkout
  And I fill out my payment details and submit the form
  Then I should see a payment failure message
  

