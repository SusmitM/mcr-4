import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DataContextProvider } from './Context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
     <DataContextProvider>
        <App />
    </DataContextProvider>
    </BrowserRouter>

   
  
);

