import React from 'react'
import { useState } from 'react'

const App = () => {
  const [add, setAdd] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAdd([...add, input]);
    setInput(""); // Clear the input field after adding
  }

  function handleDelete(index) {
    const dlt = [...add];
    dlt.splice(index, 1);
    setAdd(dlt);
  }

  return (
    <div>
      <h1>Todo App for Daily</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} placeholder="Enter your todo" />
        <button type="submit">ADD</button>
      </form>
      <h2>Your Tasks are BELOW</h2>
      <ul>
        {
          add.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleDelete(index)}>DELETE</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
