/* Inside of this file we will be dealing with all the logic for calculating the
categories, the transactions and the totals and then in the Details.jsx file we will be able to fetch the data from here */

import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import { incomeCategories, expenseCategories, resetCategories } from "./categories/categories";

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    const transactionsOfOneSpecificType = transactions.filter((t) => t.type === title);
    const total = transactionsOfOneSpecificType.reduce((accumulator, currentVal) => accumulator += currentVal.amount, 0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    console.log({ transactionsOfOneSpecificType, total, categories });

    transactionsOfOneSpecificType.forEact((t) => {
        const category = categories.find((c) => c.type === t.category)
    })
}

