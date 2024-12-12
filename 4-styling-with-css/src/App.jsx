import './assets/css/main.css';
import HelloWorld from './components/HelloWorld';
import Button from './components/Button';
import ThemeToggle from './components/ThemeToggle';
import StyledComponents from './components/StyledComponents';
import ReactSass from './components/ReactSass';

function App() {
    return (
        <div className="list">
            <h1>Styling with CSS</h1>
            <div className="list__exercise">
                <h2>1 - Hello World with Styles</h2>
                <HelloWorld />
            </div>
            <div className="list__exercise">
                <h2>2 - Styles with CSS File</h2>
                <Button />
            </div>
            <div className="list__exercise">
                <h2>3 - Theme Toggle</h2>
                <ThemeToggle />
            </div>
            <div className="list__exercise">
                <h2>4 - Styled Components</h2>
                <StyledComponents />
            </div>
            <div className="list__exercise">
                <h2>5 - Sass with React</h2>
                <ReactSass title="Title" text="Sass with React exercise." />
            </div>
        </div>
    )
}

export default App;