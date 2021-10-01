
import './App.css';
import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";

const nav = ['Main', 'Information'];

function App() {
    // дабавляю новую задачу
    const addTask = (task) => {
        console.log(task);
    }

  return (
    <div className="App">
        <div className="container">
            <Header className='header' title='Notes' nav={nav}/>
        </div>
        <AddTask onAdd={addTask}/>
    </div>
  );
}

export default App;
