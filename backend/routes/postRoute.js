import express from 'express'

const router = express.Router();

import {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
    getUserPosts
} from '../controller/postController.js'

import authM from '../middleware/authMiddleware.js'
//Routes to posts

router.route('/').get(getPosts).post(authM, createPost)
router.route('/:id').get(getPost).post(authM, updatePost).delete(authM, deletePost)
router.get('/individual/:id', authM, getUserPosts)

export default router