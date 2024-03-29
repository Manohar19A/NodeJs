import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username:{type:String,unique:true,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    profileProfile:{type:String},
    followers:{type:Array,defaultValue:[]},
    following:{type:Array,defaultValue:[]},
    description:{type:String},

},{timestamps:true});
export default mongoose.model("User",UserSchema); 