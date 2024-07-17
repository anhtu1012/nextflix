import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import MovieManagement from "./pages/movie-management";
import Layout from "./components/layout";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie-management",
        element: <MovieManagement />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
