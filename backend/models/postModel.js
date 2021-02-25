import mongoose from 'mongoose'

//Schema modelled
const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
})

const Posts = mongoose.model('Posts', postSchema)
export default Posts

