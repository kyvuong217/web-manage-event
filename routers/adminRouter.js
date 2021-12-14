module.exports = function (app) {
    const adminController = require('../controllers/adminController')
    app.get('/admin', adminController.adminPage)

    // Event all
    app.get('/adminEvent', adminController.showAdminEvent)

    // Confirm event
    app.get('/confirmEvent', adminController.showConfirmEvent)
    app.get('/confirmEvent/:id', adminController.confirmEvent)
    app.get('/confirmEvent/delete/:id', adminController.deleteConfirmEvent)

    // Category
    app.get('/category', adminController.showCategory)
    app.post('/category', adminController.createCategory)
    app.post('/category/edit', adminController.editCategory)
    app.get('/category/delete/:id', adminController.deleteCategory)

    // Position
    app.get('/position', adminController.showPosition)
    app.post('/position', adminController.createPosition)
    app.post('/position/edit', adminController.editPosition)
    app.get('/position/delete/:id', adminController.deletePosition)

    // Memeber
    app.get('/member', adminController.showMember)
    app.post('/member', adminController.createMember)
    app.post('/member/edit', adminController.editMember)
    app.get('/member/delete/:id', adminController.deleteMember)

    // Cooperative
    app.get('/cooperative', adminController.showCooperative)
    app.post('/cooperative', adminController.createCooperative)
    app.post('/cooperative/edit', adminController.editCooperative)
    app.get('/cooperative/delete/:id', adminController.deleteCooperative)

    // Guest
    app.get('/guest', adminController.showGuest)
    app.post('/guest', adminController.createGuest)
    app.post('/guest/edit', adminController.editGuest)
    app.get('/guest/delete/:id', adminController.deleteGuest)
    
}