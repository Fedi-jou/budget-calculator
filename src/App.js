import "./App.css";
import { useState, useEffect } from "react";
import Alert from "./components/Alert";
import Form from "./components/Form";
import List from "./components/List";
import { stringify, v4 as uuidv4 } from "uuid";

/* const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1000 },
  { id: uuidv4(), charge: "car", amount: 500 },
  { id: uuidv4(), charge: "bills", amount: 300 },
]; */

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Functions //
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempexpenses = expenses.map((item, index) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempexpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "Item edited Successfully" });
      } else {
        setExpenses([...expenses, { id: uuidv4(), charge, amount }]);
        handleAlert({ type: "success", text: "Added Successfully" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({ type: "danger", text: "Add something then click Submit" });
    }
  };

  console.log(charge, amount);
  console.log(expenses);

  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "all the items are deleted !" });
  };
  const handleDelete = (id) => {
    const filtered = expenses.filter((item) => item.id !== id);
    setExpenses(filtered);
    handleAlert({ type: "danger", text: "Item deleted !" });
    console.log(`item deleted , ${id}`);
  };
  const handleEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    setCharge(expense.charge);
    setAmount(expense.amount);
    setEdit(true);
    setId(id);
    console.log(expense);
  };
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <h1>Budget Calculator</h1>
      <main className="App">
        <Form
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <List
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      <h1>
        Total Spending :
        <span className="total">
          {expenses.reduce((acc, curr) => {
            return (acc += parseFloat(curr.amount));
          }, 0)}
          $
        </span>
      </h1>
    </>
  );
}

export default App;
