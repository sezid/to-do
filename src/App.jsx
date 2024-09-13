import TableHeader from './Components/TableHeader/TableHeader'
import Content from './Components/Content/Content'
import Create from './Components/Create/Create'
import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [find,setFind]=useState('All')
  const [search,setSearch]=useState('')

 
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const clearTask=()=>{
    setTasks([]);  
    localStorage.setItem('tasks', JSON.stringify([]));  
  }


  console.log(search)
  
    return(
      <>
      <input placeholder='Search' className='searchbox' onChange={(s) => setSearch(s.target.value)} type="text" />
      <div className='clear'> <button onClick={clearTask}>Clear Task</button></div>
     
      <TableHeader setFind={setFind}/>
      <Content tasks={tasks} setTask={setTasks} find={find} search={search}/>
      <Create task={setTasks}/>
      </>
    )
    
  
}

export default App
