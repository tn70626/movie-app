import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

export default App;
