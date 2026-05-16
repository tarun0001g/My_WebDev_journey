
const { default: mongoose } = require("mongoose");

const homeSchema = mongoose.Schema({
  //_id is automatically added by MongoDB, so there is no need to be defined here.

  houseName : {type: String, required: true}, 
  price : {type: Number, required: true} ,
  location : {type: String, required: true},
  rating :  {type: Number, required: true},
  photoURL :  String, 
  description : String,

});
//required true  means this field should be filled mandotary
//String, Not mandotary field , we can keep it empty

// homeSchema.pre('findOneAndDelete', async function (next) {
//   const homeId = this.getQuery()._id;
//   await Favourite.deleteMany({homeId: homeId}); 
// });



//It tells create one Home Model(Class) who have homeSchema structure and then export it
module.exports = mongoose.model('Home', homeSchema);




