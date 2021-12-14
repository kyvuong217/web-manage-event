const multer = require("multer")
const readXlsxFile = require('read-excel-file/node');
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "./public/img")
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})
module.exports = function (app) {
    const eventController = require('../controllers/eventController')
    // event
    app.get('/event', eventController.showEvent)
    app.get('/event/:id', eventController.showDetailEvent)

    // edit event
    app.post('/event/edit/:id',upload.single("img"), eventController.editEvent)

    // delete event
    app.get('/event/delete/:id', eventController.deleteEvent)
    
    // create event
    app.get('/create-event', eventController.showCreateEvent)
    app.post('/create-event',upload.single("img"), eventController.createEvent)

    // event all
    app.get('/eventAll', eventController.showEventAll)
    app.get('/eventAll/:id', eventController.showDetailEventAll)

    // create event by excel
    app.get('/excelFile', eventController.showExcel)
    app.post('/insertExcel', upload.single("excel"), eventController.createExcel)
}