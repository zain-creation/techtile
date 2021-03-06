'use strict';

/* eslint comma-dangle:[0, "only-multiline"] */

module.exports = {
  client: {
    lib: {
      css: [
        // bower:css
        'public/lib/angular-material/angular-material.css',
        'public/lib/angular-material/angular-material-icons.css',
        'public/lib/angular-material-sidemenu/dest/angular-material-sidemenu.css',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        'public/lib/angular-material-data-table/dist/md-data-table.min.css', // material datatable dependencies
        'public/lib/md-color-picker/dist/mdColorPicker.min.css', // md-color-picker dependences

        // endbower
      ],
      js: [
        // bower:js
        'public/lib/lodash/dist/lodash.min.js', // lodash lib
        'public/lib/tinycolor/dist/tinycolor-min.js', // dependence for color

        'public/lib/angular/angular.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-file-upload/dist/angular-file-upload.min.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-mocks/angular-mocks.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-ui-utils/ui-utils.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        'public/lib/angular-aria/angular-aria.min.js',
        'public/lib/angular-simple-logger/dist/angular-simple-logger.js', // dependencies for ui-leaflet

        'public/lib/angular-material/angular-material.min.js',
        'public/lib/angular-material-icons/angular-material-icons.min.js',
        'public/lib/angular-material-sidemenu/dest/angular-material-sidemenu.js', // angular material sidemenu directive
        'public/lib/angular-material-data-table/dist/md-data-table.min.js', // angular material datatable
        'public/lib/md-color-picker/dist/mdColorPicker.min.js', // angular material color
        'public/lib/angular-fixed-table-header/src/fixed-table-header.min.js'

        // endbower
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    img: [
      'modules/**/*/img/**/*.jpg',
      'modules/**/*/img/**/*.png',
      'modules/**/*/img/**/*.gif',
      'modules/**/*/img/**/*.svg'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: ['gruntfile.js'],
    gulpConfig: ['gulpfile.js'],
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: ['modules/*/server/config/*.js'],
    policies: 'modules/*/server/policies/*.js',
    views: ['modules/*/server/views/*.html']
  }
};
