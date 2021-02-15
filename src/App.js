import { useState, useEffect } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.css";
import AddTasks from "./Components/addtask";
import Footer from "./Components/footer";
import Header from "./Components/header";
import About from './Components/about';
import Tasks from "./Components/tasks";

function App() {
  const [ShowAddTask, setShowAddTask] = useState(false);
  const [tasks, setDataTask] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const TasksFromServer = await fetchTasks();
      setDataTask(TasksFromServer);
    };
    getTasks();
  }, []);

  // Lấy dữ liệu từ JSON Server bằng fetch()
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };
  // Chức năng thêm một task vào danh sách
  const onAddTask = async (task) => {
    // Chức năng mới -- Server
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    // In ra màn hình kết quả mới
    setDataTask([...tasks, data]);
    console.log(data);
    // Chức năng cũ -- ClientOnly
    // const id = Math.floor(Math.random() * 100) + 1;
    // const NewTask = {id,...task};
    // setDataTask([...tasks, NewTask]);
  };

  return (
    <Router>
    <div className="App__TaskReact">
      <Header
        titleHeader="Ghi chú của Dương"
        onShowAddTask={() => setShowAddTask(!ShowAddTask)}
        titleBtn={ShowAddTask}
      />
     
      <Route path="/" exact render={(props)=>(
        <>
         {ShowAddTask && <AddTasks onAdd={onAddTask} />}
         <Tasks Data={tasks} setData={setDataTask} />
        </>
      )}/>
      <Route path="/about" component={About}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
