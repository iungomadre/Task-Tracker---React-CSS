import Header from './components/Header'
import {useState} from "react"
import Tasks from "./components/Tasks"
import NewTaskForm from "./components/NewTaskForm"
import './App.css'

function App() {
    // should fetch data. hardcoded only for now to work separately
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'task1'
        },
        {
            id: 2,
            name: 'task2'
        },
        {
            id: 3,
            name: 'task3'
        }
    ])

    const addNewTask = (name) => {
        const newTask = {
            id: tasks.length + 1,
            name: name,
        }
        setTasks([...tasks,  newTask])
    }

    const deleteTask = (delete_id) => {
        // filter tasks
        const filteredTasks = tasks.filter((task) => {
            return task.id !== delete_id
        })

        // remap IDs
        let counter = 1
        const mappedTasks = filteredTasks.map(task => {
            task.id = counter
            counter += 1
            return task
        })

        setTasks(mappedTasks)
    }

    return (
        <div className="App">
            <Header numberOfTasks={tasks.length}/>
            <Tasks tasks={tasks} deleteTask={deleteTask}/>
            <NewTaskForm tasksNumber={tasks.length} submit={addNewTask} />
        </div>
    );
}

export default App;
