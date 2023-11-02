import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Root } from './routes/root';
import { ErrorPage } from './error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
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
