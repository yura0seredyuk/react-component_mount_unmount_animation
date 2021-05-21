import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import Fade from './Fade';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(show => !show)}>
        {show ? 'hide' : 'show'}
      </button>
      <Fade show={show}>
        <div> HELLO </div>
      </Fade>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
