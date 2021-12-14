const connect = require('../database/database');

module.exports =  {


    showAccount: () => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM account`
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