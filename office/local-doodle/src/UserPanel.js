import React, { useState } from 'react';

import './assets/css/bootstrap.min.css';
import './assets/css/style.css';  
import './assets/css/media.css';
import './assets/css/progressbar.css';

import Navbar from './common/Navbar';
import Sidebar from './common/Sidebar';

import AppRoutes from './AppRoutes';
import { FrontURL } from './Constant';
import { useHistory } from 'react-router';

function UserPanel(props) {

  var AuthUserToken = localStorage.getItem("AuthUserToken")
  const routerHistory = useHistory();
  
  if(window.location.pathname != "/login" && AuthUserToken != null){
    return (
      <>
      <Navbar />
      <section id="dashboard">
          <div className="container-fluid fixed_width dboard_width">
            <Sidebar />
            <AppRoutes />
          </div>
      </section>
      </>
    );
  }else{
    routerHistory.push("login");
    return (
      <>
      <AppRoutes />
      </>
    );
  }
  
}

export default UserPanel;