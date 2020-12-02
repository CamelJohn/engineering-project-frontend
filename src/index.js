import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const element = <App />;
// const element = (<React.StrictMode><App /></React.StrictMode>);
const ref = document.getElementById('root');

ReactDOM.render(element, ref);
