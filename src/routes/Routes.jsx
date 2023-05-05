import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Shared/Login/Login";
import ChefDetails from "../layouts/ChefDetails";
import Blog from "../pages/Blog/Blog";
import Register from "../pages/Shared/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
          {
                    path:'/',
                    element:<Main></Main>,
                    children:[
                              {
                                        path:'/',
                                        element:<Home></Home>
                              },
                              {
                                        path:'login',
                                        element:<Login></Login>
                              },
                              {
                                        path:'register',
                                        element: <Register></Register>
                              },
                              {
                                        path:'/chef/:id',
                                        element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                                        loader: ({params}) => fetch(`https://the-chef-master-server-dasojib.vercel.app/chef/${params.id}`)
                              },
                              {
                                        path:'/blog',
                                        element:<Blog></Blog>
                              }
                    ]
          },
])

export default router;