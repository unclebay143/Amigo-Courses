import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CourseApi} from './Components/CourseApi'
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <CourseApi>
    <App />
  </CourseApi>,
  document.getElementById('root')
);

