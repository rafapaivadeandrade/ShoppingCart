import { Provider } from 'react-redux';
import store from './redux';
import Routes from './routes';
import Landing from './page/index';

function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;
