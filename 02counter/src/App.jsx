import { useState } from 'react'
import './App.css'

// destructuring props to variable name 'money' and giving it default value to 0
function ShowStatus({money=0}) {
  let numOfCoffee = Math.floor(money / 7);
  let noun = numOfCoffee > 1 ? "Coffees" : "Coffee";
  if ((money) >= 7) {
    return <h3 style={{color: 'green'}}>You can Buy {numOfCoffee} {noun}</h3>
  }
  return <h3 style={{color: 'red'}}>You cannot Buy Coffee</h3>
}

function App() {

  const [money, setMoney] = useState(0);
  const addMoney = () => {
    setMoney(money+1);
  }
  const debitMoney = () => {
    // money -= 1; // money is a const so it will throw error
    if (money == 0) return;
    // setMoney(money - 1);
    // setMoney(money-1); // this line wont do anything cause useState updates states in batches.
    // it will make a batch and optimize it and apply changes.
    // although you can use callback function to bypass batch 
    setMoney((prev_value_money) => {
        if (prev_value_money > 0)
           return prev_value_money - 1;
        else
           return 0;
    });
   
  }
  
  return (
    <>
      <h1>Coffee Rs 7</h1>
      <h2>Total Money:  ₹ {money}</h2>
      <button onClick={addMoney}>Add Money</button>
      <button onClick={debitMoney}>Debit Money</button>
      <ShowStatus money={money} />
    </>
  )
}

export default App
