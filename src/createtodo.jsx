import "./createtodo.css" 
import { useState } from "react";

const CreateTodoTask = ({addNewTask1}) => {
  const [todo2, setTodo2] = useState("");
  const ButtonHandle = () => {
    addNewTask1(todo2);
    setTodo2("");
  };
  return (
    <>
      {/* <label htmlFor="">Add tasks</label> */}
      <br />
      <input
      className="input-field"
        type="text"
        name="todo2"
        value={todo2}
        placeholder="write todo tasks"
        onChange={(e) => setTodo2(e.target.value)}
      />
      <button className="button" onClick={ButtonHandle}>Add</button>
      {/* <hr /> */}
    </>
  );
};
export default CreateTodoTask;
