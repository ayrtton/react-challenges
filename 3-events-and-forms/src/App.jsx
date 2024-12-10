import './assets/css/main.css';
import DynamicForm from './components/DynamicForm';
import FileUpload from './components/FileUpload';
import FormValidation from './components/FormValidation';
import MultipleSteps from './components/MultipleSteps';
import RegistrationForm from './components/RegistrationForm';

function App() {
    return (
        <div className="list">
            <h1>Events and Forms</h1>
            <div className="list__exercise">
                <h2>1 - Registration Form</h2>
                <RegistrationForm />
            </div>
            <div className="list__exercise">
                <h2>2 - Dynamic Form</h2>
                <DynamicForm />
            </div>
            <div className="list__exercise">
                <h2>3 - Form Validation</h2>
                <FormValidation />
            </div>
            <div className="list__exercise">
                <h2>4 - File Upload</h2>
                <FileUpload />
            </div>
            <div className="list__exercise">
                <h2>5 - Multiple Steps</h2>
                <MultipleSteps />
            </div>
        </div>
    );
}

export default App;
