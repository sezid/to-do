import React,{useState} from 'react'
import './TableHeader.css'

  const TableHeader = ({setFind}) => {


  const onPress=(value)=>{
    setFind(value);
  }


  return (
    <div>
      <div className="table-header">
        
        <ul>
            <li onClick={()=>{
              onPress('All');
            }}>All</li>
            <li onClick={()=>{
              onPress('current')
            }}>Current</li>
            <li onClick={()=>{
              onPress('completed')
            }}>Completed</li>
        </ul>
        
      </div>

    </div>
    
  )
}

export default TableHeader
