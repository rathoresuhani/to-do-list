import TodoItem from "./TodoItem";
const TodoItems = ({todoItems, onDeleteClick}) =>{
  return(
  <div class="items-container">
    {todoItems.map((item)=> (
      <TodoItem
       Key={item.name}
       todoDate={item.dueDate} 
       todoName={item.name} 
       onDeleteClick={onDeleteClick}></TodoItem>
    ))}
  </div>
  );
};
export default TodoItems;
