/**
 * Plugin that resolves required dependecies and starts main validator
 * How to use:
 *    include bsfvalidator according to the following pattern
 *    bsfvalidator!LANG:VALIDATORS
 *
 *    Options:
 *        LANG - (optinal and single value) indicates which language will be used
 *        VALIDATORS - (required) defines which validators should be used
 *    Examples:
 *       1) bsfvalidator!ua_UA:notEmpty,stringLength,regexp,emailAddress
 *       2) bsfvalidator!notEmpty,stringLength,regexp,emailAddress
 *       3) bsfvalidator!notEmpty
 */
define("bsfvalidator", ["jquery", "base", "helper", "framework/bootstrap"], function ($, base) {
    return {
        load: function (name, req, onLoad, config) {
            var parts = name.match(/((.*):)?(.*)/),
                lang = null,
                deps = [];
            if (!parts) {
                onLoad(base);
                return;
            }
            if (parts.length === 4) {
                lang = parts[2];
                deps = parts[3].split(',');
            }
            if (parts.length === 3) {
                deps = parts[2].split(',');
            }
            for (var i = 0, len = deps.length; i < len; i++) {
                deps[i] = 'validator/' + deps[i];
            }
            if (lang) {
                lang = 'language/' + lang;
                deps.unshift(lang);
            }
            req(deps, function(){
                onLoad(base);
            });
        }
    }
});