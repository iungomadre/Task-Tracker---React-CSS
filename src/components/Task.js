import Button from "./Button";

const Task = ({ task, deleteTask }) => {
    return (
        <div className="Task">
            <p>{task.name}</p>
            <Button text={'X'} callback={() => deleteTask(task.id)} />
        </div>
    );
}

export default Task