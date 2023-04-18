

const { User } = require ("../models/userModel");
const { checkUser } = require ("./checkUser");

const deleteUser = async (value) => {
  
  const { id } = value;

  await checkUser(User, { id });
  
  await User.deleteOne({ id });
};


module.exports = { deleteUser }