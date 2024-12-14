import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import User from './pages/User.jsx';
import SearchPage from './pages/SearchPage.jsx';

const isAuth = false;

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        { 
            path: "/user/:name",
            element: <User /> 
        },
        {
            path: "projects",
            element: <Projects />,
        },
        {
            path: "about",
            element: isAuth ? <About /> : <Navigate to="/" />,
        },
        {
            path: "searchpage",
            element: <SearchPage />
        }
    ]
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
