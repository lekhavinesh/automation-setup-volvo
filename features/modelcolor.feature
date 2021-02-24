Feature: Model colour

Background: 
Given I open the Volvo Site 
And I handled the cookie
Then the Campaign page should be displayed 


Scenario: Test to explore model colour
Given user is in the Explore models section
When the user move the mouse over the first model
Then the header colour should be changed to blue