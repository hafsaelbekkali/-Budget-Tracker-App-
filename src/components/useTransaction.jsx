import { useDispatch, useSelector } from 'react-redux'
import { ExpenseActions } from './expense-slice'
import {incomeCategories,expenseCategories,resetCategories} from './Categories'

const useTransaction = (title) => {
  const dispatch = useDispatch()
  const transactions = useSelector((state) => state.expenses.transactions)
  resetCategories()

  const rightTransaction = transactions.filter(
    (transaction) => transaction.type === title
  )

  const totalAmount = rightTransaction.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  )

  //categories of particular type
  const catogaries = title === 'Income' ? incomeCategories : expenseCategories

  rightTransaction.forEach((transaction) => {
    catogaries.forEach((category) => {
      if (transaction.category === category.type) {
        category.amount += transaction.amount
      }
    })
  })

  const filteredCategories = catogaries.filter(
    (category) => category.amount > 0
  )
  //create chart data
  const chartData = {
    labels: filteredCategories.map((category) => category.type),
    datasets: [
      {
        data: filteredCategories.map((category) => category.amount),
        backgroundColor: filteredCategories.map((category) => category.color),
      },
    ],
    options: {
      responsive: true,
    },
  }
  return {
    chartData,
    totalAmount,
    filteredCategories,
  }
}

export default useTransaction
