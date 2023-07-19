import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from './App';
import AuthProvider from './Contexts/AuthProvider';
import './index.css';
import('preline')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      
    </AuthProvider>
  </React.StrictMode>
);
