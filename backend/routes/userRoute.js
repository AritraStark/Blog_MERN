import express from 'express'

const router = express.Router();

import {
    loginUser,
    getUser,
    createUser,
    updateUser,
    deleteUser
} from '../controller/userController.js'

import authM from '../middleware/authMiddleware.js'
//Routes to user

router.post('/login', loginUser)
router.post('/', createUser)
router.route('/:id').post(authM, updateUser).delete(authM, deleteUser)
router.get('/profile', authM, getUser)

export default router