module.exports = function (app) {
    const siteController = require('../controllers/siteController')

    // show homepage
    app.get('/', siteController.homepage)

    // show dashboard
    app.get('/dashboard', siteController.dashboard)

    // logout
    app.get('/logout', siteController.signOut) 
}