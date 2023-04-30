// Basically Snackbar.jsx is the pop up message when an user fills the form of income and then this pop is shown.
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';

export const CustomizedSnackbar = ({ open, setOpen }) => {
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if(reason === 'clickaway') return;

        setOpen(false);
    }

    return (
    <div className={classes.root}>
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <MuiAlert onClose={handleClose} severity="success" elevation={6} variant='filled'>
                Transaction Successfully Created.
            </MuiAlert>
        </Snackbar>
    </div>
  )
}

export default Snackbar;