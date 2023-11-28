import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Notfound from './pages/Notfound';
import Choose from './pages/Choose';

function App() {

  const routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'choose', element: <Choose /> },
        { path: '*', element: <Notfound /> }
      ]
    }
  ])
  return <RouterProvider router={routers} />

}

export default App;
