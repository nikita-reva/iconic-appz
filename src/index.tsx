import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app/layout/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
);
