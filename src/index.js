import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';

import Tweetbox from './components/TweetBox/Tweetbox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
    
    <Header />
    
    <Tweetbox />
    

    <App />

  </React.StrictMode>
 
);

reportWebVitals();
