import React from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

/* Logo */
import Logo from '../Misc/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#F3F3F3',
    backgroundColor: '#54FF83',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
  },
  paper: {
    width: '25vw',
    height: '25vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '& img': {
      margin: theme.spacing(2),
      width: '90%',
    },
  },
  button: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: '#00AB30',
    color: 'white',
    '&:hover': {
      backgroundColor: '#54FF83',
      color: 'black',
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={20}>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <Button
            variant="contained"
            className={classes.button}
            size="large"
          >
            Play as a guest
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            className={classes.button}
            size="large"
          >
            Log in
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            className={classes.button}
            size="large"
          >
            Register
          </Button>
        </div>
      </Paper>
    </div>
  );
}
