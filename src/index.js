import App from './App';
import MyFirstApp from './MyFirstApp';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot( document.getElementById("root")).render(
  <React.StrictMode>
      <App/>
      <MyFirstApp title= "My First App"/>
  </React.StrictMode>
)

