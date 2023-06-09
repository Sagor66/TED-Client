import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import ToysCategory from "../pages/ToysCategory/ToysCategory";
import AddToy from "../pages/AddToy/AddToy";
import MyToy from "../pages/MyToy/MyToy";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-sagor66.vercel.app/toys/${params.id}`)
      },
      {
        path: 'toy/category/:category',
        element: <ToysCategory></ToysCategory>,
        loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-sagor66.vercel.app/toys/category/${params.category}`)
      },
      {
        path: 'add-toy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: 'my-toys',
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      }
    ]
  }
])

export default router;