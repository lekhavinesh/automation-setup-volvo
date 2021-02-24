Feature: Hamburger option

Background: 
Given I open the Volvo Site 
And I handled the cookie
Then the Campaign page should be displayed 

Scenario: Hamburger Link

When the user clicks on the Hamburger button
Then option menu should be displayed
When the user click on the first menu 
Then the submenu section should be displayed
When the user clicks on the close button
And the Campaign page should be displayed