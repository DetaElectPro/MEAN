/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * add and edit by DetaElect Teem
 */

const browserProvidersConf = require('./browser-providers.conf');
const {generateSeed} = require('./jasmine-seed-generator');

// Karma configuration
// Generated on Thu Sep 25 2014 11:52:02 GMT-0700 (PDT)
module.exports = function(config) {
  config.set({

    frameworks: ['jasmine'],

    client: {
      jasmine: {
        random: true,
        seed: generateSeed('karma-js.conf'),
      },
    },

    files: [
      // Sources and specs.
      // Loaded through the System loader, in `test-main.js`.
      {pattern: 'dist/all/@angular/**/*.js', included: false, watched: true},

      // Serve AngularJS for `ngUpgrade` testing.
      {pattern: 'node_modules/angular-1.5/angular?(.min).js', included: false, watched: false},
      {pattern: 'node_modules/angular-mocks-1.5/angular-mocks.js', included: false, watched: false},
      {pattern: 'node_modules/angular-1.6/angular?(.min).js', included: false, watched: false},
      {pattern: 'node_modules/angular-mocks-1.6/angular-mocks.js', included: false, watched: false},
      {pattern: 'node_modules/angular/angular?(.min).js', included: false, watched: false},
      {pattern: 'node_modules/angular-mocks/angular-mocks.js', included: false, watched: false},

      'node_modules/core-js/client/core.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/zone-testing.js',
      'node_modules/zone.js/dist/task-tracking.js',

      // Including systemjs because it defines `__eval`, which produces correct stack traces.
      'test-events.js',
      'shims_for_IE.js',
      'node_modules/systemjs/dist/system.src.js',

      // Serve polyfills necessary for testing the `elements` package.
      {
        pattern: 'node_modules/@webcomponents/custom-elements/**/*.js',
        included: false,
        watched: false
      },
      {pattern: 'node_modules/mutation-observer/index.js', included: false, watched: false},

      {pattern: 'node_modules/rxjs/**', included: false, watched: false, served: true},
      'node_modules/reflect-metadata/Reflect.js',
      'tools/build/file2modulename.js',
      'test-main.js',
      {pattern: 'dist/all/@angular/empty.*', included: false, watched: false},
      {pattern: 'packages/platform-browser/test/static_assets/**', included: false, watched: false},
      {
        pattern: 'packages/platform-browser/test/browser/static_assets/**',
        included: false,
        watched: false,
      },
      {pattern: 'packages/common/i18n/**', included: false, watched: false, served: true},
    ],

    exclude: [
      'dist/all/@angular/_testing_init/**',
      'dist/all/@angular/**/e2e_test/**',
      'dist/all/@angular/**/*node_only_spec.js',
      'dist/all/@angular/benchpress/**',
      'dist/all/@angular/compiler-cli/**',
      'dist/all/@angular/compiler-cli/src/ngtsc/**',
      'dist/all/@angular/compiler-cli/test/compliance/**',
      'dist/all/@angular/compiler-cli/test/ngtsc/**',
      'dist/all/@angular/compiler/test/aot/**',
      'dist/all/@angular/compiler/test/render3/**',
      'dist/all/@angular/core/test/bundling/**',
      'dist/all/@angular/core/test/render3/ivy/**',
      'dist/all/@angular/elements/schematics/**',
      'dist/all/@angular/examples/**/e2e_test/*',
      'dist/all/@angular/language-service/**',
      'dist/all/@angular/router/**/test/**',
      'dist/all/@angular/platform-browser/testing/e2e_util.js',
      'dist/all/angular1_router.js',
      'dist/examples/**/e2e_test/**',
    ],

    customLaunchers: browserProvidersConf.customLaunchers,

    plugins: [
      'karma-jasmine',
      'karma-browserstack-launcher',
      'karma-sauce-launcher',
      'karma-chrome-launcher',
      'karma-sourcemap-loader',
    ],

    preprocessors: {
      '**/*.js': ['sourcemap'],
    },

    // Bazel inter-op: Allow tests to request resources from either
    //   /base/node_modules/path/to/thing
    // or
    //   /base/angular/node_modules/path/to/thing
    // This can be removed when all karma tests are run under Bazel, then we
    // don't need this entire config file.
    proxies: {
      '/base/angular/': '/base/',
      '/base/ngdeps/': '/base/',
    },

    reporters: ['dots'],
    sauceLabs: {
      testName: 'Angular2',
      retryLimit: 3,
      startConnect: false,
      recordVideo: false,
      recordScreenshots: false,
      idleTimeout: 600,
      commandTimeout: 600,
      maxDuration: 5400,
    },

    browserStack: {
      project: 'Angular2',
      startTunnel: false,
      retryLimit: 3,
      timeout: 1800,
      pollingTimeout: 10000,
    },

    browsers: ['Chrome'],

    port: 9876,
    captureTimeout: 180000,
    browserDisconnectTimeout: 180000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 300000,
  });

  if (process.env.CIRCLECI) {
    const tunnelIdentifier = process.env['SAUCE_TUNNEL_IDENTIFIER'];

    // Setup the Saucelabs plugin so that it can launch browsers using the proper tunnel.
    config.sauceLabs.build = tunnelIdentifier;
    config.sauceLabs.tunnelIdentifier = tunnelIdentifier;

    // Setup the Browserstack plugin so that it can launch browsers using the proper tunnel.
    // TODO: This is currently not used because BS doesn't run on the CI. Consider removing.
    config.browserStack.build = tunnelIdentifier;
    config.browserStack.tunnelIdentifier = tunnelIdentifier;

    // Try "websocket" for a faster transmission first. Fallback to "polling" if necessary.
    config.transports = ['websocket', 'polling'];
  }
};
