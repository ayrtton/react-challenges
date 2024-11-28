import { useState } from "react";

const Filter = () => {
    const [task, setTask] = useState("");
    const [toDoList, setToDoList] = useState([]);
    const [filter, setFilter] = useState("");

    const addTask = () => {
        setToDoList([...toDoList, {id: toDoList.length, title: task}]);
        setTask("");
    }

    return (
        <>
            <input type="text" value={task} onChange={e => setTask(e.target.value)} placeholder="Add a task..." />
            <button className="btn" onClick={() => addTask()}>Add Task</button>
            <ul>
                {toDoList.filter((task) => task.title.includes(filter))
                         .map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
            <input type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Search for a task..." />
        </>
    );
}

export default Filter;