import React from "react";
import { useState } from "react";
import styles from ".todo.module.css";

const TodoItem = ({ todo }) => {
  const [isCompleted, setisCompleted] = useState(todo.isCompleted);

  return (
    <div className={styles.Todo} key={todo.id}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => {
          console.log(e.target.chekced);
        }}
      />
      <div>{todo.value}</div>
    </div>
  );
};

export default TodoItem;
