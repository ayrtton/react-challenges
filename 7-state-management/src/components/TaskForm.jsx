import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
    const [task, setTask] = useState("");
    const { addTask } = useContext(TaskContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(task);
        setTask("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </>
    );
}

export default TaskForm;