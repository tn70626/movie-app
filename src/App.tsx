import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import { store } from './redux/store';

import './styles/app.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
