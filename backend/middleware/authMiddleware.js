import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import Users from '../models/userModel.js'


const authM = asyncHandler(async (req, res, next) => {
    let token = req.headers['x-auth']

    if (token) {
        try {
            //decoding the token recieved from the header
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //finding the user from database
            req.user = await Users.findOne({ _id: decoded.id }).select('-password')
            try {
                console.log('Authenticated')
            } catch (error) {
                console.log(error)
            }

            //next process
            next()
        } catch (error) {
            res.status(401)
            console.log(error)
            throw new Error("Token invlaid")
        }
    }
    else if (!token) {
        res.status(401)
        throw new Error("Token invalid")
    }
})

export default authM