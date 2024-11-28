import { useState } from "react";

const ToDoList = () => {
    const [task, setTask] = useState("")
    const [toDoList, setToDoList] = useState([]);

    const addTask = () => {
        setToDoList([...toDoList, {id: toDoList.length, title: task}]);
        setTask("");
    }

    return (
        <>
            <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
            <button className="btn" onClick={() => addTask()}>Add Task</button>
            <ul>
                {toDoList.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </>
    )
}

export default ToDoList;