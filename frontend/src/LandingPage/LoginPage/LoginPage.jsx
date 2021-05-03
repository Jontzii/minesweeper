import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textfield: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.5),
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

const handleLogin = () => {
  // ASD
};

export default function LandingPage() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <div>
        <h3>Log in</h3>
      </div>
      <div className={classes.textfield}>
        <TextField
          variant="outlined"
          label="Email"
          type="email"
        />
      </div>
      <div className={classes.textfield}>
        <TextField
          variant="outlined"
          label="Password"
          type="password"
        />
      </div>
      <div>
        <Button
          variant="contained"
          className={classes.button}
          size="large"
          onClick={history.goBack}
        >
          Back
        </Button>

        <Button
          variant="contained"
          className={classes.button}
          size="large"
          onClick={handleLogin}
        >
          Log in
        </Button>
      </div>
    </div>
  );
}
