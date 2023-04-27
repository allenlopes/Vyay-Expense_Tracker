import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = [{ amount: 5, category: 'Savings', type: 'Income', date: '27-04-2023', id: '1' }];

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