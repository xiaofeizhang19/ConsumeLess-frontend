import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from 'react-router-dom';
import AuthService from './AuthService';
import FormControl from '@material-ui/core/FormControl'

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#659c35',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#659c35' 
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#659c35'
      }
    },
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
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
  inputz: {
    '&$focused':{
      color:'#659c35',
      borderBottomColor: '#659c35',
      borderColor: '#659c35',
    },
    color:'#659c35',
    borderBottomColor: '#659c35',
    borderColor: '#659c35'
  },
  submit: {
    '&:hover': {
      backgroundColor: '#45721D'
    },
    backgroundColor: '#659c35',
    margin: theme.spacing(3, 0, 2),
  },
}));

  export default function Login() {

    let history = useHistory();
    let classes = useStyles();
    let authService = new AuthService()

    const handleSubmit = (event) => {
      event.preventDefault();
      
      let payload = new FormData(event.target)    
      
      authService.login(payload)
        .then(res => history.replace('/items'))
    };

  return (
    <div className="App">
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <img src={ require('../logo-with-name.svg')} />
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <CssTextField 
            className={classes.inputz}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
          />
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  );
}