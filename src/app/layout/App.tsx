import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import './fonts.css';
import Navbar from '../../features/nav';
import { HomePage } from './pages';
import SocialMediaBar from '../../features/social-media-bar';

const App: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <SocialMediaBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Fragment>
  );
};

export default App;
