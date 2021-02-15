import {FaTimes} from 'react-icons/fa';
import {useState} from 'react';
const Task = ({taskI, onDel, Touch}) => {
  const [showNote,setShowNote] = useState(false);
  return (
    <>
  <div className={`task ${taskI.reminder ? "reminder" : ""}`} onDoubleClick={()=>{Touch(taskI.id)}}>
    <div className="task__content">
        <h3>{taskI.id} - {taskI.name}</h3>
        <p>{taskI.day}</p>
        <button onClick={()=>{setShowNote(!showNote)}} className="viewnote">{!showNote ? "Xem ghi chú" : "Đóng ghi chú"}</button>
    </div>
    
    <FaTimes onClick={()=>{onDel(taskI.id)}} className="close"/>
  </div>
  {
    showNote && 
  <div className="note">
      <p>{taskI.note}</p>
  </div>
  }
    </>);
};
export default Task;
