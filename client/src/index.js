import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/UserStore';
import AppointmentStore from "./store/AppointmentStore";
import ComponentsStore from './store/ComponentStore';
import RequestStore from './store/RequestStore';
import DenitionStore from './store/DentitionStore';
import DiagnosisStore from "./store/DiagnosisStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            appointment: new AppointmentStore(),
            component: new ComponentsStore(),
            request: new RequestStore(),
            dentition: new DenitionStore(),
            diagnosis: new DiagnosisStore()
        }}>
            <App />
        </Context.Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
