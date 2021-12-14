const { getMaxListeners } = require('../database/database');
const connect = require('../database/database');


module.exports = {

    // Confirm event
    showConfirmEvent: () => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM event
                            JOIN account
                                ON account_name = event_creator
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
                        WHERE event_status = 0`
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    confirmEvent: async (id, result) => {
        const sql = `UPDATE event set event_status = 1 Where event_id = ${id}`
        connect.query(sql, async (err, data) => {
            if(!err){
                result(null, "Confirm successfully")
            }else{
                result(err, null)
            }
        })
    },

    // Category
    createCategory: (input, result) => {
        const sql = `Insert into category (
                        category_name
                    ) values (
                        '${input.category_name}'
                    )`
        connect.query(sql, (err, data) => {
            if(!err){
                result(null, "Create Successfull")
            }else{
                result(err, null)
            }
        })
    },
    deleteCategory: (id, result) => {
        const sql = `UPDATE event set event_cate = 1 where event_cate = ${id}`
        connect.query(sql, (err, data) => {
            if(!err){
                connect.query(`DELETE FROM category where category_id = ${id}`)
                result(null, "Delete Successfull")
            }else{
                result(err, null)
            }
        })
    },
    editCategory: (input, result) => {
        const sql = `UPDATE category SET category_name = '${input.category_name}' WHERE category_id = ${input.category_id}`
        connect.query(sql, (err, data) => {
            if(!err){
                result(null, "Edit Successfull")
            }else{
                result(err, null)
            }
        })
    },

    // Position
    createPosition: (input, result) => {
        const sql = "Insert into `position` (position_name) values ( ? )"
        connect.query(sql, [input.position_name], (err, data) => {
            if(!err){
                result(null, "Create Successfull")
            }else{
                result(err, null)
            }
        })
    },
    deletePositon: (id, result) => {
        const sql = `UPDATE information set info_position = 1 where info_position = ${id}`
        connect.query(sql, (err, data) => {
            if(!err){
                connect.query(`DELETE FROM position where position_id = ${id}`)
                result(null, "Delete Successfull")
            }else{
                result(err, null)
            }
        })
    },
    editPosition: (input, result) => {
        const sql = `UPDATE position SET position_name = '${input.position_name}' WHERE position_id = ${input.position_id}`
        connect.query(sql, (err, data) => {
            if(!err){
                result(null, "Edit Successfull")
            }else{
                result(err, null)
            }
        })
    },

    // Member
    createMember: (input, result) => {
        const sql = `Insert into member (
                        member_name
                    ) values (
                        '${input.member_name}'
                    )`
        connect.query(sql, (err, data) => {
            if(!err){
                result(null, "Create Successfull")
            }else{
                result(err, null)
            }
        })
    },
    deleteMember: (id, result) => {
        const sql = `UPDATE content set content_member = 1 where content_member = ${id}`
        connect.query(sql, (err, data) => {
            if(!err){
                connect.query(`DELETE FROM member where member_id = ${id}`)
                result(null, "Delete Successfull")
            }else{
                result(err, null)
            }
        })
    },
    editMember: (input, result) => {
        const sql = `UPDATE member SET member_name = '${input.member_name}' WHERE member_id = ${input.member_id}`
        connect.query(sql, (err, data) => {
            if(!err){
                result(null, "Edit Successfull")
            }else{
                result(err, null)
            }
        })
    },

    // Cooperative
    createCooperative: (input, result) => {
        const sql = `Insert into cooperative (
                        cooperative_name,
                        cooperative_des
                    ) values (
                        '${input.cooperative_name}',
                        '${input.cooperative_des}'
                    )`
        connect.query(sql, (err, data) => {
            if(!err){
                result(null, "Create Successfull")
            }else{
                result(err, null)
            }
        })
    },
    deleteCooperative: (id, result) => {
        const sql = `UPDATE event set event_coop = 1 where event_coop = ${id}`
        connect.query(sql, (err, data) => {
            if(!err){
                connect.query(`DELETE FROM cooperative where cooperative_id = ${id}`)
                result(null, "Delete Successfull")
            }else{
                result(err, null)
            }
        })
    },
    editCooperative: (input, result) => {
        const sql = `UPDATE cooperative SET cooperative_name = '${input.cooperative_name}' WHERE cooperative_id = ${input.cooperative_id}`
        connect.query(sql, (err, data) => {
            if(!err){
                result(null, "Edit Successfull")
            }else{
                result(err, null)
            }
        })
    },

    // Guest
    createGuest: (input, result) => {
        const sql = `Insert into guest (
                            guest_name
                    ) values (
                            '${input.guest_name}'
                    )`
        connect.query(sql, (err, data) => {
            if(!err){
                result(null, "Create Successfull")
            }else{
                result(err, null)
            }
        })
    },
    deleteGuest: (id, result) => {
        const sql = `UPDATE content set content_guest = 1 where content_guest = ${id}`
        connect.query(sql, (err, data) => {
            if(!err){
                connect.query(`DELETE FROM guest where guest_id = ${id}`)
                result(null, "Delete Successfull")
            }else{
                result(err, null)
            }
        })
    },
    editGuest: (input, result) => {
        const sql = `UPDATE guest SET guest_name = '${input.guest_name}' WHERE guest_id = ${input.guest_id}`
        connect.query(sql, (err, data) => {
            if(!err){
                result(null, "Edit Successfull")
            }else{
                result(err, null)
            }
        })
    },
}