import "./App.css";
import { AddTransactions } from "./Components/AddTransactions";
import { Categories } from "./Components/Categories";
import { Header } from "./Components/Header";
import { TotalExpense } from "./Components/TotalExpense";
import { TransactionsList } from "./Components/TransactionsList";

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <TotalExpense />
        <Categories />
      </div>
      <AddTransactions />
      <TransactionsList />
    </div>
  );
}

export default App;
