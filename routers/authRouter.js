module.exports = function (app) {
    const authController = require('../controllers/authController')

    // show and execute sign in
    app.get('/sign-in', authController.showSignIn)
    app.post('/sign-in', authController.signIn)
    
    // show and execute register
    app.get('/register', authController.showRegister)
    app.post('/register', authController.register)
}