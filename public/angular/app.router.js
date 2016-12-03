/**
 * Created by zed on 15/12/26.
 */
app.config(['$ocLazyLoadProvider', 'JS_REQUIRES', '$provide',
    function ($ocLazyLoadProvider, jsRequires, $provide) {

        app.constant = $provide.constant;

        // LAZY MODULES

        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: jsRequires.modules
        });

        // Generates a resolve object previously configured in constant.JS_REQUIRES (config.constant.js)
    }]);