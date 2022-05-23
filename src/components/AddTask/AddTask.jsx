import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({data,setData,value,setValue}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" className={styles.input} value = {value} 
      onChange = {(e)=>{
        {
          setValue(e.target.value)
        }
      }}
        />
      <button data-cy="add-task-button" onClick={()=>{
        setData([...data,{id:Date.now(),text:value,done:false,}])
      }} className={styles.button}>+</button>

    </div>
  );
};

export default AddTask;
