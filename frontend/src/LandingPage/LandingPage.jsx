import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

/* Logo */
import Logo from '../Misc/logo.png';

const useStyles = makeStyles((theme) => ({
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
  const history = useHistory();

  return (
    <div>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <Button variant="contained" className={classes.button} size="large" onClick={() => history.push('/play')}>
          Play as a guest
        </Button>
      </div>
      <div>
        <Button variant="contained" className={classes.button} size="large" onClick={() => history.push('/login')}>
          Log in
        </Button>
      </div>
      <div>
        <Button variant="contained" className={classes.button} size="large" onClick={() => history.push('/register')}>
          Register
        </Button>
      </div>
    </div>
  );
}
