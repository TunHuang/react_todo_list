import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}

export default Root;