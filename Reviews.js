//connecting mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
try {
    mongoose.connect( process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected"));
}catch (error) {
    console.log("could not connect");
}
mongoose.set('useCreateIndex', true);
//get the schemas
var ReviewSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    rating: {
        type: Number ,
        required: true,
        min: 1,
        max:100
    },

});
//exporting the files
module.exports = mongoose.model('Review', ReviewSchema);