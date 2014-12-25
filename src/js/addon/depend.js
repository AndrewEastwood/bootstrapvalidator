/** @license
 * Plugin to load JS files that have dependencies but aren't wrapped into
 * `define` calls.
 * Author: Miller Medeiros
 * Version: 0.1.0 (2011/12/13)
 * Released under the MIT license
 */
define(function () {

    var addonParts = /a[(.*)];/;
    var frameworkParts = /f[(.*)];/;
    var languageParts = /l[(.*)];/;
    var validatorParts = /v[(.*)];/;

    return {

        //example: depend!bar[jquery,lib/foo]
        load : function(name, req, onLoad, config) {
            var addons = name.match(addonParts);
            var frameworks = name.match(frameworkParts);
            var languages = name.match(languageParts);
            var validators = name.match(validatorParts);
            debugger;
            // var parts = rParts.exec(name);

            // req(parts[2].split(','), function(){
            //     req([parts[1]], function(mod){
            //         onLoad(mod);
            //     });
            // });
        }

    };

});
