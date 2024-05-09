import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from "./components/Homepage/Homepage";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Question from "./components/UI/QuestionsWithOptions/QuestionPages/Question"

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Homepage /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/question', element: <Question /> },
  ])

  return (
    <RouterProvider router={router} /> 
  );
}

export default App;
