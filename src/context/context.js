import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

/* The following next line code will be fetched(from contextReducer.js) the entered type, category,amount and date if the user has already put in
and refreshes on the next visit to the browser, or it will just leave all the fields empty if the user is visiting for the first time */
const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creators
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    };

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    };

//  const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);


    return(
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
         }}
        >
            {children}
        </ExpenseTrackerContext.Provider>
    );
};