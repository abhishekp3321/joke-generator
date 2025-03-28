import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './joke/Jokestore';
import Joke from './joke/app/Joke';
import Favorites from './joke/app/Favorites';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Joke></Joke>}>
      </Route>
      <Route path="/fav" element={<Favorites></Favorites>}>
      </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
