import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Input from "./Input";
function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }
  function handlerDelete(id) {
    setItems(preValue => {
      return preValue.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input addText={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              item={todoItem}
              onChecked={handlerDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
