import { MdAutoDelete } from "react-icons/md";
function TodoItem ({todoName,todoDate, onDeleteClick}){
return (
  <div className="container">
    <div className="row rows">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger btns"
        onClick={() => onDeleteClick(todoName)}>
          <MdAutoDelete /></button>
      </div>
    </div>
  </div>
);
}
export default TodoItem;