const adminModel = require('../models/adminModel')
const eventModel = require('../models/eventModel')
const profileModel = require('../models/profileModel')
const detailEvent = require('../models/eventModel')
const sendEmail = require('../models/emailModel');
module.exports = {
    adminPage: (req, res) => {
        if(req.session.admin){
            res.render('./admin/adminPage')
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },

    // Event all
    showAdminEvent: async (req, res) => {
        if(req.session.admin){
            let eventAll = await eventModel.showEventAll();
            res.render('./admin/adminEvent', {eventData: eventAll})
        }else{
            res.send("Vui lòng đăng nhập");
        }
    },

    // Confirm event
    showConfirmEvent: async (req, res) => {
        if(req.session.admin){
            let confirmEvent = await adminModel.showConfirmEvent();
            return res.render('./admin/confirmEvent', {eventData: confirmEvent});
        }else{
            res.send("Vui lòng đăng nhập");
        }
    },
    confirmEvent: async (req,res) => {
        adminModel.confirmEvent(req.params.id, async (err, data) => {
            if(req.session.admin){
                let event = await detailEvent.detailEvent(req.params.id);
                await sendEmail.sendEmail(event[0]);
                req.session.message = {
                    type: 'success',
                    message: 'Confirm event successfully'
                }

                res.redirect('/confirmEvent')
            }else{
                res.send(err)
            }
        })
    },
    deleteConfirmEvent: (req, res) => {
        eventModel.deleteEvent(req.params.id, (err, data) => {
            if(req.session.loggedin){
                // req.session.message = {
                //     type: 'success',
                //     message: 'Delete event successfully'
                // }
                res.redirect('/confirmEvent')
            }else{
                res.send(err)
            }
        })
    },

    // Category
    showCategory: async (req, res) => {
        if(req.session.admin){
            let category = await eventModel.showCateEvent();
            return res.render('./admin/category', {categoryData: category})
        
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },
    createCategory: (req, res) => {
        if(req.session.admin){
            adminModel.createCategory(req.body,(err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Confirm event successfully'
                    }
                    res.redirect('/category')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },
    deleteCategory: (req, res) => {
        if(req.session.admin){
            adminModel.deleteCategory(req.params.id,(err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Delete successfully'
                    }
                    res.redirect('/category')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },
    editCategory: (req, res) => {
        if(req.session.admin){
            adminModel.editCategory(req.body, (err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Edit successfully'
                    }
                    res.redirect('/category')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },

    // Positon
    showPosition: async (req, res) => {
        if(req.session.admin){
            let position = await profileModel.showPosition();
            return res.render('./admin/position', {positionData: position})
        
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },
    createPosition: (req, res) => {
        if(req.session.admin){
            adminModel.createPosition(req.body,(err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Confirm event successfully'
                    }
                    res.redirect('/position')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },
    deletePosition: (req, res) => {
        if(req.session.admin){
            adminModel.deletePositon(req.params.id,(err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Delete successfully'
                    }
                    res.redirect('/position')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },
    editPosition: (req, res) => {
        if(req.session.admin){
            adminModel.editPosition(req.body, (err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Edit successfully'
                    }
                    res.redirect('/position')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },

    // Memeber
    showMember: async (req, res) => {
        if(req.session.admin){
            let memberData = await eventModel.showMember();
            return res.render('./admin/member', {memberData: memberData})
        
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },
    createMember: (req, res) => {
        if(req.session.admin){
            adminModel.createMember(req.body,(err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Confirm event successfully'
                    }
                    res.redirect('/member')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },

    deleteMember: (req, res) => {
        if(req.session.admin){
            adminModel.deleteMember(req.params.id,(err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Delete successfully'
                    }
                    res.redirect('/member')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },
    editMember: (req, res) => {
        if(req.session.admin){
            adminModel.editMember(req.body, (err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Edit successfully'
                    }
                    res.redirect('/member')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },

    // Cooperative
    showCooperative: async (req, res) => {
        if(req.session.admin){
            let cooperative = await eventModel.showCooperative();
            return res.render('./admin/cooperative', {cooperativeData: cooperative})
            
        
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },
    createCooperative: (req, res) => {
        if(req.session.admin){
            adminModel.createCooperative(req.body,(err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Confirm event successfully'
                    }
                    res.redirect('/cooperative')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },
    deleteCooperative: (req, res) => {
        if(req.session.admin){
            adminModel.deleteCooperative(req.params.id,(err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Delete successfully'
                    }
                    res.redirect('/cooperative')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },
    editCooperative: (req, res) => {
        if(req.session.admin){
            adminModel.editCooperative(req.body, (err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Edit successfully'
                    }
                    res.redirect('/cooperative')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },

    // Guest
    showGuest: async (req, res) => {
        if(req.session.admin){
            let guest = await eventModel.showGuest();
            return res.render('./admin/guest', {guestData: guest})
            
        
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },
    createGuest: (req, res) => {
        if(req.session.admin){
            adminModel.createGuest(req.body,(err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Confirm event successfully'
                    }
                    res.redirect('/guest')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },
    deleteGuest: (req, res) => {
        if(req.session.admin){
            adminModel.deleteGuest(req.params.id,(err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Delete successfully'
                    }
                    res.redirect('/guest')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },
    editGuest: (req, res) => {
        if(req.session.admin){
            adminModel.editGuest(req.body, (err, data) => {
                if(!err){
                    req.session.message = {
                        type: 'success',
                        message: 'Edit successfully'
                    }
                    res.redirect('/guest')
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('Vui lòng đăng nhập')
        }
    },
} 