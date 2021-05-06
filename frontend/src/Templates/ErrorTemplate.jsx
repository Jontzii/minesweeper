import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#F3F3F3',
    backgroundColor: '#FF0033',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
  },
  paper: {
    width: '500px',
    height: '500px',
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
}));

export default function ErrorTemplate(Page) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={20} className={classes.paper}>
        <Page />
      </Paper>
    </div>
  );
}
