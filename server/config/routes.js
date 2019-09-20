
var temp = require('../controllers/placeholderControllers');

module.exports = function(app){
    app.get('/placeholder', function (req, res) {

        NinjaGame.temp(req, res);
    })


}
