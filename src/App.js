import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2023, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 5, 12),
    },
    {
      id: "e5",
      title: "frying pan",
      amount: 16.12,
      date: new Date(2022, 3, 11),
    },
    { id: "e6", title: "Cake", amount: 30.4, date: new Date(2021, 6, 1) },
    {
      id: "e7",
      title: "Bag pack",
      amount: 294.67,
      date: new Date(2020, 2, 16),
    },
    {
      id: "e8",
      title: "eating out",
      amount: 150.24,
      date: new Date(2020, 5, 5),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </>
  );
}

export default App;
