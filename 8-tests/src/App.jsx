import './assets/css/main.css';
import Button from './components/Button';
import Form from './components/Form';
import Greeting from './components/Greeting';

function App() {
    return (
        <div className="list">
            <h1>Tests</h1>
            <div className="list__exercise">
                <h2>1 - Component Test</h2>
                <Greeting name="User01" />
            </div>
            <div className="list__exercise">
                <h2>2 - Event Test</h2>
                <Button />
            </div>
            <div className="list__exercise">
                <h2>3 - Form Test</h2>
                <Form />
            </div>
        </div>
    );
}

export default App;