import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import AuthcontextProvider from './providers/AuthcontextProvider';
import LoadercontextProvider from './providers/LoadercontextProvider';
import  './defult.scss'
import Header from './components/Header/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <LoadercontextProvider>
      <AuthcontextProvider>
        <Header/>
        <App />
      </AuthcontextProvider>
    </LoadercontextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

