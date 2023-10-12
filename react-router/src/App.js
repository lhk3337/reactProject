import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/Home";
import ProductsPage from "./page/Products";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/products", element: <ProductsPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
