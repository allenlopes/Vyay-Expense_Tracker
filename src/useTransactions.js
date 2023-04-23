import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import { incomeCategories, expenseCategories, resetCategories } from "./categories/categories";

const useTransactions= (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    const transactionsOfOneSpecificType = transactions.filter((t) => t.type === title);
    const total = transactionsOfOneSpecificType.reduce((accumulator, currentVal) => accumulator += currentVal.amount, 0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    console.log({ transactionsOfOneSpecificType, total, categories });

    transactionsOfOneSpecificType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category);

        if(category) category.amount += t.amount;
    });

    const filteredCategories = categories.filter((c) => c.amount > 0);

    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
        }],
        labels: filteredCategories.map((c) => c.type),
    };

    return { filteredCategories, total, chartData };
};

export default useTransactions;

