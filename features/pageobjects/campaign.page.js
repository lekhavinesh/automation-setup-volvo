const { assert } = require('console');
const { first } = require('lodash');
const Page = require('./page');
const chaiExpect = require('chai').expect

class LoginPage extends Page {


    open() {
        return super.open('login')
    }
    verifyCookiePopup() {
        const accepetCookieButton = $('.accept-cookies-button');
        expect(accepetCookieButton).toBeClickable()

    }

    cookieAccept() {
        const accepetCookieButton = $('.accept-cookies-button');
        accepetCookieButton.waitForClickable({ timeout: 3000 });
        accepetCookieButton.click()
    }

    verifyCookiepopupNotDisplayed() {
        const accepetCookieButton = $('.accept-cookies-button');
        expect(accepetCookieButton).not.toBeClickable()
    }
    verifyCampaignPage() {
        const mainVideoBanner = $('#Video-1')
        expect(mainVideoBanner).toBeClickable()

    }

    validateHeaderLogo() {
        const headerLogo = $("img[alt='Volvo']")
        expect(headerLogo).toBeClickable()

    }

    acceptCookieSetting() {
        const cookieSetting = $('.cookie-settings-button')
        cookieSetting.waitForClickable({ timeout: 3000 });
        cookieSetting.click()

    }
    verifySettingPopup() {
        const allowAll = $("button[title='Allow all']")
        expect(allowAll).toBeClickable()

    }

    saveCookieSetting() {
        const allowAll = $("button[title='Allow all']")
        //expect(allowAll).click()
        allowAll.click()
    }
    carModels() {
        const carOptions = $("button[data-autoid='nav:topNavCarMenu']")
        carOptions.click()
    }
    carCategoryMenuDisplayed() {
        const carOptions = $('#site-nav-cars-menu-section-tab-1')

        expect(carOptions).toBeClickable()

    }

    carClose() {
        const carCloseButton = $("button[data-autoid='nav:carMenuCloseButton']")
        carCloseButton.click()

    }

    hambugerOptions() {
        const hamburgerOptions = $("button[data-autoid='nav:siteNavHamburgerIcon']")
        hamburgerOptions.click()
    }

    verifyHambugerMenu() {
        const hamburgerMenu = $("a[data-autoid='nav:sideNavLinksMenuItem']")
        expect(hamburgerMenu).toBeClickable()
    }
    y
    clickOnFirstMenu() {
        const firstMenu = $("button[data-autoid='nav:sideNavLinksMenuDrawer']")
        firstMenu.click()
    }
    verifySubMenu() {
        const subMenu = $("a[data-autoid='nav:sideNavLinksMenuItem']")
        expect(subMenu).toBeClickable()
    }

    hamburgerClose() {
        const closeButton = $("(//button[@data-autoid='nav:siteNavCloseIcon'])[2]")
        closeButton.click()
    }

    handleCookiePopup() {
        const accepetCookieButton = $('.accept-cookies-button');
        if (accepetCookieButton.isClickable()) {
            accepetCookieButton.waitForClickable({ timeout: 3000 });
            accepetCookieButton.click()
        }
    }

    modelExplore() {
        const modelExplore = $("a[data-autoid='productListCarouselItem-0']")
        expect(modelExplore).toBeClickable()

    }

    nextOption() {
        const nextModel = $("[data-autoid='springCarouselNextButton']")
        nextModel.click()
    }

    fifthOption() {
        const fifthModel = $("a[data-autoid='productListCarouselItem-4']")
        expect(fifthModel).toBeClickable()
        fifthModel.waitForClickable({ timeout: 3000 });

    }

    previousButton() {


        const firstModel = $("button[data-autoid='springCarouselPreviousButton']")
        firstModel.waitForClickable({ timeout: 3000 });
        firstModel.click()
    }

    hoverFirstElement() {
        const firstHeader = $("span[data-autoid='productListCarouselItem:modelName']")
        const color = firstHeader.getCSSProperty('color')
        console.log('\n\n\n\n\n\n\n')
        console.log('--------------------------------------color 1 ', color['value'])
        const modelExplore = $("a[data-autoid='productListCarouselItem-0']")
        modelExplore.moveTo();

    }

    verifyHeaderElementColor() {

        const firstHeader = $("span[data-autoid='productListCarouselItem:modelName']")
        const color = firstHeader.getCSSProperty('color')

        console.log('\n\n\n\n\n\n\n')
        console.log('------------------------------------------------color 2 ', color['value'])

        chaiExpect(color['value']).to.equal('rgba(28,107,186,1)')


    }

    // verifyUserStory() {
    //     const document = $('.video')
    //     // expect(document).toBePresent()
    //     //  document.click()
    //     var myVideo = document.getElementById("video1");
    //     if (document.paused) {
    //         document.play();
    //     }
    //     else {
    //         document.pause();
    //     }
    // }


}

module.exports = new LoginPage();
