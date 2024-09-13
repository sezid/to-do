import React, {useState, useEffect} from 'react'
import './Create.css'

const Create = ({task}) => {

    const [taskText, setTaskText] = useState('');

   
  
    const handleAddTask = () => {
      if (taskText.trim()) {
        const newTask = {
          id: Math.random(), 
          task: taskText,
          completed: false,
        };
  
        task(prevTasks => [...prevTasks, newTask]); 
        setTaskText(''); 
      }
    };




  return (
    <div className='add-field'>
        <input
            type="text"
            placeholder='Add Task'
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)
            }
          />
        <button onClick={handleAddTask}>+</button>

        

      
    </div>
  )
}


export default Create
