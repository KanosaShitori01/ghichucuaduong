import Task from './task';
const Tasks = ({Data, setData}) => {
  // Chức năng xóa một task
    const onDelTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
          method: 'DELETE',
        })
        setData(Data.filter((task)=>(task.id !== id)))
    }
  // Lấy dữ liệu của một task duy nhất
    const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      return data;
    }
  // Hiệu ứng lựa chọn
    const onTouch = async (id) => {
      // Đặt lên hiệu ứng lên task được chọn
      const taskToToggle = await fetchTask(id)
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
      // Đưa task đó vào bên trong
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })
      // Task được lựa chọn
      const data = await res.json()
      // In ra màn hình
      setData(Data.map(task=>
        (task.id === id ? {...task, reminder: data.reminder} : task)
      ))
    }
  return (
  <div className="tasks">
      {
        Data.length > 0 ? 
      Data.map((task)=>{
          let date = new Date();
          task.day = "Ngày " + date.getDate() + " Tháng " + date.getMonth() + 1 + " Năm " + date.getFullYear() + " | " + date.getHours() + ":" + date.getMinutes();
         return <Task key={task.id} onDel={onDelTask} Touch={onTouch} taskI={task}/>
      }) : <h3 className="alert">Bạn chưa viết ghi chú nào cả</h3>
      }
  </div>);
};
export default Tasks;
