const connect = require('../database/database');
module.exports = {

    // execute sign in
    signIn: (req, res) => {
        const account_name = req.body.account_name;
        const account_passwd = req.body.account_passwd;
        if (account_name && account_passwd) {
                req.session.loggedin = true;
                req.session.account_name = account_name;
            // check dang nhap 
            const sql = `Select *From account JOIN information on account_name = info_user where account_name = ? and account_passwd = ?`;
            connect.query(sql, [account_name, account_passwd], function(err, data, fields) {
                if (data.length > 0) {
                    const [account] = data;
                    if([account.account_role] == "admin"){
                        req.session.admin = true
                        // res.render('./admin/adminPage')
                        res.redirect('/admin');
                    }else{
                        res.redirect('/');
                    }
                } else {
                    res.send('Incorrect Username and/or Password!');
                }			
                res.end();
            });
        } else {
            res.send('Please enter Username and Password!');
            res.end();
        }
    },

    // show sign in page
    showSignIn: (req, res) => {
        res.render('./auth/sign-in')
    },

    // execute register
    register: (req, res) => {
        const sql = `Insert into account (
                            account_name,
                            account_passwd, 
                            account_role
                        ) values (
                            '${req.body.account_name}',
                            '${req.body.account_passwd}',
                            'user'
                        )`
        connect.query(sql, function(err, data){
            if (!err){
                connect.query(`Insert into information (
                                    info_user,
                                    info_name,
                                    info_email,
                                    info_position,
                                    info_img
                                ) values (
                                    '${req.body.account_name}',
                                    '${req.body.info_name}',
                                    '${req.body.info_email}',
                                    1,
                                    'avatar-default'
                                )`);
                req.session.message = {
                    type: 'success',
                    message: 'Register successfully'
                }                 
                res.redirect('/register');
            }else{
                res.send("error")
            }
        });
    },

    // show register page
    showRegister: (req, res) => {
        res.render('./auth/register');
    }
} 