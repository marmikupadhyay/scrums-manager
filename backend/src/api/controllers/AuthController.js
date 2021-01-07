const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const AuthController = {
    async auth(req, res, next){
        const token = req.header('x-auth-token');
        if (!token){
            return res.status(401).json({ 
                message: 'No token, authorization denied' 
            });
        }

        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            let resultUser = await User.find({_id: decoded.id}).select('-password');
            if(resultUser.length==0){
                return res.status(400).json({
                    message: 'Invalid Token !'
                })
            }
            resultUser = resultUser[0];

            req.user = resultUser; 
            next();
        } catch (e) {
            res.status(500).json({ 
                message: e.message 
            });
        }
            
    },
    async register(req, res){

        const { username, email, password } = req.body;
        try {
            const user = await User.find({username});
            
            if(user.length!==0){
        
                return res.status(422).json({
                    message: "User Already exists !"
                });
            }

            const salt = await bcrypt.genSalt(10);
            if (!salt) throw Error('Something went wrong with bcrypt');

            const hash = await bcrypt.hash(password, salt);
            if (!hash) throw Error('Something went wrong hashing the password');
        
            const newUser = new User({
                username,
                email,
                password: hash
            });
            const savedUser = await newUser.save();
            if (!savedUser) throw Error('Something went wrong saving the user in Database');
            
            const token = jwt.sign(
                {id: savedUser._id},
                JWT_SECRET,
                {expiresIn: 3600}
            )

            res.status(200).json({
                token,
                user: {
                    id: savedUser._id,
                    username: savedUser.username,
                    email: savedUser.email
                }
            });
        } catch (e) {
            throw Error(e.message);
        }
    },
    async login(req, res){
        const {username, password} = req.body;

        try {
            const user = await User.findOne({username});
            if(!user) {
                return res.status(404).json({
                    message: 'User not Found !'
                });
            }

            const isMatching = await bcrypt.compare(password, user.password);
            if(!isMatching) {
                return res.status(400).json({
                    message: 'Incorrect Password !'
                });
            }

            const token = jwt.sign(
                {id: user._id},
                JWT_SECRET,
                {expiresIn: 3600}
            );
            if(!token) {
                return res.status(500).json({
                    message: 'Couldnt sign Token !'
                });
            }
            
            res.status(200).json({
                token,
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email
                }
            });
        } catch(e) {
            throw Error(e.message);
        }
    },
    async getUser(req, res){
        res.status(200).json({
            user: req.user
        });
    }

}

module.exports = AuthController;