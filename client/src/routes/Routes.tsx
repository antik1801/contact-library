import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddContact from "../pages/AddContact/AddContact";
import AllContacts from "../pages/AllContacts/AllContacts";
import Home from "../pages/Home/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path:"/",
                element: <Home />
            },
            {
                path: "/add-contact",
                element: <AddContact />
            },
            {
                path: "/all-contact",
                element: <AllContacts />
            }
        ]
    }
])