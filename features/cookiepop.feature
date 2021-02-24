Feature: Cookie Popup

Scenario: As a user, I can access Volvo site

Given I open the Volvo Site
Then cookie popup should be displayed
When the user clicks on Accept button
Then the cookie popup should be closed
And the Campaign page should be displayed
Then header should have logo as Volvo