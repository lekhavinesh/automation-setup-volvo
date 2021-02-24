const { assert } = require("console");



/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    afterEach() {
        browser.reset();
    }
    open() {
        return browser.url(`https://www.volvocars.com/intl/v/car-safety/a-million-more`)

    }



}

