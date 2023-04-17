

const { User } = require ("../models/userModel");
const { checkUser } = require ("./checkUser");



const updateUser = async (value) => {

  const { _id, ...others } = await value;

  await checkUser(User, { _id });

  const updatedUser = await User.findByIdAndUpdate(
    _id,
    { ...others },
    { new: true }
  ).select("_id");

  return updatedUser;

};

module.exports = { updateUser };
