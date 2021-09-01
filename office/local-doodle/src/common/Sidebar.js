import React from 'react';
import { Link , useLocation  } from 'react-router-dom';
import { UncontrolledCollapse } from 'reactstrap';

function Sidebar() {
    const location = useLocation();
  return (
    <>
    
    <div className="main_nav">
        <div className="r_creat-team">
            <div className="r_create_overflow">
                <div className="team-ul-1st">
                    <ul>
                    <li>
                        <Link to="/" className={ location.pathname =="/" || location.pathname =="/db_v2_member" || location.pathname =="/review_your_team" || location.pathname =="/submit_requisition" || location.pathname == "/submit_requisition_2" ? "active" : "" } > Create Your Team </Link>
                    </li>
                    <li>
                        <Link to="/team_listing" className={ location.pathname =="/team_listing" || location.pathname =="/db_manage_team" ? "active" : "" } > Manage Your Team </Link>
                    </li>
                    <li>
                        <Link to="/costCalculator" className={ location.pathname =="/costCalculator" ? "active" : "" }> Cost Calculator </Link>
                    </li>
                    <li>
                        <Link to="/talentsPool" className={ location.pathname =="/talentsPool" ? "active" : "" }> Talents Pool </Link>
                    </li>
                    <li> 
                        <a href="#">Manage Meetings</a>
                    </li>
                    <li>
                        <Link to="/ask_Talent" className={ location.pathname =="/ask_Talent" ? "active" : "" }> Ask for a Talent </Link>
                    </li>
                    </ul>
                </div>
                <div className="team-ul-1st second">
                    <ul>
                    <li>
                        <a href="#">Offshore Team</a>
                    </li>
                    <li>
                        <a href="#">SLA Team</a>
                    </li>

                    <li>
                        <Link id="toggler"> Policies </Link>

                        <UncontrolledCollapse toggler="#toggler">
                            <li> <Link to="/#" className="dropdown-item"> Shared Responsibilities </Link>  </li>
                            <li> <Link to="/#" className="dropdown-item"> Team management </Link>  </li>
                            <li> <Link to="/#" className="dropdown-item"> Project management </Link>  </li>
                            <li> <Link to="/#" className="dropdown-item"> Communication </Link>  </li>
                            <li> <Link to="/#" className="dropdown-item"> Payment </Link>  </li>
                            <li> <Link to="/#" className="dropdown-item"> Contract termination </Link>  </li>
                        </UncontrolledCollapse>

                    </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>


    </>
  );
}

export default Sidebar;
