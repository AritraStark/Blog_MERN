import React, { Fragment,useState,useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link,useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {Footer} from '../components/Footer';
import {signup} from '../actions/userActions';
import {useDispatch, useSelector } from 'react-redux';

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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const SignUp = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    
    const {success} = useSelector((state)=>state.userSignUp)

    const [name,setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(success){
            history.push('/profile')
        }
    }, [history,success])

    function handleSignUpClick(e){
        dispatch(signup(name,email,password))
        setOpen(!success)
    }

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    return (
        <Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                        <TextField
                            autoComplete="name"
                            name="Name"
                            variant="outlined"
                            required
                            fullWidth
                            id="Name"
                            label="Name"
                            autoFocus
                            onChange={(e)=>{
                                setName(e.target.value)
                            }}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                        />
                        </Grid>
                        
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSignUpClick}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Link to="/login" className="link">
                            Already have an account? Sign in
                        </Link>
                        </Grid>
                    </Grid>
                    <Snackbar open={open} autoHideDuration={2000} onClose={handleAlertClose}>
                        <Alert onClose={handleAlertClose} severity="error">
                            Signup Unsuccessful
                        </Alert>
                    </Snackbar>
                    </form>
                </div>
                <Box mt={5}>
                    <Footer/>
                </Box>
                </Container>
        </Fragment>
    )
}
