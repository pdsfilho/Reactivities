import React from 'react';
import ReactDOM from 'react-dom';
//import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import App from './app/layout/App'; 
import reportWebVitals from './reportWebVitals';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
ReactDOM.render(

    <App />,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
