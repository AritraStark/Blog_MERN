import axios from 'axios'
import React, { useState } from 'react'
import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getAllPosts } from '../actions/postActions'
import { Blog } from '../components/Blog'
import { Footer } from '../components/Footer'
import Header from '../components/Header'

export const Home = () => {

    const dispatch = useDispatch()
    //const [posts,setPosts] = useState([]);
    const {loading,posts} = useSelector((state)=>state.allPostsGet)

    useEffect(() => {
        dispatch(getAllPosts())
        
    }, [dispatch])

    return (
        <Fragment>
            <Header/>
            {posts.map((post)=>(
                <Blog id={post._id} title={post.title} body={post.body}/>
            ))}
            <Footer/>
        </Fragment>
    )
}
