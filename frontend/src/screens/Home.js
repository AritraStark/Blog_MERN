import React from 'react'
import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getAllPosts } from '../actions/postActions'
import { Blog } from '../components/Blog'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import { Loader } from '../components/Loader'
import {useHistory} from 'react-router-dom'

export const Home = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const {loading,posts} = useSelector((state)=>state.allPostsGet)
    const {success} = useSelector((state)=>state.userLogin)
    //const {userDetails, success} = useSelector((state)=>state.userLogin)
    useEffect(() => {
        dispatch(getAllPosts())
        if(success)
        history.push('/profile')
    }, [dispatch,history,success])

    return (
        <Fragment>
            <Header/>
            
            {loading?<Loader/>:posts.map((post)=>(
                <Blog id={post._id} title={post.title} body={post.body}/>
            ))}
            <Footer/>
        </Fragment>
    )
}
