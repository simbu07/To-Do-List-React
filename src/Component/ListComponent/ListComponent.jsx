import React, { useState } from 'react'
import './ListComponent.css';


const ListComponent = () =>{

  const [tasks, setTask] = useState([]);
  const [newTask, setNewTasks ]=useState("");
  
  function inputHandler (event){
      setNewTasks(event.target.value);

  }

  function addTask(){
    if(newTask.trim() !==""){
      setTask(t => [...t, newTask]);
      setNewTasks("");
    }
  }
 
  function deleteTask(index){
    const updatedTasks = tasks.filter((Element,i)=>i!==index);
    setTask(updatedTasks);


  }

  
  function moveTaskup(index){
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index-1]]=[updatedTasks[index -1],updatedTasks[index]];
      setTask(updatedTasks);
    }

  }
  function moveTaskDown(index){

    if(index < tasks.length-1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index+1]]=[updatedTasks[index +1],updatedTasks[index]];
      setTask(updatedTasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To--Do--List</h1>
      <div className='input-task'>
        
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={inputHandler}>
        </input>
        
        <button 
        className='add-button'
        onClick={addTask}
        >Add</button>
      </div>
      <ol>
        {tasks.map((tasks, index)=>
            
            <li key={index}>
              <span className='text'>{tasks}</span>
             
              <button 
                className='delete-button'
                onClick={()=>deleteTask(index)}>
                Delete
              </button>
              
              <button 
                className='moveup-button'
                onClick={()=>moveTaskup(index)}>
               Up
              </button>
              
              <button 
                className='movedown-button'
                onClick={()=>moveTaskDown(index)}>
                Down
              </button>
            
            </li>
        )}
      </ol>
    </div>
  )
}

export default ListComponent