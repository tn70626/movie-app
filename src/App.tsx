import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Outlet />
      </div>
    </Provider>
  );
};

export default App;
