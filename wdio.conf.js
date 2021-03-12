const HtmlReporter = require('@rpii/wdio-html-reporter').HtmlReporter;
const ReportAggregator = require('@rpii/wdio-html-reporter').ReportAggregator;
exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    // ...
    services: ['docker'],
    // ...

    //
    // ==================
    // Specify Test Files
    // ==================

    specs: [
        // './features/cookiepop.feature',
        // './features/cookiesettings.feature',
        // './features/hamburger.feature',
        // './features/home.feature',
        // './features/modelcolor.feature',
        // './features/models.feature',
        './features/video.feature',

    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    capabilities: [{

        maxInstances: 10,
        browserName: 'chrome',
        acceptInsecureCerts: true,
    }],
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    //
    bail: 0,
    //
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],

    framework: 'cucumber',
    //

    reporters: [

        [HtmlReporter, {
            debug: true,
            outputDir: './reports/html-reports/',
            filename: 'report.html',
            reportTitle: 'Test Report Title',
            showInBrowser: true,
            useOnAfterCommandForScreenshot: false,
        }
        ],

    ],
    onPrepare: function (config, capabilities) {
        let reportAggregator = new ReportAggregator({
            outputDir: './reports/html-reports/',
            filename: 'master-report.html',
            reportTitle: 'Master Report',
            browserName: capabilities.browserName,
            collapseTests: true,
            // to use the template override option, can point to your own file in the test project:
            // templateFilename: path.resolve(__dirname, '../template/wdio-html-reporter-alt-template.hbs')
        });
        reportAggregator.clean();
        global.reportAggregator = reportAggregator;
    },
    onComplete: function (exitCode, config, capabilities, results) {
        (async () => {
            await global.reportAggregator.createReport();
        })();
    },

    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/steps.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },


}
