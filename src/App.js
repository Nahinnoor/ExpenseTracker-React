import "./App.css";
import { AddTransactions } from "./Components/AddTransactions";
import { BudgetOverview } from "./Components/BudgetOverview";
import { Categories } from "./Components/Categories";
import { Header } from "./Components/Header";
import { TotalExpense } from "./Components/TotalExpense";
import { TransactionsList } from "./Components/TransactionsList";

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="box">
          <BudgetOverview />
          <TotalExpense />
        </div>
        <div className="box">
          <Categories />
        </div>
        <div className="box">
          <AddTransactions />
        </div>
        <div className="box">
          <TransactionsList />
        </div>
      </div>
    </div>
  );
}

export default App;
