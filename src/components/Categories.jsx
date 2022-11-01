const incomeColors = ['#9fd3c7', '#53a8b6', '#7fa99b', '#e0fffb', '#a2c11c', '#ebcbae'];
const expenseColors = ['#c3195d', '#f76b8a', '#eaf6f6', '#f48db4', '#fad3cf', '#fd2eb3', '#eab0d9'];

export const incomeCategories = [
  { type: 'Business', amount: 0, color: incomeColors[0] },
  { type: 'Deposits', amount: 0, color: incomeColors[1] },
  { type: 'Gifts', amount: 0, color: incomeColors[2] },
  { type: 'Salary', amount: 0, color: incomeColors[3] },
  { type: 'Savings', amount: 0, color: incomeColors[4] },
  { type: 'other', amount: 0, color: incomeColors[5] },
];

export const expenseCategories = [
  { type: 'Bills', amount: 0, color: expenseColors[0] },
  { type: 'Car', amount: 0, color: expenseColors[1] },
  { type: 'Travel', amount: 0, color: expenseColors[2] },
  { type: 'Food', amount: 0, color: expenseColors[3] },
  { type: 'Shopping', amount: 0, color: expenseColors[4] },
  { type: 'Electronic', amount: 0, color: expenseColors[5] },
  { type: 'Other', amount: 0, color: expenseColors[6] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};