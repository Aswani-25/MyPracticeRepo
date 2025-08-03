import React, { useState } from "react";

function CurrencyConvertor() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("Euro");

  const handleSubmit = (e) => {
    e.preventDefault();
    const convertedAmount = parseFloat(amount) * 80; // Example: 1 Euro = ₹80
    alert(`Converting to ${currency} Amount is ${convertedAmount}`);
  };

  return (
    <div>
      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <strong>Amount:</strong>&nbsp;
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br /><br />
        <label>
          <strong>Currency:</strong>&nbsp;
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="Euro">Euro</option>
            {/* You can add more currencies here */}
          </select>
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function Handson3() {
  const [count, setCount] = useState(0);

  const sayHello = () => alert("Hello!");
  const increment = () => {
    setCount(count + 1);
    sayHello();
  };
  const decrement = () => setCount(count - 1);
  const sayWelcome = (msg) => alert(msg);
  const handleClick = () => alert("I was clicked");

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button><br></br>
      <button onClick={decrement}>Decrement</button><br></br>
      <button onClick={() => sayWelcome("Welcome!")}>Say welcome</button><br></br>
      <button onClick={handleClick}>Click on me</button>

      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default Handson3;
