import asyncHandler from 'express-async-handler'
import Posts from '../models/postModel.js'
import Users from '../models/userModel.js'

//@route GET /api/posts
//@desc Gets all posts sorted by date
//@access Public
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Posts.find({}).sort({ date: 'desc' })
    res.json({ posts })
})

//@route GET /api/posts/:id
//@desc Gets post by id
//@access Public
const getPost = asyncHandler(async (req, res) => {
    const post = await Posts.findById(req.params.id)
    if (post) {
        res.json({ post })
    }
    else {
        res.status(404)
        throw new Error("Product not found")
    }
})


//@route POST /api/posts
//@desc Create new post
//@access Private
const createPost = asyncHandler(async (req, res) => {
    const { title, body } = req.body;
    const id = req.user._id;
    const date = Date.now()
    const user = await Users.findOne({ _id: id })
    if (user) {
        const newPost = new Posts({
            user,
            title,
            body,
            date
        })
        await newPost.save();
        res.json(newPost);
    }
    else {
        res.status(404)
        throw new Error("User not found")
    }
})


//@route POST /api/posts/:id
//@desc Update post
//@access Private
const updatePost = asyncHandler(async (req, res) => {
    const { title, body } = req.body;
    const date = Date.now()

    let post = await Posts.findOne({ _id: req.params.id })
    if (!post) {
        res.status(404)
        throw new Error("Post not found")
    }
    else {
        post = await Posts.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                title,
                body,
                date
            },
            {
                new: true
            })

        res.json(post);
    }
})

//@route DELETE /api/posts/:id
//@desc Delete post
//@access Private
const deletePost = asyncHandler(async (req, res) => {
    await Posts.findByIdAndDelete(req.params.id)
    res.json({ msg: "User removed" })
})

export {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}