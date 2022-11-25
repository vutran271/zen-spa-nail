import React , { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
const Home = lazy(()=>import("./pages/Home"));
const Career = lazy(()=>import("./pages/Career"));

ReactDOM.render( 
    <React.Fragment>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} exact={true} element={<Home />}></Route>
          <Route path={"/home"}  element={<Home />}></Route>
          <Route path={"/career"} element={<Career />} ></Route>
        </Routes>
        </Suspense>
      </Router>
    </React.Fragment>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
