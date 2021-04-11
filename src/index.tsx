import ReactDOM from 'react-dom';
import App from './components/App/App';

import { Reset} from 'styled-reset';

ReactDOM.render(
  <>
    <Reset/>
    <App />
  </>,
  document.getElementById('root')
);
