import React from 'react';
import './Content.css';

const Content = ({tasks, setTask, find, search}) => {
  
  // console.log(tasks)
  return (
    
    <div className='content'>

            {tasks
            .filter((task) => {

              if (search) {
                return task.task.toLowerCase().includes(search.toLowerCase());
              }

              if (find === 'current') {
                return task.completed === false; 
              } else if (find === 'completed') {
                return task.completed === true;
                
              }
              return (task.completed===true || task.completed===false); 
            })
            .map((task) => ( 
              <ul key={task.id}>  
                <li>  
                  {task.task}  
                </li>  
                <input   
                  className='checkbox'   
                  type="checkbox"   
                  checked={task.completed}   
                  onChange={() => {  
                    const updatedTasks = tasks.map((t) =>   
                      t.id === task.id ? { ...t, completed: !t.completed } : t  
                    );  
                    setTask(updatedTasks); 
                  }}   
                />  
              </ul>  
            ))}


    </div>
  );
};

export default Content;
