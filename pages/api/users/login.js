import connect from "../../../lib/mongodb"
import User from '../../../model/schema'
import bcrypt from 'bcrypt'
import {createAccessToken,createRefreshToken} from '../../../utils/generatetoken'

connect()

export default async (req,res) => {
    switch(req.method){
        case "POST":
            await Login(req,res)
            break
    }
}

const Login = async (req,res) => {
    try{
        const {email, password} = req.body

        const user = await User.findOne({email})

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
          }

        const access_token = createAccessToken({id:user._id})
        const refresh_token = createRefreshToken({id:user._id})

        res.json({
            msg : "login successful",
            refresh_token,
            access_token,
            user:{
                name : user.name,
                email: user.email,
                role: user.role,
                root : user.root
            }
        })
    }catch(err){
        return res.status(500).json({err: err.message})
    }
}