import "./todo.css"
const Todo = ({ tasks, deleteitems}) => {
    
    
  return (
    <>
      {tasks.map((ele, index) => (
        <div className="todo-item" key={index}>
          <h4>{ele.cont} <span></span> <button onClick={()=>deleteitems(index)}>delete</button></h4>
          
          <hr />
        </div>
      ))}
    </>
  );
};
export default Todo;
