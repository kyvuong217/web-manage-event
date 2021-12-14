const siteModel = require('../models/siteModel')
const profileModel = require('../models/profileModel')
module.exports = {

    // show homepage
    homepage: (req, res) => {
        profileModel.showProfile(req.session.account_name, (err, data) => {
            if(!err){
                res.render('index', {check: req.session.loggedin, profileData: data[0]});
            }else{
                res.render(err)
            }
        })
    },

    // show dashboard
    dashboard: (req, res) => {
        profileModel.showProfile(req.session.account_name, (err, data) => {
            if(req.session.loggedin){
                res.render('dashboard', {profileData: data[0]});
            }else{
                res.send('Vui lòng đăng nhập!')
            }
        })
    },

    // execute sign out
    signOut: (req, res, next) => {
        if (req.session) {
            // delete session object
            req.session.destroy(function(err) {
            if(err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
            });
        }
    }

} 