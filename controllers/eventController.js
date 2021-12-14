const eventModel = require('../models/eventModel')
const profileModel = require('../models/profileModel')
module.exports = {

    // show event page
    showEvent: async (req, res) => {
        if(req.session.loggedin){
            let event = await eventModel.showEvent(req.session.account_name);
            profileModel.showProfile(req.session.account_name, (err, data) => {
                if(!err){
                    res.render('./event/event', {
                        profileData: data[0],
                        eventData: event
                        });
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },

    // show create event page
    showCreateEvent: async (req, res) => {
        if(req.session.loggedin){
            let category = await eventModel.showCateEvent();
            let cooperative = await eventModel.showPartner();
            let member = await eventModel.showMember();
            let guest = await eventModel.showGuest();
            profileModel.showProfile(req.session.account_name, (err, data) => {
                if(!err){
                    res.render('./event/create-event', {
                        categoryData: category,
                        cooperativeData: cooperative ,
                        memberData: member,
                        guestData: guest,
                        profileData: data[0]
                    })
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },

    // execute create event
    createEvent: (req, res) => {
        if(req.session.loggedin){
            eventModel.createEvent(req.body, req.file, req.session.account_name, (err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Create successfully'
                    }
                    res.redirect('/create-event');
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập!')
        }
    },

    // edit event
    editEvent: (req, res) => {
        if(req.session.loggedin){
            eventModel.editEvent(req.body, req.file, req.params.id, (err, data) =>{
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Edit successfully'
                    }
                    res.redirect('/event/' + req.params.id)
                }else{
                    res.send(err)
                }
            })
            // res.send(req.body)
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },

    // show detail event
    showDetailEvent: async (req, res) => {
        try {
            let category = await eventModel.showCateEvent();
            let cooperative = await eventModel.showPartner();
            let member = await eventModel.showMember();
            let guest = await eventModel.showGuest();
            let detailEvent = await eventModel.detailEvent(req.params.id);
            profileModel.showProfile(req.session.account_name, (err, data) => {
                if(!err){
                    res.render('./event/detailEvent', { eventData: detailEvent[0],
                                                        profileData: data[0],
                                                        categoryData: category,
                                                        cooperativeData: cooperative ,
                                                        memberData: member,
                                                        guestData: guest,
                                                        check: req.session.admin
                                                        })
                }else{
                    res.send(err)
                }
            })
        }catch(e){
            res.send(e)  
        }

    },

    // delete event
    deleteEvent: (req, res) => {
        if(req.session.loggedin){
            if(!req.session.admin){
                eventModel.deleteEvent(req.params.id, (err, data) =>{
                    if(!err){
                        req.session.message = {
                            type: 'success',
                            message: 'Delete successfully'
                        }
                        res.redirect('/event')
                    }else{
                        res.send(err)
                    }
                })
            }else{
                eventModel.deleteEvent(req.params.id, (err, data) =>{
                    if(!err){
                        req.session.message = {
                            type: 'success',
                            message: 'Delete successfully'
                        }
                        res.redirect('/adminEvent')
                    }else{
                        res.send(err)
                    }
                })
            }
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },

    // show event all for one
    showEventAll: async (req, res) => {
        let eventAll = await eventModel.showEventAll();
        profileModel.showProfile(req.session.account_name, (err, data) => {
            if(!err){
                res.render('./event/eventAll', {check: req.session.loggedin,
                                        eventData: eventAll,
                                        profileData: data[0]})
            }else{
                res.send(err)
            }
        })
    },

    // show detail event for all
    showDetailEventAll: async (req, res) => {
        try {
            let detailEvent = await eventModel.detailEvent(req.params.id);
            profileModel.showProfile(req.session.account_name, (err, data) => {
                if(!err){
                    res.render('./event/detailEventAll', {check: req.session.loggedin,
                                            eventData: detailEvent[0],
                                            profileData: data[0]})
                }else{
                    res.send(err)
                }
            })
        }catch(e){
            res.send(e)  
        }
    },

    // show create excel page
    showExcel: (req, res) => {
        if(req.session.loggedin){
            profileModel.showProfile(req.session.account_name, (err, data) => {
                if(!err){
                    res.render('./event/excelFile', {
                        profileData: data[0],
                        });
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },

    // create event by excel
    createExcel: (req, res) => {
        if(req.session.loggedin){
            eventModel.createExcel('./public/img/' + req.file.originalname,  req.session.account_name, (err,data)=>{
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Import data from excel file successfully'
                    }
                    res.redirect("/event");
                }
                else{
                    res.send(err);
                }
            })
        }else{
            res.send(res)
        }
    }
}