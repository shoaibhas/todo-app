import { useState } from "react";
import "./App.css";
import Todo from "./todo";
import CreateTodoTask from "./createtodo";

function App() {
  const [task, setTask] = useState([
    // {
    // cont:"Task 1"
    // }
  ]);

  const addNewTask = (todo1) => {
    setTask([
      ...task,
      {
        cont: todo1,
      },
    ]);
  };

  const deleteList=(id)=>{
    const updatesitems=task.filter((ele,index)=>{
      return index !==id;

    })
    setTask(updatesitems)
  }
  
  return (
    <>
      <div className="container">
        <CreateTodoTask addNewTask1={addNewTask} />
        <Todo tasks={task} deleteitems= {deleteList}/>
        {/* <Todo tasks={deleteList}/> */}
      </div>
    </>
  );
}

export default App;
