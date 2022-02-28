import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ExampleData } from './data/Data';
import { mockData } from './utils/Functions';

export const DataContext = React.createContext({}); 
console.log(ExampleData)
const data = mockData(ExampleData);

ReactDOM.render(
  <React.StrictMode>    
    <BrowserRouter>
      <DataContext.Provider value={data}>
        <Router/>
      </DataContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
