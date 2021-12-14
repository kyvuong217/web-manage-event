module.exports = function (app) {
    const statisticController = require('../controllers/statisticController')

    // show statistic
    app.get('/statistic', statisticController.showStatistic)
    app.get('/statisticAll', statisticController.showStatisticAll)

    // show category
    app.get('/category/:id', statisticController.statisticCategoryDetail)
    app.get('/categoryAll/:id', statisticController.statisticCategoryAllDetail)
}