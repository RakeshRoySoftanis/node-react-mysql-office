import { BrowserRouter as Router } from "react-router-dom";
import OffshoreImg from "../assets/images/Offshore.png" 
import slaImg from "../assets/images/sla.png"
import UserPic from "../assets/images/user_icon.png"
import SearchImg from "../assets/images/search.png" 
import AskTalent from "./AskTalent";

function CostCalculator() {

    const collapsTab = async(e)=>{
        let classNames = e.target.className 
        if( classNames.includes("active") ){ 
            let el = e.target.parentElement
            el.children[0].classList.remove("active")
            el.children[1].style.display = "none"
        }else{
            let el = e.target.parentElement
            el.children[0].classList.add("active")
            el.children[1].style.display = "block"
        }
    }

    const teamType = async(e)=>{
        let classname = e.target.className
        document.getElementById("Offshore").className = "ui-state-inactive";
        document.getElementById("SLA").className = "ui-state-inactive";
        document.getElementById(classname).className = "ui-state-active";
    
        if(classname == "Offshore"){
          document.getElementById("tabs-2").style.display = "block";
          document.getElementById("tabs-3").style.display = "none";
        }else{
          document.getElementById("tabs-2").style.display = "none";
          document.getElementById("tabs-3").style.display = "block";
        }
    }
  return (
      
    <div className="right_content">
        <div className="manageCost_calculator">
            <div className="your-team-name">
            <div className="Cal_cost_overlay">
                <div className="row">
                <div className="col-lg-5">
                    <div className="Cal_cost_overlay_text">
                    <h3>
                        Total monthly cost <span>$890</span>
                    </h3>
                    <p>Your Offshore Dedicated Team</p>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="Cal_cost_overlay_text">
                    <h3>
                        SLA Support <span>$20,000</span>
                    </h3>
                    <p>+10% of the cost of dedicated team</p>
                    </div>
                </div>
                <div className="col-lg-2 padding">
                    <div className="Cal_cost_btn">
                    <a href="#" data-toggle="modal" data-target="#cost_cal">
                        Full Details
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="teamHire">
                <div className="teamHier_top">
                <h1>Cost Calculator</h1>
                </div>
                <div className="tablist" style={{ float: "left", width: "100%" }}>
                <div id="tabs">
                    <div className="teamTypeSelect">
                    <ul>
                        <label>Select Your Team Type</label>
                        <li onClick={teamType} id="Offshore" className="ui-state-active">
                            <a className="Offshore">
                                <img src={OffshoreImg} alt="images" className="Offshore" /> Offshore
                                <br /> Dedicated Team
                            </a>
                        </li>
                        <li onClick={teamType} id="SLA">
                            <a className="SLA">
                                <img src={slaImg} alt="images" className="SLA" /> SLA
                                <br /> Based Team
                            </a>
                        </li>
                    </ul>
                    </div>
                    <div className="teamSupporting">
                    <h2>
                        Supporting Team
                        <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M7 14C5.13023 14 3.37239 13.2719 2.05023 11.9498C0.728137 10.6276 0 8.86977 0 7C0 5.13023 0.728137 3.37239 2.05023 2.05023C3.37239 0.728137 5.13023 0 7 0C8.86977 0 10.6276 0.728137 11.9498 2.05023C13.2719 3.37239 14 5.13023 14 7C14 8.86977 13.2719 10.6276 11.9498 11.9498C10.6276 13.2719 8.86977 14 7 14Z"
                            fill="black"
                        />
                        <path
                            d="M8.23047 10.1445V6.04297H5.22266V6.86328H5.76953V10.1445H5.19531V10.9648H8.75V10.1445H8.23047Z"
                            fill="white"
                        />
                        <path
                            d="M7 5.22266C7.67848 5.22266 8.23047 4.67067 8.23047 3.99219C8.23047 3.31371 7.67848 2.76172 7 2.76172C6.32152 2.76172 5.76953 3.31371 5.76953 3.99219C5.76953 4.67067 6.32152 5.22266 7 5.22266Z"
                            fill="white"
                        />
                        <path
                            d="M7 5.22266C7.67848 5.22266 8.23047 4.67067 8.23047 3.99219C8.23047 3.31371 7.67848 2.76172 7 2.76172V5.22266Z"
                            fill="white"
                        />
                        <path
                            d="M8.23047 10.1445V6.04297H7V10.9648H8.75V10.1445H8.23047Z"
                            fill="white"
                        />
                        </svg>
                    </h2>
                    <div id="tabs-3" style={{ display: "none" }} >
                        <div className="teamSupporting_view row">
                        <div className="teamSupporting_view_member col-4">
                            <img src={UserPic} />
                            <p>Business Analyst</p>
                            <a href="#">What he is responsible for?</a>
                        </div>
                        <div className="teamSupporting_view_member col-4">
                            <img src={UserPic} />
                            <p>Business Analyst</p>
                            <a href="#">What he is responsible for?</a>
                        </div>
                        <div className="teamSupporting_view_member col-4">
                            <img src={UserPic} />
                            <p>Business Analyst</p>
                            <a href="#">What he is responsible for?</a>
                        </div>
                        </div>
                    </div>
                    <div id="tabs-2">
                        <div className="teamSupporting_view row">
                        <div className="teamSupporting_view_member col-4">
                            <img src={UserPic} />
                            <p>Business Analyst</p>
                            <a href="#">What he is responsible for?</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="hireTeam_list">
                <div className="hireTeam_list_top">
                <div className="row aDSearch">
                    <div className="col-md-6 selectItem">
                    <label htmlFor="Sort By">Sort By </label>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <a className="dropdown-item" href="#">
                        Action
                        </a>
                        <a className="dropdown-item" href="#">
                        Another action
                        </a>
                        <a className="dropdown-item" href="#">
                        Something else here
                        </a>
                    </div>
                    </div>
                    <div className="col-md-6 pr-0">
                    <div className="item_serch">
                        <input
                        type="text"
                        className="form-control membarSearch"
                        placeholder="Search..."
                        />
                        <img src={SearchImg} alt />
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <div className="accordion">
                    <div className="accordion__item">
                        <div className="accordion__item__header active" onClick={collapsTab}>
                        
                        Project Management
                        </div>
                        <div
                        className="accordion__item__content"
                        style={{ display: "block" }}
                        >
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion__item">
                        <div className="accordion__item__header" onClick={collapsTab}>
                        Software Architecture
                        </div>
                        <div className="accordion__item__content">
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion__item">
                        <div className="accordion__item__header" onClick={collapsTab}>
                        Full Stack Development
                        </div>
                        <div className="accordion__item__content">
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion__item">
                        <div className="accordion__item__header" onClick={collapsTab}>iOS</div>
                        <div className="accordion__item__content">
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion__item">
                        <div className="accordion__item__header" onClick={collapsTab}>Android</div>
                        <div className="accordion__item__content">
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion__item">
                        <div className="accordion__item__header" onClick={collapsTab}>
                        UI &amp; UX Design
                        </div>
                        <div className="accordion__item__content">
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion__item">
                        <div className="accordion__item__header" onClick={collapsTab}>QA &amp; Testing</div>
                        <div className="accordion__item__content">
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion__item">
                        <div className="accordion__item__header" onClick={collapsTab}>Cloud Engineering</div>
                        <div className="accordion__item__content">
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion__item">
                        <div className="accordion__item__header" onClick={collapsTab}>
                        Big Data &amp; Data Science
                        </div>
                        <div className="accordion__item__content">
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion__item">
                        <div className="accordion__item__header" onClick={collapsTab}>Database</div>
                        <div className="accordion__item__content">
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion__item">
                        <div className="accordion__item__header" onClick={collapsTab}>Security</div>
                        <div className="accordion__item__content">
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        <div className="costItem_Calculator">
                            <h3 className="user_posi">Senior UI/UX Designer</h3>
                            <h4 className="user_exp">Min. Experience 5 Years</h4>
                            <div className="addItem_area">
                            <div className="inner-add_remove">
                                <a className="btn-number">-</a>
                                <input
                                className="input-text-tvr"
                                placeholder={0}
                                onkeypress="return false"
                                type="text"
                                defaultValue
                                />
                                <a className="btn-number">+</a>
                            </div>
                            <button className="btn btn-addTeam">Add</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* id accordion end */}
                </div>
                {/* <div class="col-md-12">
                    <nav class="costCalculator_pagination" aria-label="Page navigation example">
                        <ul class="costCalculator pagination">
                        <li class="page-item"><a class=" active" href="#">1</a></li>
                        <li class="page-item"><a class="" href="#">2</a></li>
                        <li class="page-item"><a class="" href="#">3</a></li>
                        <li class="page-item"><a class="" href="#">4</a></li>
                        <li class="page-item"><a class="" href="#">5</a></li>
                        <li class="page-item"><a class="" href="#">3</a></li>
                        </ul>
                    </nav>
                    </div> */}
            </div>
            </div>
            {/* ========== DEPARTMENT PART ========== */}
        </div>
        <div className="cost_calculetor manage_cost">
            <div className="fixedSidebar">
            <h4>Cost Calculator</h4>
            <div className="cost_value">
                <div className="cost-item">
                <h3>
                    Senior UI/UX Designer
                    <span>
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx={10} cy={10} r={10} fill="#E20707" />
                        <rect
                        x="5.55566"
                        y="8.88892"
                        width="8.88889"
                        height="2.22222"
                        fill="white"
                        />
                    </svg>
                    </span>
                </h3>
                <p>2 x $1200 - $2000</p>
                </div>
                <div className="cost-item">
                <h3>
                    Server Developer
                    <span>
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx={10} cy={10} r={10} fill="#E20707" />
                        <rect
                        x="5.55566"
                        y="8.88892"
                        width="8.88889"
                        height="2.22222"
                        fill="white"
                        />
                    </svg>
                    </span>
                </h3>
                <p>2 x $1200 - $2000</p>
                </div>
                <div className="cost-item">
                <h3>
                    React Developer
                    <span>
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx={10} cy={10} r={10} fill="#E20707" />
                        <rect
                        x="5.55566"
                        y="8.88892"
                        width="8.88889"
                        height="2.22222"
                        fill="white"
                        />
                    </svg>
                    </span>
                </h3>
                <p>2 x $1200 - $2000</p>
                </div>
                <div className="cost-item">
                <h3>
                    Android Team
                    <span>
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx={10} cy={10} r={10} fill="#E20707" />
                        <rect
                        x="5.55566"
                        y="8.88892"
                        width="8.88889"
                        height="2.22222"
                        fill="white"
                        />
                    </svg>
                    </span>
                </h3>
                <p>2 x $1200 - $2000</p>
                </div>
                <div className="cost-item">
                <h3>
                    Marketing Team
                    <span>
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx={10} cy={10} r={10} fill="#E20707" />
                        <rect
                        x="5.55566"
                        y="8.88892"
                        width="8.88889"
                        height="2.22222"
                        fill="white"
                        />
                    </svg>
                    </span>
                </h3>
                <p>2 x $1200 - $2000</p>
                </div>
            </div>
            <div className="monthly_cost">
                <div className="monthly_item">
                <h4>
                    Total monthly cost <span>$890</span>
                </h4>
                <p>Your Offshore Dedicated Team</p>
                </div>
                <div className="monthly_item">
                <h4>
                    SLA Support <span>$20,000</span>
                </h4>
                <p className="fullwith">+10% of the cost of dedicated team</p>
                </div>
            </div>
            </div>
        </div>

        <AskTalent />
        
        </div>


  );
}

export default CostCalculator;