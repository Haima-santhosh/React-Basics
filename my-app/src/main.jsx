import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import ProductDetails from './Components/ProductDetails.jsx';
import Root from "./routes/root";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
     children: [
      {
        path: "/",
        element: <App />,
      },
      {
    path: "/product/:id",
    element: <ProductDetails/>
  },
    ],
  },
   
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
