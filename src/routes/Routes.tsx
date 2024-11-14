import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../pages/HomePage.tsx';
import MoviePage from '../pages/MoviePage.tsx';
import NotFound from '../pages/NotFoundPage.tsx';
import SearchPage from '../pages/SearchPage.tsx';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Homepage />,
        errorElement: <NotFound />,
      },
      {
        path: '/movie/:movieId',
        element: <MoviePage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
    ],
  },
]);
