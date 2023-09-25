import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import store from './Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <StrictMode>
     <Provider store={store}>
    <App />
   </Provider>
 </StrictMode>

      

    

);


