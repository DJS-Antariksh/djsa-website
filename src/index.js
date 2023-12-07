import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
    <App />
  </ThemeProvider>
);