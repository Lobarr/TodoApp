import React from 'react';
import ReactDOM from 'react-dom';
import App from './Compoonents/App/App';
import registerServiceWorker from './helpers/registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
