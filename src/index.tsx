import ReactDOM from 'react-dom';
import App from './components/App/App';
import './styledHelpers/styles.sass';

import { Provider } from "react-redux";
import {store} from "./redux/store/store";

import { Reset} from 'styled-reset';

ReactDOM.render(
  <>
    <Reset/>
    <Provider store={store}>
    <App/>
    </Provider>
  </>,
  document.getElementById('root')
);
