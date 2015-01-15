/* Simple example shows how to use the library with your requirejs project */

require.config({
    baseUrl: '../../src/js/',
    paths: {
        jquery: '../../vendor/jquery/jquery.min',
        bootstrap: '../../vendor/bootstrap/js/bootstrap.min'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

define([
    'jquery',
    'bootstrap',
    'base',
    'helper',
    'framework/bootstrap',
    // 'language/ua_UA', // uncomment to use locale
    'validator/notEmpty',
    'validator/stringLength',
    'validator/regexp',
    'validator/emailAddress'
], function ($) {
    $('#defaultForm')
        .formValidation({
            // locale: 'ua_UA', // uncomment to use locale
            message: 'This value is not valid',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                username: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 6,
                            max: 30
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_\.]+$/
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                        },
                        emailAddress: {
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                        }
                    }
                }
            }
        });
});