import React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home,Dashboard,Signin } from './components';
import reportWebVitals from './reportWebVitals';
import './styles.css'


ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Router>
        <Routes>
          <Route path='/' element={<Home title  ={'Drones Inventory'}/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </Router>
    </StyledEngineProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
