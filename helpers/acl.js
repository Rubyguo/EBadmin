/**
 * Created by Administrator on 2016/11/19.
 */

var accesslist = {
    "guest" : {
        "view" : ["/","/mainpage","/graph","fadfaf","afewfew"]
    }
};

exports.access = function (req, res, next) {
    var user = req.session.user;
    if(user!=null) {
        var role = user.role;
        var url = req.url;
        if (role == "guest") {
            for (var i=0; i<accesslist.guest.view.length; i++) {
                if (url == accesslist.guest.view[i]) {
                    next();
                    break;
                }
                else
                {
                    if(i==accesslist.guest.view.length-1)
                        res.redirect('/cannot_access');
                }
            }
        }
    }
    else
        res.redirect('/login');
};

exports.mysqlaccess = function (req, res, next) {
    
};

