
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/NinjaGold', {useUnifiedTopology: true,useNewUrlParser: true});
const NinjaSchema = new mongoose.Schema({
    money : {type : Number,  default:"0"},
    activities: [],
    created_at :{type: Date, default : Date.now }
})
mongoose.model('tempModel', NinjaSchema);
