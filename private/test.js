import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';

let sessionValue = document.querySelector('input[name$="I.Session"]').value;
ReactDOM.render(<App session={sessionValue} />, document.getElementById('root'));
