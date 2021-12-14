const connect = require('../database/database');
const readXlsxFile = require('read-excel-file/node');
module.exports = {

    // show event for one
    showEvent: (account_name) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM event
                            JOIN account
                                ON account_name = event_creator
                            JOIN category
                                ON event_cate = category_id
                            JOIN content
                                ON event_id = content_event_id
                            JOIN member
                                ON content_member = member_id
                            JOIN guest
                                ON content_guest = guest_id
                            JOIN information
                                ON info_user = account_name
                            JOIN cooperative
                                ON event_coop = cooperative_id
                            WHERE account_name = '${account_name}' and event_status = 1`
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    // execute edit event
    editEvent: (input, img, id, result) => {
        const sql = `UPDATE event SET
                            event_name = '${input.event_name}',
                            event_date = '${input.event_date}',
                            event_coop =  ${input.event_coop},
                            event_cate =  ${input.event_cate},
                            event_status = 0
                        WHERE event_id = ${id}`
        connect.query(sql, (err, data) => {
            if(!err){
                connect.query( `UPDATE  content SET
                                        content_des =      '${input.content_des}',
                                        content_img =      '${img.originalname}',
                                        content_guest =     ${input.content_guest},
                                        content_member =    ${input.content_member},
                                        content_audience =  ${input.content_audience}
                                WHERE content_event_id = ${id}`);
                result(null, "Edit susscessfully")
            }else{
                result(err, null)
            }
        })
    },

    // show detail event for one
    detailEvent: (id) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM event
                            JOIN account
                                ON account_name = event_creator
                            JOIN content
                                ON content_event_id = event_id 
                            JOIN member
                                ON content_member = member_id
                            JOIN guest
                                ON content_guest = guest_id
                            JOIN cooperative
                                ON cooperative_id = event_coop
                            JOIN information
                                ON info_user = account_name
                        where event_id = ${id}`
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    // execute delete event
    deleteEvent: (id, result) => {
        const sql = `DELETE From content Where content_event_id = ${id}`
        connect.query(sql, (err, data) => {
            if(!err){
                connect.query( `DELETE From event Where event_id = ${id}`);
                result(null, "Delete susscessfully")
            }else{
                result(err, null)
            }
        })
    },

    // list category
    showCateEvent: () => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM category`;
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    // list partner
    showPartner: () => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM cooperative`;
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    // list member
    showMember: () => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM member`;
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    // list guest
    showGuest: () => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM guest`;
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    // list cooperative
    showCooperative: () => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM cooperative`;
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    // create event
    createEvent: (input, img, account_name, result) => {
        const sql = `Insert into event (
                        event_creator,
                        event_name, 
                        event_cate,
                        event_status,
                        event_coop,
                        event_date
                    ) values (
                        '${account_name}',
                        '${input.event_name}',
                         ${input.event_cate},
                         0,
                         ${input.event_coop},
                        '${input.event_date}'
                    )`
        connect.query(sql, (err, results, fields) => {
            if(!err){
                connect.query(`Insert into content (
                    content_event_id,
                    content_des,
                    content_img,
                    content_audience,
                    content_guest,
                    content_member
                ) values (
                     ${results.insertId},
                    '${input.content_des}',
                    '${img.originalname}',
                    '${input.content_audience}',
                     ${input.content_guest},
                     ${input.content_member}
                )`);
                result(null,"Insert susscessfully")
            }else{
                result(err,null)
            }
        })
    },

    // show event for all
    showEventAll: () => {
        return new Promise((resolve, reject) =>{
            const sql = `SELECT * FROM event
                        JOIN account
                            ON account_name = event_creator
                        JOIN category
                            ON event_cate = category_id
                        JOIN content
                            ON event_id = content_event_id
                        JOIN member
                            ON content_member = member_id
                        JOIN guest
                            ON content_guest = guest_id
                        JOIN information
                            ON info_user = account_name
                        JOIN cooperative
                            ON event_coop = cooperative_id
                        WHERE event_status = 1`
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    // create event by excel
    createExcel: (filePath, account_name, result) => {
        readXlsxFile(filePath).then((rows) => {
            rows.shift();
            const sql = `INSERT INTO event (event_creator, event_name, event_coop, event_cate, event_status, event_date) VALUES ?`;
            connect.query(sql, [rows], (err,data)=>{
                if(!err){
                    result(null,data)                
                }
                else{
                    result(err, null)
                }
            })
        })
    }
} 
