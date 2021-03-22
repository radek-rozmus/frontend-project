import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Reset} from 'styled-reset';

ReactDOM.render(
  <React.Fragment>
    <Reset/>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
