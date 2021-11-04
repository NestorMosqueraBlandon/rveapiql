import bcrypt from "bcryptjs"
import User from '../../models/User.js'
import jwt from "jsonwebtoken"
import {UserInputError} from "apollo-server"
const SECRET_KEY = "sime very secret key"

const generateToken = (user) => {
    jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username
    }, SECRET_KEY, { expiresIn: "1h"});
}
export default {
    Query: {
        async users(){
            const users = await User.find();
            return users;
        },
    },

    Mutation: {

        async signin(_, {email, password}){
            const user = await User.findOne({email});

            if(!user){
                throw new UserInputError("Correo incorrecto", {
                    errors: {
                        username: "Correo incorrecto"
                    }
                })
            }

            const match = await bcrypt.compare(password, user.password);
            if(!match){
                throw new UserInputError("Contraseña incorrecta", {
                    errors: {
                        username: "Contraseña incorrecta"
                    }
                })
            }

            const token = generateToken(user)

            return {
                ...user._doc,
                id: user._id,
                token
            }
        },

        async signup(_,{ signupInput: {firstname, lastname, username, email, password, confirmPassword}}){
            
            const user = await User.findOne({username})
            if(user){
                throw new UserInputError("El nombre de usuario no esta disponible", {
                    errors: {
                        username: "El nombre de usuario no esta disponible"
                    }
                })
            }
            
            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                email,
                username,
                password,
                lastname,
                firstname,
            });

            const res = await newUser.save();

            const token = generateToken(res);

            return {
                ...res._doc,
                id: res._id,
                token
            }
        }
    }
}