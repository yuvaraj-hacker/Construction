import mongoose from "mongoose";
import db from "../config/db/db.js";

const UserSchema = mongoose.Schema({
    Email: String,
    Password : String,
    OTP : String,
    Role : {type:String,default:"user"},
    User_Status :  { type: String, default: 'Active' }
},{timestamps:true})
const User = db.model('users',UserSchema)
export default User