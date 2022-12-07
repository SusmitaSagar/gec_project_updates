const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { roles } = require('../roles.js')


async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}
 
async function validatePassword(plainPassword, hashedPassword) {
 return await bcrypt.compare(plainPassword, hashedPassword);
}
 
exports.signup = async (req, res, next) => {
 try {
  console.log(req.body)
  const { userId, userEmail, password, department, admissionYear, program, role } = req.body
  const hashedPassword = await hashPassword(password);
  const tempobject = { userId : userId, userEmail: userEmail, password: hashedPassword, role: role || "student",department :department, admissionYear : admissionYear, program: program}
  const newUser = new User(tempobject);
  const accessToken = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
   expiresIn: "1d"
  });
  newUser.accessToken = accessToken;
  await newUser.save();
  res.json({
   data: newUser,
   accessToken
  })
 } catch (error) {
  next(error)
 }
}

exports.login = async (req, res, next) => {
    try {
     const { userId, password } = req.body;
     const user = await User.findOne({ userId });
     if (!user) return next(new Error('User does not exist! Please check your userId'));
     const validPassword = await validatePassword(password, user.password);
     if (!validPassword) return next(new Error('Invalid Credential'))
     const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
     });
     await User.findByIdAndUpdate(user._id, { accessToken })
     res.status(200).json({
      data: { userId: user.userId, role: user.role, department: user.department,program: user.program, admissionYear: user.admissionYear, userEmail: user.userEmail  },
      accessToken
     })
    } catch (error) {
     next(error);
    }
}


//userRoutes

   exports.getUsers = async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json({
     data: users
    });
   }
    
   exports.getUser = async (req, res, next) => {
    try {
     const userId = req.params.userId;
     console.log(userId);
     const user = await User.find({userId: userId});
     if (!user) return next(new Error('User does not exist'));
      res.status(200).json({
      data: user
     });
    } catch (error) {
     next(error)
    }
   }
    
   exports.updateUser = async (req, res, next) => {
    try {
     const update = req.body
     const userId = req.params.userId;
     const users = await User.find({userId: userId}).update(update);
     
     const user = await User.find({userId: userId})
     res.status(200).json({
      data: user,
      message: 'User has been updated'
     });
    } catch (error) {
     next(error)
    }
   }
    
   exports.deleteUser = async (req, res, next) => {
    try {
     const userId = req.params.userId;
     await User.deleteOne(User.find({userId: userId}));
     res.status(200).json({
      data: null,
      message: 'User has been deleted'
     });
    } catch (error) {
     next(error)
    }
   }


   //mddleware



   exports.grantAccess = function(action, resource) {
    return async (req, res, next) => {
     try {
      const permission = roles.can(req.user.role)[action](resource);
      if (!permission.granted) {
       return res.status(401).json({
        error: "You don't have enough permission to perform this action"
       });
      }
      next()
     } catch (error) {
      next(error)
     }
    }
   }

   exports.allowIfLoggedin = async (req, res, next) => {
    try {
     const user = res.locals.loggedInUser;
     if (!user)
      return res.status(401).json({
       error: "You need to be logged in to access this route"
      });
      req.user = user;
      next();
     } catch (error) {
      next(error);
     }
   }