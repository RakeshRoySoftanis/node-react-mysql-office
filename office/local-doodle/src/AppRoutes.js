import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './user/Dashboard';
import ReviewTeamMember from './user/ReviewTeamMember';
import ReviewYourTeam from './user/ReviewYourTeam';
import SubmitRequisition from './user/SubmitRequisition';
import SubmitRequisitionLast from './user/SubmitRequisition_2';
import TeamListing from './user/TeamListing';
import ManageTeam from './user/ManageTeam';
import CostCalculator from './user/CostCalculator';
import TalentsPool from './user/TalentsPool';
import AskTalentPage from './user/AskTalentPage';
import Login from './user/Login';
import { FrontURL } from './Constant';

function AppRoutes() {

  var AuthUserToken = localStorage.getItem("AuthUserToken")
  return (
    <>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/db_v2_member">
            <ReviewTeamMember />
          </Route>
          <Route path="/review_your_team">
            <ReviewYourTeam />
          </Route> 
          <Route path="/submit_requisition">
            <SubmitRequisition />
          </Route>
          <Route path="/submit_requisition_2">
            <SubmitRequisitionLast />
          </Route>
          <Route path="/team_listing">
            <TeamListing />
          </Route>

          <Route path="/db_manage_team">
            <ManageTeam />
          </Route>

          <Route path="/costCalculator">
            <CostCalculator />
          </Route> 

          <Route path="/talentsPool">
            <TalentsPool />
          </Route>

          <Route path="/ask_Talent">
            <AskTalentPage />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>
    </>
  );
  
}

export default AppRoutes;
