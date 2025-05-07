import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signup from "./pages/signup";
import { signupAction } from "./handlers/Auth/signupAction";

function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/">
          <Route index action={signupAction} element={<Signup/>} />
         
        </Route>
      )
    )
  return (
    <RouterProvider router={router} />
   
  )
}

export default App
