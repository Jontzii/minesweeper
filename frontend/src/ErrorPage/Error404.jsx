import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  text: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: '#FF3535',
    color: 'white',
    '&:hover': {
      backgroundColor: '#FF0033',
      color: 'black',
    },
  },
}));

export default function NotFound() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.text}>
      <h1>404</h1>
      <p>The content you were looking for does not exist.</p>
      <div>
        <Button variant="contained" className={classes.button} size="large" onClick={() => history.push('/')}>
          Back home
        </Button>
      </div>
    </div>
  );
}
