import React ,{useState} from 'react';
function ToDoList(){
   const [tasks,setTasks]=useState([]);
   const [newTask,setNewTask] = useState("");
function handleInputChange(event){

   }
function addTask(){

}
function editTask(index){

}
function deleteTask(index){

}
    return(<div className='to-do-list'>
        <h1> To-Do-List </h1>
        <div>
            <input type='test' placeholder='Add a Task....' value={(index)}/>
        </div>

    </div>)
}
export default ToDoList