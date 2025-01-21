import { Provider } from 'react-redux';
import './assets/css/main.css';
import Counter from './components/Counter';
import store from './store';
import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import postStore from './context/posts/store';
import PostsList from './components/PostsList';
import MyForm from './components/MyForm';

function App() {
    return (
        <div className="list">
            <h1>State Management</h1>
            <div className="list__exercise">
                <h2>1 - Redux Counter</h2>
                <Provider store={store}>
                    <Counter />
                </Provider>
            </div>
            <div className="list__exercise">
                <h2>2 - Context API To Do List</h2>
                <TaskProvider>
                    <TaskForm />
                    <TaskList />
                </TaskProvider>
            </div>
            <div className="list__exercise">
                <h2>3 - Redux Pagination</h2>
                {/*<Provider store={postStore}>
                    <PostsList />
                </Provider>*/}
            </div>
            <div className="list__exercise">
                <h2>4 - React Final Form</h2>
                <MyForm />
            </div>
        </div>
    );
}

export default App;
