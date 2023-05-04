import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Shared/Login/Login";
import ChefDetails from "../layouts/ChefDetails";
import Blog from "../pages/Blog/Blog";

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
                                        path:'/login',
                                        element:<Login></Login>
                              },
                              {
                                        path:'/chef/:id',
                                        element:<ChefDetails></ChefDetails>
                              },
                              {
                                        path:'/blog',
                                        element:<Blog></Blog>
                              }
                    ]
          },
])

export default router;