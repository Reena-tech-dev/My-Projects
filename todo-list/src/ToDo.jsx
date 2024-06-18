import React, {  useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [completeTasks,setCompleteTasks]=useState([]);
    const [newTask, setNewTask] = useState("");
    const[showModal,setShowModal]=useState(false);
    const [editTaskIndex,setEditTaskIndex]=useState(null);
    const[editTaskValue,setEditTaskValue]=useState("");
     
    
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    
    function addTask() {
        if (newTask.trim() !==""){
        setTasks(t=>[...t,newTask]);
            setNewTask("");
        }

    }
    function markTaskComplete(index){
       setTasks(prevTasks =>{
        const newTasks=[...prevTasks];
        
        setCompleteTasks(prevCompleteTasks=> {
            const taskToComplete=newTasks.splice(index,1)[0];
            const newCompleteTasks=[...prevCompleteTasks, taskToComplete];
            //newCompleteTasks.push(taskToComplete);
            return newCompleteTasks;
        });
        return newTasks;
       });
         
    }
        
    
 function openEditModal(index){
    setEditTaskIndex(index);
    setEditTaskValue(tasks[index]);
    setShowModal(true);
 }    


 function handleEditTask(event){
    setEditTaskValue(event.target.value);
 }
 function saveEditedTasks(){
    const updatedTasks=tasks.map((task,index)=>
        index===editTaskIndex?editTaskValue:task
);
setTasks(updatedTasks);
setShowModal(false);
 }
 
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function modifyTask(index){
        
            const taskToMove =completeTasks[index];
            setCompleteTasks(prevCompleteTasks=> prevCompleteTasks.filter((_,i)=> i !== index));
            setTasks(prevTasks=>{
                const newTasks=[...prevTasks,taskToMove];
                //newTasks.push(taskToMove);
                return newTasks;
            });
            
        }
          
    
    
return (
        
        <div className='container'>
           
            <div className='to-do-list'>
                <h1> To-Do-List </h1>
                <div>
                    <input type='text'style={{color:'blue'}}
                        placeholder='Add a Task....'
                        value={(newTask)}
                        onChange={handleInputChange} />
                    <button className='add-btn' onClick={addTask}> ADD</button>
                    </div>
                  <h2>To-Do Tasks</h2>
                
                <ol>
                    {tasks.map ((task, index) =>(
                       
                        <li key={index}>
                            <span className='text'>{task}</span>
                            <button className="Edit-button" onClick={() => openEditModal(index)} >Edit</button>
                            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                            <button className="complete-button" onClick={() => markTaskComplete(index)}>Complete</button> 

                        </li>
                    
                     ) )}
                   </ol>
                   <h2 >Completed Tasks</h2>
                   <ol>
                    {completeTasks.map((task,index)=>(
                    <li key ={index}>
                        <span classname='text' > {task}</span>
                        <button className='modify' onClick={()=> modifyTask(index)}> Modify</button>
                    </li>
                    ))}
                    </ol>
                   
            </div>
            <Modal show ={showModal} onHide={()=> setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>


            <Modal.Body>
                <input 
                   type="text"
                   value={editTaskValue}
                   onChange={handleEditTask}
                   style={{width:'100%'}}
                   />
                   </Modal.Body>
                   <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={saveEditedTasks}>Save Changes</Button>
                   </Modal.Footer>
           </Modal>
        </div>

    );
}

export default ToDoList