import "./App.css";
import Navigation from "./components/MainNavigation/Navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainTodoHandle from "./components/TodoList/MainTodoHandle";


const routers = createBrowserRouter([
     {
          path: "/",
          element: <Navigation />,
          children: [
               {
                    path: "/",
                    element: <MainTodoHandle />,
               },
              
          ],
     },
]);

function App() {
     return <RouterProvider router={routers} />;
}

export default App;

// {
//      /* <RouterProvider router={routers} /> */
// }
// {
//      /* <TaskPanel /> */
// }
// {
//      /* <InputFiled />

//                <TaskList /> */
// }
// // </RouterProvider>
