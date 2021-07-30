import { useState } from 'react';
import { ClickOutsideDiv } from '../common';
import { useClickOutsideRef } from '../hooks/use-click-outside';

import './styles.css';

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const ref = useClickOutsideRef(() => setCounter(counter + 1));

  return (
    <>
      <ClickOutsideDiv handler={() => setCounter(counter + 1)}>
        Iconic Appz
      </ClickOutsideDiv>
      <div ref={ref}>{counter}</div>
    </>
  );
};

export default App;
