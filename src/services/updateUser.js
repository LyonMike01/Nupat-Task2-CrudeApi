

const { User } = require ("../models/userModel");
const { checkUser } = require ("./checkUser");



const updateUser = async (value) => {

  const { id, ...others } = await value;

  await checkUser(User, { id });

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { ...others },
    { new: true }
  ).select("_id");

  return updatedUser;

};

module.exports = { updateUser };
