function TodoItem2({todoDate, todoName}){

  // let todoName = 'Go to School';
  // let todoDate = '04/9/24';
  return(
    
      <div className="container-items">
        <div className="row kg-row" style={{margin: '10px 5px'}}>
          <div className='col-6'>{todoName}</div>
          <div className='col-4'>{todoDate}</div>
          <div className='col-2'><button type="button" className="btn btn-danger " style={{width: '100px'}}>Delete</button></div>
        </div>
      </div>
    
  );

}

export default TodoItem2;