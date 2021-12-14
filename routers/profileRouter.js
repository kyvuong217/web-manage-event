module.exports = function (app) {
    const profileController = require('../controllers/profileController')

    // show profile 
    app.get('/profile', profileController.profile)

    // show edit profile
    app.get('/editProfile', profileController.showEditProfile)

    // edit profile
    app.post('/editProfile', profileController.editProfile)
}