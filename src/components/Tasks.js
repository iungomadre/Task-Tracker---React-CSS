import Task from "./Task";

const Tasks = ({ tasks, deleteTask }) => {

    const isLastElement = (task) => {
        return task.id !== tasks.length
    }

    return (
        <div className='Tasks'>
            {tasks.map(task => {
                return (
                    <div key={task.id}>
                        <Task task={task} deleteTask={deleteTask} />
                        { isLastElement(task) && <hr /> }
                    </div>
                )
            })}
        </div>
    )
}

export default Tasks