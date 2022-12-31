import express from 'express';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

userRouter.post('/login', async(req, res) => {    
    const user = await User.findOne({username: req.body.username});

    try {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    username: user.username,
                });
                return;
            }
        } else {
            return res.status(401).send({ message: 'Invalid username or password' })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
});

userRouter.post('/register', async(req, res) => {

        const newUser = new User({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password)
        });

        const user = await newUser.save();
        console.log(user)
        if (user) {
            res.send({
                _id: user._id,
                username: user.username,
            });
        } else {
            res.send(500).send({ 
                message: 'Error in creating user' 
            });
        }

});

export default userRouter;
