Feature: Store Home Page

Scenario: Selecting the cookie setting page

Given I open the Volvo Site
Then cookie popup should be displayed
When the user clicks on cookie setting button
Then cookie setting pop up should be displayed
When the user clicks on Save all
Then the cookie popup should be closed