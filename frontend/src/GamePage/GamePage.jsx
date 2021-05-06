import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    color: '#F3F3F3',
    backgroundColor: '#54FF83',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
  },
  paperRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '93vh',
  },
  appbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#547BFF',
    height: '7vh',
  },
  title: {
    flexGrow: 1,
  },
  select: {
    color: 'F3F3F3',
  },
  paper: {
    width: '60vw',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

export default function GamePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            MineSweeper
          </Typography>
          <Select
            className={classes.select}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Difficulty"
            value={1}
          >
            <MenuItem value={0}>Easy</MenuItem>
            <MenuItem value={1}>Medium</MenuItem>
            <MenuItem value={2}>Hard</MenuItem>
          </Select>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.paperRoot}>
        <Paper elevation={20} className={classes.paper}>
          <h1>ASD</h1>
        </Paper>
      </div>
    </div>
  );
}
