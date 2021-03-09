import React,{Fragment, useEffect, useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import {Footer} from '../components/Footer.js'
import {useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions.js';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const LoginComponent = () => {
    const history = useHistory()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch()

    const {success} = useSelector(state=>state.userLogin)
    
    function handleLoginClick(e) {
        e.preventDefault()
        dispatch(login(email,password))
        setOpen(!success)
    }

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    useEffect(()=>{
        if(success)
        history.push('/profile')
    },[success,history])

    const classes = useStyles()
    return (
        <Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Log In
                    </Typography>
                    <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email@email.com"
                        autoFocus
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange = {(e)=>{
                            setPassword(e.target.value)
                        }}
                    />
                    <Button
                        onClick={handleLoginClick}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Log In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        
                            Forgot password?
                        </Grid>
                        <Grid item>
                        <Link to="/signup" className="link">
                            "Don't have an account? Sign Up"
                        </Link>
                        
                        </Grid>
                    </Grid>
                    <Snackbar open={open} autoHideDuration={2000} onClose={handleAlertClose}>
                        <Alert onClose={handleAlertClose} severity="error">
                            Login Unsuccessful
                        </Alert>
                    </Snackbar>
                    </form>
                </div>
                <Box mt={8}>
                    <Footer />
                </Box>
            </Container>
        </Fragment>
    )
}
