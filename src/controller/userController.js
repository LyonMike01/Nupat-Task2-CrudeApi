const { createUser } = require ("../services/createUser"),
      { userID } = require ("../services/userID"),
      { deleteUser }  = require ("../services/deleteUser"),
      { getUsers }  = require ("../services/getUsers"),
      { updateUser }  = require  ("../services/updateUser"),
      {searchMaleUser} = require("../services/searchMaleUser"),
      { verifyToken, generateToken } = require("../utils/token")



exports.createNewUser = async (req, res, next) => {
      // let { email, password } = req.body
  try {

    // let user = { email, password }

    const newUser = await createUser(req.body);

    // user = {
    //   id: user._id,
    //   email: user.email
    //    }
    // const token = await generateToken(user)

     res.status(201).json({
         msg: "User Created",
         data: newUser
        });
      }
  catch (err) {
    return res.status(400).json({ err, message: "OOps!!! Unable to create User" });
  }};

        
exports.updateUserDetails = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const body = req.body;
    // console.log(body, _id);

    const details = {
      _id,
      ...body
    };
    const user = await updateUser(details);
    return res.status(202).json({ msg: "User Details Updated Successfyully", data: user });
  } catch (err) {
    return res.status(404).json({ err, message: "Seems your Inputs are invalid" });
  }
};


exports.deleteUserDetails = async (req, res, next) => {
  try {
    const { _id } = req.params;
    // console.log( _id);
    await deleteUser({ _id });
    return res.status(202).json({ message: "User Deleted" });
  } catch (err) {
    return res.status(404).json({ err, message: "User not found" });
  }
};


  
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await getUsers();
    return res.status(200).json({
       data: users 
     });
  } catch (err) {
    return res.status(400).json({ err, message: "Invalide inputs, Please Try again" });
  }
};

exports.getUserByID = async (req, res, next) => {
  try {

    const key = req.params.id;

    const user =  await userID(key);
    if (user === false) {
      return res.status(400).json({
        message: "Match ID Not Found",
       });      
     } else {

      payload = {
        id: key
    }
      const token = await generateToken(payload)
      res.setHeader("x-access-token", "Bearer "+ token);
      return res.status(202).json({
        message: "Match ID Found",
        data: user,
        token: token
       });
       }
    
    } catch (err) {
    return res.status(500).json({ msg: "Pls provide a correct User Id" });
  }};


exports.getMaleUser = async (req, res, next) => {
  try {

    const key = req.params.gender;

    // console.log(key);
    
    if (key != "male") {
        return res.status(400).json({
          message: "Only MALE gender can be accessed through this route",
        }); 
    }    
    else {
      const user =  await searchMaleUser(key);
      return res.status(200).json({
        message: "Male Gender Users Successfully seen",
        data: user 
      });
      }

 
  } catch (err) {
    return res.status(500).json({ err, message: err.message });
  }
};