import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello fucking world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/*Этот первый маршрут мы часто называем "корневым",
 поскольку все остальные маршруты будут отрисовываться внутри него.
  Он будет служить корневым макетом пользовательского интерфейса,
   в дальнейшем мы будем использовать вложенные макеты. */
