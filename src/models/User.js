import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique:true,},
    firstname: {type: String, required: true},
    middlename: {type: String},
    lastname: {type: String, required:true},
    middlelastname: {type: String},
    email: {type: String, required: true, unique:true, trim:true, lowercase:true},
    password: {type: String, required: true},
    points: {type: Number, default: 0},
    phone: {type: String},
    isActive: {type: Boolean},
    isBlocked: {type: Boolean},
    isReported:  {type: Boolean},
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;