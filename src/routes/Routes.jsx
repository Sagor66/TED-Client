import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import ToysCategory from "../pages/ToysCategory/ToysCategory";
import AddToy from "../pages/AddToy/AddToy";
import MyToy from "../pages/MyToy/MyToy";

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
      },
      {
        path: 'toy/category/:category',
        element: <ToysCategory></ToysCategory>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/category/${params.category}`)
      },
      {
        path: 'add-toy',
        element: <AddToy></AddToy>
      },
      {
        path: 'my-toys',
        element: <MyToy></MyToy>,
        loader: () => fetch('http://localhost:5000/newToys')
      }
    ]
  }
])

export default router;