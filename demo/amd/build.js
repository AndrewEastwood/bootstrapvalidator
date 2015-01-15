/*
 * build.js example
 * to build this demo app you need to run this command: $ r.js -o build.js
 * also make sure you have r.js installed
 */
({
    baseUrl: '../../src/js/',
    paths: {
        jquery: '../../vendor/jquery/jquery.min',
        bootstrap: '../../vendor/bootstrap/js/bootstrap.min',
        app: '../../demo/amd/app'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    },
    optimize: 'none',
    name: "app",
    out: "app.min.js",
    insertRequire: ['app']
})