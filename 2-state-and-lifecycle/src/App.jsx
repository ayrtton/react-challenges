import "./assets/css/main.css";
import Clock from "./components/Clock";
import DataFetcher from "./components/DataFetcher";
import Filter from "./components/Filter";
import ToDoList from "./components/ToDoList";
import Toggle from "./components/Toggle";
import ToggleCounter from "./components/ToggleCounter";
import WindowWidth from "./components/WindowWidth";

function App() {
    return (
        <div className="list">
            <h1>State and Lifecycle</h1>
            <div className="list__exercise">
                <h2>1 - Using State</h2>
                <Toggle />
            </div>
            <div className="list__exercise">
                <h2>2 - Multiple States</h2>
                <ToggleCounter />
            </div>
            <div className="list__exercise">
                <h2>3 - Real Time Clock</h2>
                <Clock />
            </div>
            <div className="list__exercise">
                <h2>4 - To Do List</h2>
                <ToDoList />
            </div>
            <div className="list__exercise">
                <h2>5 - Filter</h2>
                <Filter />
            </div>
            <div className="list__exercise">
                <h2>6 - Window Width</h2>
                <WindowWidth />
            </div>
            <div className="list__exercise">
                <h2>7 - Data Fetching Simulation</h2>
                <DataFetcher />
            </div>
        </div>
    )
}

export default App;