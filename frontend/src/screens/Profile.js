import React from 'react'
import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Footer } from '../components/Footer'
import HeaderAuth from '../components/HeaderAuth'
import {getUserPosts, toggleNew} from '../actions/postActions'
import {Loader} from '../components/Loader'
import BlogAuth from '../components/BlogAuth'
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
    grid:{
        padding:40,
    },
    fab:{
        margin:40,
    }
}));

export const Profile = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const {userDetails} = useSelector((state)=>state.userLogin)
    const {loading,posts} = useSelector((state)=>state.userPostsGet)

    useEffect(() => {
        dispatch(getUserPosts(userDetails._id))
    }, [dispatch,userDetails._id])

    return (
        <Fragment>
            <HeaderAuth user={userDetails}/>
            <Grid container direction="row"  justify="space-around"  alignItems="center" className={classes.grid}>
                {loading?<Loader/>:posts&&posts.map((post)=>{
                    return<BlogAuth post={post}/>
                })}
            </Grid>
            <Fab color="secondary" aria-label="add" className={classes.fab} onClick={()=>{
                history.push('/post/new')
                dispatch(toggleNew())
            }}>
                <AddIcon />
            </Fab>
            <Footer/>
        </Fragment>
    )
}
