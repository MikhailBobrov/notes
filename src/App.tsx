import "./styles.css";
import {useState} from "react";
import 'antd/dist/antd.css';
import { Mode, Task, MiniTask } from './types';
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

// можно просто написать = number
type Count = Task['id'];

export default function App() {
    const [taskList, setTaskList] = useState<Task[]>([]);
    const [mode, setMode] = useState<Mode>('add');
    const [count, setCount] = useState<Count>(0);


    const addTask = (task: MiniTask) => {
        console.log(task);
        setTaskList([...taskList, { ...task, id: count}]);
        setCount(count + 1);
    }

    // в аргументы приходит изменная таска
    const editTask = (task: Task) => {
        const newTaskList = taskList.map((taskListItem) => {
            if (taskListItem.id === task.id) {
                return task;
            }
            return taskListItem;
        });
        setTaskList(newTaskList);
    }

    const deleteTask = (taskId: Task['id']) => {
        const newTaskList = taskList.filter((taskListItem) => {
            return taskId !== taskListItem.id;
        });

        setTaskList(newTaskList);
    }

    return (
        <div className="App">

            {/*<div className="container">*/}
            {/*    <Header className='header' title='Notes' nav={nav}/>*/}
            {/*</div>*/}
            {/*<AddTask*/}
            {/*    onAdd={ addTask }*/}
            {/*    mode={mode} />*/}
            {/*{*/}
        {/*        taskList.map( (task, index) => (*/}
        {/*            <div key={index}>*/}
        {/*                <span>*/}
        {/*                    {task.text}*/}
        {/*                </span>*/}

        {/*                <Button type="link"*/}
        {/*                        onClick={() => deleteTask(index)}>*/}
        {/*                    <DeleteOutlined />*/}
        {/*                </Button>*/}

        {/*                <Button type="link"*/}
        {/*                        onClick={() => setMode('save')}>*/}
        {/*                    <EditOutlined />*/}
        {/*                </Button>*/}

        {/*            </div>*/}

        {/*        ))*/}
        {/*    }*/}
        </div>
    );
}
