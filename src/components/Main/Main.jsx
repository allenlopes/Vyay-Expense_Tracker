import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    const classes = useStyles();

  return (
    <Card className={classes.root} >
        <CardHeader title="Expense Tracker" subheader="- By Allen Lopes" />
        <CardContent>
            <Typography align="center" variant="h5">Total Balance <span>&#8377;</span>100</Typography>
            <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                {/* InfoCard..*/}
                Try Saying: Add income for <span>&#8377;</span>100 in category Salary for Monday.
            </Typography>
            <Divider />
            <Form />
        </CardContent>

        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main