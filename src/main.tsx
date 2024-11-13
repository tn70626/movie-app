import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import MoviePage from './pages/MoviePage.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFoundPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/movies/:movieId',
    element: <MoviePage />,
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
