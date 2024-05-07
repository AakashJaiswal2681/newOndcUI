import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from "./components/Homepage/Homepage";
import Login from './components/Login/Login';

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Homepage /> },
    { path: '/login', element: <Login /> },
  ])

  return (
    <RouterProvider router={router} /> 
  );
}

export default App;
