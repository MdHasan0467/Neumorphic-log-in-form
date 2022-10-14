import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";

function App() {
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
          path:"/login",
          element:<LogIn></LogIn>
        },
        {
          path:"/",
          element:<LogIn></LogIn>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
