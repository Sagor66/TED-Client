import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'all-toys',
        element: <AllToys></AllToys>
      },
      {
        path: 'toy/:id',
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
      }
    ]
  }
])

export default router;