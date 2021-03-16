const { assert } = require("console");

module.exports = class Page {
    afterEach() {
        browser.reset();
    }
    open() {
        return browser.url(`https://www.volvocars.com/intl/v/car-safety/a-million-more`)

    }



}

