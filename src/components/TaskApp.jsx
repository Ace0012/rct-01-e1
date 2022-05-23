import React from "react";

import styles from "./taskApp.module.css";
import TaskHeader from './TaskHeader/TaskHeader'
import AddTask from './AddTask/AddTask'
import Tasks from './Tasks/Tasks'
import { useState } from "react";
import data1 from '../data/task.json'
import Task from './Task/Task'


const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair

  const onDelete = (id)=>{
    let newTodos = data.filter((todo)=>  todo.id!==id)
    
      setData(newTodos)


    }


    const [data,setData]= useState(data1)
    const [value,setValue] = useState("")
    const [unCompletedTask,setunCompletedTask]=useState(data.length);




  const totalTask= 0;

return (
    <div data-cy="task-app" className={styles.taskApp}>
<TaskHeader unCompletedTask = {unCompletedTask} totalTask = {data.length}/>
   {/* Add Task */}

<AddTask  data = {data} setData = {setData} value = {value} setValue= {setValue}/>
<Tasks data = {data} unCompletedTask = {unCompletedTask} setunCompletedTask = {setunCompletedTask} onDelete = {onDelete}/>




   
      {/* Tasks */}
    </div>
  );

}
export default TaskApp;
