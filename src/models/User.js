import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    firstname: {type: String, required: true},
    middlename: {type: String},
    lastname: {type: String, required:true},
    middelastname: {type: String},
    email: {type: String, required: true, unique:true, trim:true, lowercase:true},
    password: {type: String, required: true},
    phone: {type: String},
    isActive: {type: Boolean},
    isBlocked: {type: Boolean},
    isReported:  {type: Boolean},
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;