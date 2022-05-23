import React from "react";
import styles from "./tasks.module.css";
import image from '../../assets/empty.svg'
// import Task from '../Task/Task'


const Tasks = (data,setunCompletedTask,unCompletedTask,onDelete) => {
  // NOTE: do not delete `data-cy` key value pair
  if(data.length<1){

    return (
    <>
   
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}

        <img src={image} alt="" />
        <h2 className="h2"> Empty List</h2>
        <p className="p"> Add new Task above</p>

      </div>
    </>
  );
}

else{
  return (

    <ul data-cy="tasks" className={styles.tasks}>
      { data.map((item)=>(
        <Task key={item.id} onDelete ={onDelete} item={item} date = {date}/>
      ))}
    
      </ul>
  


  )
}
}





export default Tasks;
