import normalizeEmail from 'validator/lib/normalizeEmail'
import bcrypt from 'bcryptjs'
import User from '../../utils/server/user.model'
import { comparePasswords, hashedPassword } from '../../utils/password';


export const findUserWithEmailOrPassword = async(email,password)=>{
      const user = await User.findOne({email:email});
      const dbPassword = user.password;
      const passwordMatching = await comparePasswords(password,dbPassword);

      if(user && passwordMatching) return user;
      return null;
}

export const findUserForAuth = async(userId)=>{
   const user = await User.findOne({_id:userId});
   if(user) return user;
   return null;
}

export const findUserByUsername = async(username)=>{
    const user = await User.findOne({username:username});
    if(user) return user;
    return null;
}

export const findUserByEmail = async(email)=>{
    const user = await User.findOne({email:email})
    if(user) return user;
    return null;
}

export const createUser = async(email,username,password)=>{
  let newPassword = await  hashedPassword(password);
  const newUser = new User();
  newUser.email = email;
  newUser.username = username;
  newUser.password = newPassword;
  await newUser.save();

  return newUser;
}