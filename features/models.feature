Feature: Models

Background: 
Given I open the Volvo Site 
And I handled the cookie
Then the Campaign page should be displayed 

Scenario: Test to explore models

Given user is in the Explore models section
When the user clicks on the next button
Then the fifth model should be displayed
When the user clicks on previuos button
Then the first model should again be displayed
