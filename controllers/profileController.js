const profileModel = require('../models/profileModel')
module.exports = {

    // show profile
    profile: (req, res) => {
        profileModel.showProfile(req.session.account_name, (err, data) => {
            if(req.session.loggedin){
                const [profile] = data;
                res.render('./profile/profile', {profileData: profile});
            }else{
                res.send('Vui lòng đăng nhập!')
            }
        })

    },

    // show edit profile page
    showEditProfile: async (req, res) => {
        if(req.session.loggedin){
            let position = await profileModel.showPosition();
            profileModel.showProfile(req.session.account_name, (err, data) => {
                if(!err){
                    res.render('./profile/edit-profile', {
                        profileData: data[0],
                        positionData: position
                        });
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },

    // execute edit profile
    editProfile: (req, res) =>{
        if(req.session.loggedin){
            profileModel.editProfile(req.body, req.session.account_name, (err, data) => {
                if(!err){
                    res.redirect('/profile');
                }else{
                    res.send(err)
                }   
            });   
        }else{
            res.send('Vui lòng đăng nhập!')
        }
    }
} 