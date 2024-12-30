import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import Welmsg from "./Components/Welmsg";
import { useState } from "react";
import './App.module.css';
function App() {
  // const inittodoItems =[
  //   {
  //   name: "Buy Milk",
  //   dueDate: "09/12/24",
  // },
  // {
  //   name: "Go to School",
  //   dueDate: "16/3/24",
  // },{
  //   name: "Like the project",
  //   dueDate: "17/10/24",
  // },
  // ];
  const [todoItems,setTodoItems] = useState([]);
  const handleNewItem = (itemName,itemdueDate) => {
    const newTodoItems = [...todoItems,
      {name: itemName, dueDate: itemdueDate},

    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteitem = (todoItemName) =>{
    const newTodoItems = todoItems.filter(item=> item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }
  return (
  <center className='todo-container' style={{ textAlign: 'center' }}>
    <AppName/>
    <AddTodo onNewItem={handleNewItem}/>
    {todoItems.length === 0 && <Welmsg></Welmsg>}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteitem}></TodoItems>
  </center>
  );
}

export default App;
