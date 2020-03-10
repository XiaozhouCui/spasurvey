import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { BrowserRouter } from "react-router-dom";

let sessionValue = document.querySelector('input[name$="I.Session"]').value;
let workUnit = '';
if (document.querySelector('.mrData div[name="Instructions"]')) {
  workUnit = document.querySelector('.mrData div[name="Instructions"] .mrQuestionText').value;
} else {
  workUnit = 'Testing Account';
}

ReactDOM.render(
  <BrowserRouter>
    <App session={sessionValue} workunit={workUnit} />
  </BrowserRouter>,
  document.getElementById('root')
);
