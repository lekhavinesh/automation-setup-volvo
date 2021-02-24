Feature: Car options

Background: 
Given I open the Volvo Site 
And I handled the cookie
Then the Campaign page should be displayed 


Scenario: Car options 

When the user clicks on the Cars
Then user should be able to view the car category menu
When the user clicks on the menu close button
And the Campaign page should be displayed