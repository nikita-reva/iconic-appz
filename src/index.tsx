import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app/layout/App';
import { GlobalStyles } from './app/layout/global';

ReactDOM.render(
  <Router>
    <GlobalStyles />
    <App />
  </Router>,
  document.querySelector('#root')
);
