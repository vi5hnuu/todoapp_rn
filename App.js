import { } from 'react-native';
import Main from './components/Main';
import { StatusBar } from 'expo-status-bar';
import store from './redux/store'
import { Provider } from 'react-redux';

export default function App() {
  return <Provider store={store}>
    <Main />
  </Provider>

}

