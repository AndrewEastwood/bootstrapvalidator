define("bsfvalidator", ["jquery", "base", "helper"], function ($, base) {
    return {
        load : function(name, req, onLoad, config) {
            var parts = name.split(';'),
                components = {
                    f: [],
                    l: [],
                    v: []
                },
                // componentsPaths = {
                //     f: 'framework/',
                //     l: 'language/',
                //     v: 'validator/'
                // },
                // types = Object.getOwnPropertyNames(components),
                itemBlock = null;
            // for (var i = 0, len = parts.length; i < len; i++) {
            //     itemBlock = parts[i].match(/(f|l|v)\[(.*)\]/);
            //     if (!itemBlock || itemBlock.length !== 3) {
            //         continue;
            //     }
            //     // add component
            //     components[itemBlock[1]] = components[itemBlock[1]].concat(itemBlock[2].split(','));
            // }
            // debugger;
            // var addons = name.match(regexps.addons);
            // var frameworks = name.match(regexps.frameworks);
            // var languages = name.match(regexps.languages);
            // var validators = name.match(regexps.validators);
            // var parts = rParts.exec(name);
            for (var key in components) {
                for (var i = 0, len = components[key].length; i < len; i++) {
                    components[key][i] = componentsPaths[key] +  components[key][i];
                }
            }

/*
                        // debugger;
            req(components.f, function () {
                        // debugger;
                req(components.v, function () {
                        // debugger;
                    req(components.l, function () {
                        // debugger;
                        onLoad(base);
                    })
                })
            });*/
            req(parts[2].split(','), function(){
                req([parts[1]], function(mod){
                    onLoad(mod);
                });
            });
            
        }
    };
});