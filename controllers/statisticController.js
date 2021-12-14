const statisticModel = require('../models/statisticModel')
const profileModel = require('../models/profileModel')
module.exports = {

    // show statistic 
    showStatistic: async (req, res) => {
        if(req.session.loggedin){
            let category = await statisticModel.statisticCategory(req.session.account_name);
            let member= await statisticModel.statisticMember(req.session.account_name);
            let guest = await statisticModel.statisticGuest(req.session.account_name);
            let cooperative = await statisticModel.statisticCooperative(req.session.account_name);
            profileModel.showProfile(req.session.account_name, (err, data) => {
                if(!err){
                    res.render('./statistic/statistic', {   profileData: data[0],
                                                            categoryData: category,
                                                            memberData: member,
                                                            guestData: guest,
                                                            cooperativeData: cooperative});
                }else{
                    res.render(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },

    // show statistic all
    showStatisticAll: async (req, res) => {
        try {
            let category = await statisticModel.statisticCategoryAll();
            let member= await statisticModel.statisticMemberAll();
            let guest = await statisticModel.statisticGuestAll();
            let cooperative = await statisticModel.statisticCooperativeAll();
            profileModel.showProfile(req.session.account_name, (err, data) => {
                if(!err){
                    res.render('./statistic/statisticAll', {    check: req.session.loggedin,
                                                                profileData: data[0],
                                                                categoryData: category,
                                                                memberData: member,
                                                                guestData: guest,
                                                                cooperativeData: cooperative})
                }else{
                    res.send(err)
                }
            })
        }catch(e){
            res.send(e)  
        }
    },

    // show statistic of category
    statisticCategoryDetail: async (req, res) => {
        try {
            let event = await statisticModel.statisticCategoryAllDetail(req.params.id, req.session.account_name) 
            profileModel.showProfile(req.session.account_name, (err, data) => {
                if(!err){
                    res.render('./statistic/statisticCategory', {   profileData: data[0],
                                                                    eventData: event})
                }else{
                    res.send(err)
                }
            })
        }catch(e){
            res.send(e)  
        }
    },

    // show statistic of category for all
    statisticCategoryAllDetail: async (req, res) => {
        try {
            let event = await statisticModel.statisticCategoryAllDetail(req.params.id) 
            profileModel.showProfile(req.session.account_name, (err, data) => {
                if(!err){
                    res.render('./statistic/statisticCategoryAll', {   check: req.session.loggedin,
                                                                    profileData: data[0],
                                                                    eventData: event})
                }else{
                    res.send(err)
                }
            })
        }catch(e){
            res.send(e)  
        }
    },
} 