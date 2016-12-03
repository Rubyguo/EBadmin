/**
 * Created by zed on 15/12/26.
 */
'use strict';

/**
 * Config constant
 */
app.constant('JS_REQUIRES', {
    //*** Scripts
    scripts: {
        //*** Javascript Plugins

        //*** jQuery Plugins
        'jquery': 'js/jquery.min.js?v=2.1.4',
        'bootstrap': 'js/bootstrap.min.js?v=3.3.6',
        'icheck': 'js/plugins/iCheck/icheck.min.js',

        //*** Controllers
        'Ctrl1': 'controllers/emailValidation.js'

        //*** Filters
        //'htmlToPlaintext': 'assets/js/filters/htmlToPlaintext.js'
    },
    //*** angularJS Modules
    modules: [
       {
        name: 'module1',
        files: ['module/register.js']
       }
    ]
});
