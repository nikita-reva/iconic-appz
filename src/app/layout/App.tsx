import { Fragment } from 'react';
import Navbar from '../../features/nav';
import { GlobalStyles } from './global';

const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
    </Fragment>
  );
};

export default App;
