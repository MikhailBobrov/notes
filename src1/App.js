
import './App.css';
import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import { useState } from 'react';
import 'antd/dist/antd.css';
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const nav = ['Main', 'Information'];

function App() {

    const [taskList, setTaskList] = useState([]);
    const [mode, setMode] = useState('add');

    // дабавляю новую задачу
    const addTask = (task) => {
        console.log(task);
        setTaskList([...taskList, task]);
    }

    const deleteTask = (taskIndex) => {
        setTaskList(taskList.filter((_,index) => {
            return taskIndex !== index
            }
        ))
    }

  return (
    <div className="App">
        <div className="container">
            <Header className='header' title='Notes' nav={nav}/>
        </div>
        <AddTask
            onAdd={ addTask }
            mode={mode} />
            {
                taskList.map( (task, index) => (
                    <div key={index}>
                        <span>
                            {task.text}
                        </span>

                        <Button type="link"
                                onClick={() => deleteTask(index)}>
                            <DeleteOutlined />
                        </Button>

                        <Button type="link"
                                onClick={() => setMode('save')}>
                            <EditOutlined />
                        </Button>

                    </div>

                ))
            }
    </div>
  );
}

export { App };
