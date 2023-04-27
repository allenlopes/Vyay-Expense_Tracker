import React from 'react';
import { Card }from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles'
import useTransactions from '../../useTransactions';

const Details = ({ title, subheader }) => {
    const { total, chartData } = useTransactions(title);
    const classes = useStyles();

    return (
      <Card className={title === 'Income' ? classes.income : classes.expense}>
        <CardHeader title={title} subheader={subheader} />
        <CardContent>
            <Typography variant="h5"><span>&#8377;</span>{total}</Typography>
            <Doughnut data={chartData} />
        </CardContent>
      </Card>
    );
};

export default Details;
