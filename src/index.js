import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Stateprovider } from './Pages/Stateprovider';
import reducer, { initialstate } from './Reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Stateprovider initialstate={initialstate} reducer={reducer}>
      <App />
    </Stateprovider>
  </React.StrictMode>
);


