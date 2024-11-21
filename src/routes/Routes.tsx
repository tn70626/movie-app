import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Homepage from '../pages/HomePage.tsx';
import MoviePage from '../pages/MoviePage.tsx';
import NotFound from '../pages/NotFoundPage.tsx';
import SearchPage from '../pages/SearchPage.tsx';

export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Homepage />,
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
    errorElement: <NotFound />,
  },
]);
