import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch } from 'react-redux';
import {deletePost, setPost, toggleUpdate} from '../actions/postActions';
import { Link,useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function BlogAuth({post}) {

    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    function handleDeleteClick(){
        dispatch(deletePost(post._id))
        history.push('/home')
    }
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {post.title[0]}
                    </Avatar>
                }
                action={
                    <Link to='/update'>
                        <IconButton aria-label="settings" className={classes.button}>
                            <EditIcon onClick={()=>{
                                dispatch(toggleUpdate())
                                dispatch(setPost(post))
                                }}/>
                        </IconButton>
                    </Link>
                }
                title={post.title}
                subheader={post.date.slice(0,10)}
            />
            <CardMedia
                className={classes.media}
                image="https://source.unsplash.com/random"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {post.body}
                </Typography>
            </CardContent>
            <CardContent>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={handleDeleteClick}
                >
                    Delete
                </Button>
            </CardContent>
        </Card>
    );
}
