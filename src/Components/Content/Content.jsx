import React, {useState, useEffect} from 'react'
import './Content.css'


const Content = () => {

  const [tasks, setTasks]=useState([]);

  useEffect(() => {
    fetch('/tasks.json')  
      .then((response) => response.json())
      .then((data) => setTasks(data))  
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div className='content'>
      {tasks.map((task) => ( 
        <ul>
              <li key={task.id}>
                {task.task}
                
              </li>
              <input className='checkbox' type="checkbox" />  
        </ul> 
        ))} 
      
    </div>
  )
}
// 
export default Content
