import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutsContext'
import { AuthContext } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContext>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </AuthContext>
  </React.StrictMode>
);
