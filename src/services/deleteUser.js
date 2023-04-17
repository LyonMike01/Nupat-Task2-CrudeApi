

const { User } = require ("../models/userModel");
const { checkUser } = require ("./checkUser");

const deleteUser = async (value) => {
  
  const { _id } = value;

  await checkUser(User, { _id });
  
  await User.deleteOne({ _id });
};


module.exports = { deleteUser }