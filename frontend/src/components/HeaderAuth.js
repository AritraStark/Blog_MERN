import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import {useDispatch} from 'react-redux'
import { logout } from '../actions/userActions';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  toolbar: {
    borderBottom: `2px solid ${theme.palette.divider}`,
    padding: '1rem 3rem'
  },
  toolbarTitle: {
    flex: 2,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    padding: '0.5rem 3rem'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  button:{
    margin: '0 2em',
  },
  avatar:{
      margin:"0 2em",
  }
}));


export default function HeaderAuth({user}) {
    const history = useHistory()
    const dispatch = useDispatch()
    function logoutHandler(){
        dispatch(logout())
        history.push("/home")
    }
  
    const classes = useStyles();
    const sections = [
        { title: 'Technology', url: '#' },
        { title: 'Design', url: '#' },
        { title: 'Culture', url: '#' },
        { title: 'Business', url: '#' },
        { title: 'Politics', url: '#' },
        { title: 'Opinion', url: '#' },
        { title: 'Science', url: '#' },
        { title: 'Health', url: '#' },
        { title: 'Style', url: '#' },
        { title: 'Travel', url: '#' },
    ];
    const title = 'BLOG'
    return (
        <React.Fragment>
        <Toolbar className={classes.toolbar}>
            <Typography
            component="h1"
            variant="h3"
            color="inherit"
            align="left"
            noWrap
            className={classes.toolbarTitle}
            >
                {title}
            </Typography>
            <Avatar className={classes.avatar}>  
                {user.name&&user.name[0]}
                </Avatar>
            <Typography
            component="h5"
            variant="h6"
            color="inherit"
            align="center"
            noWrap
            >
            {user.name}
            </Typography>
            <Button variant="outlined" size="small" className={classes.button} onClick={logoutHandler}>
                Logout
            </Button>
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            {sections.map((section) => (
            <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                className={classes.toolbarLink}
            >
                {section.title}
            </Link>
            ))}
        </Toolbar>
        </React.Fragment>
    );
}

HeaderAuth.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};