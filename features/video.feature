Feature: Play Video

Background: 
Given I open the Volvo Site 
And I handled the cookie
Then the Campaign page should be displayed 

Scenario: Test to verify video

When the user clicks on the watch the story
Then the frame should get maximised and videoshould get played
