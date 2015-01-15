/* Simple example how to use bsfvalidator with requirejs app */

require.config({
    baseUrl: '../../src/js/'
});

define(['jquery', 'bsfvalidator!ua_UA:notEmpty,stringLength,regexp,emailAddress'], function ($, fv) {
    $('#defaultForm')
        .formValidation({
            locale: 'ua_UA',
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