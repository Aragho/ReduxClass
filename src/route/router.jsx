import Login from "../auth/login";
import Layout from "../layout/Layout";
import SignUp from "../auth/signup";




const ROUTES = [
    {
        path: "/signup",
        element:<SignUp/>
    },
   
    {
        path: "/",
        element:<Login/>
    },
    {
        path: "/movie",
        element:<Layout/>,
        children:[
            
        ]
    },
]
export default ROUTES;