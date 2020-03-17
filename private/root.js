import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { HashRouter } from "react-router-dom";

let sessionValue = document.querySelector('input[name$="I.Session"]').value;
let workUnit = '';
if (document.querySelector('.mrData div[name="Instructions"]')) {
  workUnit = document.querySelector('.mrData div[name="Instructions"] .mrQuestionText').value;
} else {
  workUnit = 'Testing Account';
}

// grab page id from URL hash
let hashRoute = window.location.hash.replace(/^\#\//g, '');

// react-router-dom will be able to pass page ID in URL, browser can refresh and navigate with hash history;
ReactDOM.render(
  <HashRouter>
    <App session={sessionValue} workunit={workUnit} currentPage={hashRoute ? hashRoute : 'CoverPage' } />
  </HashRouter>,
  document.getElementById('root')
);
