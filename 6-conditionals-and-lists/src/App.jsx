import './assets/css/main.css';
import MultiSelect from './components/MultiSelect';
import NestedLists from './components/NestedLists';
import SwitchRendering from './components/SwitchRendering';
import TernaryRendering from './components/TernaryRendering';
import TimeRendering from './components/TimeRendering';

function App() {
    return (
        <div className="list">
            <h1>Conditionals and Lists</h1>
            <div className="list__exercise">
                <h2>1 - Ternary Rendering</h2>
                <TernaryRendering condition={true} />
            </div>
            <div className="list__exercise">
                <h2>2 - Switch Rendering</h2>
                <SwitchRendering value={1} />
            </div>
            <div className="list__exercise">
                <h2>3 - Nested Lists</h2>
                <NestedLists />
            </div>
            <div className="list__exercise">
                <h2>4 - Time Rendering</h2>
                <TimeRendering />
            </div>
            <div className="list__exercise">
                <h2>5 - Multiple Selection</h2>
                <MultiSelect />
            </div>
        </div>
    )
}

export default App;
