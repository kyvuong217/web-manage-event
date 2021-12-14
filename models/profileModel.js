const connect = require('../database/database');
module.exports =  {

    // show profile
    showProfile: (account_name, result) => {
        const sql = `Select  *From account 
                            JOIN information 
                                ON account_name = info_user 
                            JOIN position
                                ON position_id = info_position 
                            where account_name = '${account_name}'`;
        connect.query(sql, (err, data) => {
            if(!err){
                result(null, data)
            }else{
                result(err, null)
            }
        });
    },

    // list position
    showPosition: () => {
        return new Promise((resolve, reject) => {
            const sql = `Select  *From position`;
            connect.query(sql, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    // execute edit profile
    editProfile: (input, account_name, result) => {
        const sql = `UPDATE information SET
                        info_email = '${input.info_email}',
                        info_name = '${input.info_name}',
                        info_dob = '${input.info_dob}',
                        info_phone = '${input.info_phone}',
                        info_position = ${input.info_position}
                        Where info_user = '${account_name}'`
        connect.query(sql, (err, data) => {
            if(!err){
                result(null, "Update successfully")
            }else{
                result(err,null)
            }
        })
    }

} 