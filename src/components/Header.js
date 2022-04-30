const Header = ({ numberOfTasks }) => {
    return (
        <div className="Header">
            <h1>Tasks</h1>
            <h1>{numberOfTasks}</h1>
        </div>
    )
}

export default Header