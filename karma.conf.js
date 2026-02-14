const path = require('path');
module.exports = function (config) {
    config.set({
        //root path location to resolve paths defined in files and exclude
        basePath: '.',
        //files/patterns to exclude from loaded files
        exclude: [],
        //files/patterns to load in the browser
        files: [
            {pattern: "spec/**/*.ts"}
        ],

        //executes the tests whenever one of watched files changes
        autoWatch: true,
        //if true, Karma will run tests and then exit browser
        singleRun: true,
        //if true, Karma fails on running empty test-suites
        failOnEmptyTestSuite: false,
        //reduce the kind of information passed to the bash
        logLevel: config.LOG_WARN, //config.LOG_DISABLE, config.LOG_ERROR, config.LOG_INFO, config.LOG_DEBUG

        //list of frameworks you want to use, only jasmine is installed with this boilerplate
        frameworks: ['jasmine', 'karma-typescript'],
        //list of browsers to launch and capture
        browsers: ['ChromeHeadlessNoSandbox'/*,'PhantomJS','Firefox','Edge','ChromeCanary','Opera','IE','Safari'*/],
        //list of reporters to use
        reporters: ['kjhtml', 'spec' /*'mocha', 'kjhtml','dots','progress','spec'*/],

        //address that the server will listen on, '0.0.0.0' is default
        listenAddress: '127.0.0.1',
        //hostname to be used when capturing browsers, 'localhost' is default
        hostname: 'localhost',
        //the port where the web server will be listening, 9876 is default
        port: 9876,
        //when a browser crashes, karma will try to relaunch, 2 is default
        retryLimit: 0,
        //how long does Karma wait for a browser to reconnect, 2000 is default
        browserDisconnectTimeout: 5000,
        //how long will Karma wait for a message from a browser before disconnecting from it, 10000 is default
        browserNoActivityTimeout: 10000,
        //timeout for capturing a browser, 60000 is default
        captureTimeout: 60000,

        client: {
            //capture all console output and pipe it to the terminal, true is default
            captureConsole: false,
            //if true, Karma clears the context window upon the completion of running the tests, true is default
            clearContext: true,
            //run the tests on the same window as the client, without using iframe or a new window, false is default
            runInParent: false,
            //true: runs the tests inside an iFrame; false: runs the tests in a new window, true is default
            useIframe: true,
            jasmine: {
                //tells jasmine to run specs in semi random order, false is default
                random: false
            }
        },
        plugins: [
            require('karma-jasmine'),
            require("karma-typescript"),
            require('karma-spec-reporter'),
            require('karma-jasmine-html-reporter'),
            require('karma-chrome-launcher')
        ],
        preprocessors: {
            "**/*.ts": "karma-typescript" // *.tsx for React Jsx
        },
        karmaTypescriptConfig: {
            tsconfig: "./tsconfig.spec.json",
            bundlerOptions: {
                transforms: [
                    require('karma-typescript-es6-transform')()
                ],
                resolve: {
                    alias: {
                        "@themost/xml": path.resolve(__dirname, './dist/index.js'),
                    }
                }
            }
        },
        customLaunchers: {
            ChromeNoSandbox: {
                base: 'Chrome',
                flags: [
                    '--no-sandbox',
                    '--enable-logging=stderr',
                    '--disable-web-security',
                    '--disable-gpu',
                    '--no-proxy-server',
                    '--remote-debugging-port=9222'
                ]
            },
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: [
                    '--no-sandbox'
                ]
            }
        },
        /*karma-mocha-reporter config*/
        mochaReporter: {
            output: 'full'  //full, auto watch, minimal
        }
    });
};
