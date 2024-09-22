import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  Home from './pages/Home/Home.jsx';
import Auth from './pages/Auth/Auth.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/auth",
        element : <Auth/>
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
