const { Given, When, Then } = require('@cucumber/cucumber');

const CampaignPage = require('../pageobjects/campaign.page');

Given(/^I open the Volvo Site$/, () => {
    CampaignPage.open()
});

Given(/^I handled the cookie$/, () => {
    CampaignPage.handleCookiePopup()
});



Then(/^cookie popup should be displayed$/, () => {
    CampaignPage.verifyCookiePopup()
});


Then(/^the user clicks on Accept button$/, () => {
    CampaignPage.cookieAccept()
});

Then(/^the cookie popup should be closed$/, () => {
    CampaignPage.verifyCookiepopupNotDisplayed()
});

Then(/^the Campaign page should be displayed$/, () => {
    CampaignPage.verifyCampaignPage()
});

Then(/^header should have logo as Volvo$/, () => {
    CampaignPage.validateHeaderLogo()
});

When(/^the user clicks on cookie setting button$/, () => {
    CampaignPage.acceptCookieSetting()
});

Then(/^cookie setting pop up should be displayed$/, () => {
    CampaignPage.verifySettingPopup()
});

When(/^the user clicks on Save all$/, () => {
    CampaignPage.saveCookieSetting()
});

When(/^the user clicks on the Cars$/, () => {
    CampaignPage.carModels()
});


Then(/^user should be able to view the car category menu$/, () => {
    CampaignPage.carCategoryMenuDisplayed()
});

When(/^the user clicks on the menu close button$/, () => {
    CampaignPage.carClose()
});


Then(/^the user clicks on the Hamburger button$/, () => {
    CampaignPage.hambugerOptions()
});

Then(/^option menu should be displayed$/, () => {
    CampaignPage.verifyHambugerMenu()
});

When(/^the user click on the first menu$/, () => {
    CampaignPage.clickOnFirstMenu()
});

Then(/^the submenu section should be displayed$/, () => {
    CampaignPage.clickOnFirstMenu()
});

When(/^the user clicks on the close button$/, () => {
    CampaignPage.hamburgerClose()
});

When(/^the user move the mouse over the first model$/, () => {
    CampaignPage.hoverFirstElement()
});

Then(/^the header colour should be changed to blue$/, () => {
    CampaignPage.verifyHeaderElementColor()
});

Given(/^user is in User story$/, () => {
    CampaignPage.verifyUserStory()
});

Given(/^user is in the Explore models section$/, () => {
    CampaignPage.modelExplore()
});

When(/^the user clicks on the next button$/, () => {
    CampaignPage.nextOption()
});

Then(/^the fifth model should be displayed$/, () => {
    CampaignPage.fifthOption()
});

When(/^the user clicks on previuos button$/, () => {

    CampaignPage.previousButton()
});

Then(/^the first model should again be displayed$/, () => {

    CampaignPage.modelExplore()
});

When(/^the user clicks on the watch the story$/, () => {
    CampaignPage.playVideo()
});


Then(/^the frame should get maximised and videoshould get played$/, () => {
    CampaignPage.verifyVideoIsPlaying()
});




