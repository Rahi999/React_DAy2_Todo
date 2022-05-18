import React from "react";
import { useState } from "react";
import styles from "./todo.module.css" ;

const Todo = ()=> {
  let [value, setValue] = useState("") ;
  const [todos, setTodos] = useState([]) ;

  

  return (
    <div> 
      <input className={styles.input} placeholder="Write Something" onChange={(e)=>{
        setValue(e.target.value)
      }}/>
      <button onClick={()=>{
        setTodos([
          ...todos,{id: Date.now(), value: value}]) ;
          setValue("") ;
      }}>+</button>
      <div className={styles.todoList}>
     {todos.map((todo)=>(
       <div className={styles.Todo} key={todo.id}>
         <input type="checkbox"/>
         <div>{todo.value}</div>
       </div>
     ))}
      </div>
    
    
    </div>
  )
}

export default Todo;