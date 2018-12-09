const mongoose = require('../libs/mongoose');
const User = mongoose.model('User', { 
  email: {type:String,unique:true} ,
  password:String,
  token:String
});

const user = new User({ email: 'admin@yopmail.com',password:'$2y$08$D307KNhTGKbl/E15C/nxgeQjcaAj1htpZip7vtdRg1ghoiGptEw8q' }); //123456789
user.save().then(() => console.log('Add default account')).catch(err=>{
  console.log('Add default account')
});

module.exports = User;