import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../../features/nav';
import { GlobalStyles } from './global';
import { HomePage } from './pages';

const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Fragment>
  );
};

export default App;
