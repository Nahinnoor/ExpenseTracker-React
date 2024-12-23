import "./App.css";
import { AddTransactions } from "./Components/AddTransactions";
import { Categories } from "./Components/Categories";
import { Header } from "./Components/Header";
import { Total_expense } from "./Components/TotalExpense";
import { Transactions_List } from "./Components/TransactionsList";

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Total_expense />
        <Categories />
      </div>
      <AddTransactions />
      <Transactions_List />
    </div>
  );
}

export default App;
