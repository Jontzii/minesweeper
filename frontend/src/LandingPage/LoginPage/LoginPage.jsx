/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

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

const handleLogin = async (url, email, password, ...args) => {
  const requestOptions = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };

  fetch(`${url}/auth/login`, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const showToast = args[0];
      showToast('Login succeeded🚀', false);
    })
    .catch(() => {
      const showToast = args[0];
      showToast('Login failed😫', true);
    });
};

export default function LandingPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const { showToast, args } = props;

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div>
      <div>
        <h3>Login</h3>
      </div>
      <div className={classes.textfield}>
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={classes.textfield}>
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
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
          onClick={() => handleLogin(
            args[0],
            email,
            password,
            showToast,
          )}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

LandingPage.propTypes = {
  showToast: PropTypes.func.isRequired,
  args: PropTypes.array,
};

LandingPage.defaultProps = {
  args: [],
};
