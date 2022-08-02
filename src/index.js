import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reducer, { initialState} from './utils/reducer';
import { StateProvider } from './utils/StateProvider';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

