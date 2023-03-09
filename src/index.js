import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './styles/index.css';
import './styles/App.css';
import './styles/Sobre.css';
import './styles/Inicio.css';
import './styles/Contato.css';

import Root from './routes/Root';

import Inicio from './routes/Inicio';
import Sobre from './routes/Sobre';
import Contato from './routes/Contato';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/Inicio",
        element: <Inicio />,
      },

      {
        path: "/Sobre",
        element: <Sobre />,
      },

      {
        path: "/Contato",
        element: <Contato />,
      },
    ],
  },
  
  


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

