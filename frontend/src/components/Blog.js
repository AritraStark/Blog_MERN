import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    margin:'1em 2em',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin:'1em',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  dialog:{
    padding: '0 4rem'
  }
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const Blog = ({id,title,body}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const image= 'https://source.unsplash.com/random'
    const imgText= 'main image description'
    const classes = useStyles();
    return (
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${image})` }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={image} alt={imgText} />}
        <div className={classes.overlay} />
        <Grid container>
            <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                {body}
                </Typography>
                <Button color="primary" onClick={handleClickOpen}>
                  Continue Reading ...
                </Button>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                  <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {title}
                  </DialogTitle>
                  <DialogContent dividers>
                    <Typography gutterBottom className={classes.dialog}>
                      {body}
                    </Typography>
                  </DialogContent>
                </Dialog>
            </div>
            </Grid>
        </Grid>
        </Paper>
    );
}

Blog.propTypes = {
    post: PropTypes.object,
  };