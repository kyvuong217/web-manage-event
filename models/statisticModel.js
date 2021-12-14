const connect = require('../database/database');

module.exports =  {
    
    statisticCategory: (account_name) => {
        return new Promise((resolve, reject) => {
            const sql = `select category_name, category_id, count(event_cate) as "total" 
                            from event join category on event_cate = category_id  
                            where event_creator ='${account_name}' 
                            group by event_cate;`
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    statisticMember: (account_name) => {
        return new Promise((resolve, reject) => {
            const sql = `select member_name, count(content_member) as "total" 
                            from event join content on event_id = content_event_id join member on content_member = member_id  
                            where event_creator ='${account_name}' 
                            group by content_member;`
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    statisticGuest: (account_name) => {
        return new Promise((resolve, reject) => {
            const sql = `select guest_name, count(content_guest) as "total" 
                            from event join content on event_id = content_event_id join guest on content_guest = guest_id  
                            where event_creator ='${account_name}' 
                            group by content_guest;`
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    statisticCooperative: (account_name) => {
        return new Promise((resolve, reject) => {
            const sql = `select cooperative_name, count(event_coop) as "total" 
                            from event join cooperative on event_coop = cooperative_id  
                            where event_creator ='${account_name}' 
                            group by event_coop;`
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    statisticCategoryAll: () => {
        return new Promise((resolve, reject) => {
            const sql = `select category_name, category_id, count(event_cate) as "total" 
                            from event join category on event_cate = category_id  
                            group by event_cate;`
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    statisticMemberAll: () => {
        return new Promise((resolve, reject) => {
            const sql = `select member_name, count(content_member) as "total" 
                            from event join content on event_id = content_event_id join member on content_member = member_id  
                            group by content_member;`
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    statisticGuestAll: () => {
        return new Promise((resolve, reject) => {
            const sql = `select guest_name, count(content_guest) as "total" 
                            from event join content on event_id = content_event_id join guest on content_guest = guest_id  
                            group by content_guest;`
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    statisticCooperativeAll: () => {
        return new Promise((resolve, reject) => {
            const sql = `select cooperative_name, count(event_coop) as "total" 
                            from event join cooperative on event_coop = cooperative_id  
                            group by event_coop;`
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    statisticCategoryAllDetail: (id) => {
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
                                WHERE event_cate = ${id} `
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    statisticCategoryDetail: (id, account_name) => {
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
                                WHERE event_cate = ${id} and event_creator = '${account_name}' `
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    }
} 