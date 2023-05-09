import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './Routes';
import AppLayout from '../components/layout';
import Login from '../components/login/index'



const LayoutRoutes = () => {
  
  return (
    <>
      <Routes>
        {routes.map(({ path, Component }, i) => (
          <Route element={<AppLayout />} key={i}>
            <Route path={path} element={Component} />
          </Route>
        ))}
        
        <Route exact path={`${process.env.PUBLIC_URL}/login`} element={<Login />} />
      </Routes>
    </>
  );
};

export default LayoutRoutes;