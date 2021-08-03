import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import './fonts.css';
import Navbar from '../../features/nav';
import { BlogPage, HomePage, TeamPage, WorkPage } from './pages';
import SocialMediaBar from '../../features/social-media-bar';
import Footer from '../../features/footer';

const App: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <SocialMediaBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/work" component={WorkPage} />
        <Route exact path="/blog" component={BlogPage} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
