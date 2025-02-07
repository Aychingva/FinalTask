import { createBrowserRouter } from "react-router";
import Layout from "../layout";
import Men from "../pages/men";
import Women from "../pages/women";
import Home from "../pages/home";
import Girls from "../pages/girls";
import Boys from "../pages/boys";
import Sales from "../pages/sales";
import Register from "../companents/register";
import Detail from "../pages/detail";
import Payment from "../pages/payment";
import Review from "../pages/review";


 export const routers=createBrowserRouter(
    [
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {

                    path:"women",
                    element:<Women/>

                },
                {

                    path:"men",
                    element:<Men/>

                },
                {

                    path:"girls",
                    element:<Girls/>

                },
                {

                    path:"boys",
                    element:<Boys/>

                },
                {

                    path:"sales",
                    element:<Sales/>

                },
                {
                    name:"register",
                    path:"register",
                    element:<Register/>
                },
                {
                    name:"detail",
                    path:"/product/:id",
                    element:<Detail/>
                },
                {
                    name:"payment",
                    path:"/payment",
                    element:<Payment/>
                },
                {
                    name:"review",
                    path:"/review/:id",
                    element:<Review/>
                }
            ]
        }
    ]
)

