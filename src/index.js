import React from 'react';
//import ReactDOM from 'react-dom'; //ya no se usa es una versión antigua de react
import { createRoot } from 'react-dom/client';
import App from './routes/App';

/* ReactDOM.render(
  <App />, 
  document.getElementById('app')
);   *///ya no se usa, versión antigua de react

// opción correcta, la comenté para probar la que viene mas adelante :)
/* createRoot(document.getElementById('app')).render(
  <App />
); */ 

//opción para hacer el render que vi en los comentarios
const container = document.getElementById('app');
const root = createRoot(container); 
root.render(
  <App />
); 