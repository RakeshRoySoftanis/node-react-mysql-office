import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom"; 
import OffshoreImg from "../assets/images/Offshore.png" 
import slaImg from "../assets/images/sla.png"
import UserPic from "../assets/images/user_icon.png"
import AskTalent from "./AskTalent";
import { ExpertiseNextArrow, ExpertisePrevArrow } from "../common/CustomSetting";
import Slider from "react-slick";
import axios from "axios";
import cogoToast from "cogo-toast";

function ReviewYourTeam() {
  const routerHistory = useHistory();

  const settingsExpertise = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <ExpertiseNextArrow />,
    prevArrow: <ExpertisePrevArrow />
  };

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

  function fetchData(filter="" , status="" , dropdownSort=""){

    var AuthUserToken = localStorage.getItem("AuthUserToken")
    axios.defaults.headers.common['AuthUserToken'] = AuthUserToken;

    axios.post('reviewYourTeam', {
      teamMembers: localStorage.getItem("TeamMemberID")
      })
      .then(function (response) {
          // const result = Math.random().toString(36).substring(2,7);
          // axios.defaults.headers.common['AuthUserToken'] = response.data.authToken;
          // localStorage.setItem('AuthUserToken', response.data.authToken );
          // window.location.href = FrontURL;

      }).catch(function (error) {
          if(error.response.data.loginStatus == false){
              routerHistory.push("login");
              localStorage.removeItem("AuthUserToken")
          }
          cogoToast.error(error.response.data.message , { position: 'top-right' } );
      });
  }

  useEffect(() => {
    fetchData()
} , []);

  return (
      
    <div className="right_content">
      <div className="progressbarDiv">
        <form id="progress_form">
          <ul id="progressbar">
            <li className="active done" id="step1">
              Add Talents
            </li>
            <li className="active" id="step2">
              Review Team
            </li>
            <li id="step3">Submit Requisition</li>
            <li id="step4">Schedule a Meeting</li>
          </ul>
          <div className="progress Review">
            <div className="progress-bar" style={{ width: "25%" }} />
          </div>
          <br />
          <fieldset>
            <input
              type="button"
              name="next-step"
              className="next-step"
              defaultValue="Next Step"
            />
          </fieldset>
          <fieldset>
            <input
              type="button"
              name="next-step"
              className="next-step"
              defaultValue="Next Step"
            />
            <input
              type="button"
              name="previous-step"
              className="previous-step"
              defaultValue="Previous Step"
            />
          </fieldset>
          <fieldset>
            <input
              type="button"
              name="next-step"
              className="next-step"
              defaultValue="Next Step"
            />
            <input
              type="button"
              name="previous-step"
              className="previous-step"
              defaultValue="Previous Step"
            />
          </fieldset>
          <fieldset>
            <div className="finish"></div>
            <input
              type="button"
              name="previous-step"
              className="previous-step"
              defaultValue="Previous Step"
            />
          </fieldset>
        </form>
      </div>
      <div className="manageTeam">
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
              <h1>Review Team</h1>
              <div className="btn_manage">
                <Link to="/submit_requisition">
                  Submit Requisition
                  <svg
                    width={11}
                    height={10}
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2338 4.79591L6.47795 1.04002C6.37074 0.932811 6.22785 0.873962 6.07549 0.873962C5.92296 0.873962 5.78015 0.932895 5.67294 1.04002L5.33194 1.38111C5.22481 1.48815 5.16579 1.63113 5.16579 1.78357C5.16579 1.93594 5.22481 2.08373 5.33194 2.19078L7.52302 4.38668H0.561848C0.247991 4.38668 0 4.63239 0 4.94633V5.42853C0 5.74247 0.247991 6.01296 0.561848 6.01296H7.54788L5.33202 8.22112C5.22489 8.32833 5.16588 8.46742 5.16588 8.61987C5.16588 8.77215 5.22489 8.91327 5.33202 9.02039L5.67302 9.36038C5.78023 9.46759 5.92304 9.52601 6.07557 9.52601C6.22794 9.52601 6.37083 9.46683 6.47804 9.35962L10.2338 5.60381C10.3413 5.49626 10.4004 5.35269 10.4 5.20007C10.4003 5.04695 10.3413 4.9033 10.2338 4.79591Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
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
                  <div id="tabs-3" style={{ display: "none" }}>
                    <div className="teamSupporting_view row">
                      <div className="teamSupporting_view_member col-4">
                        <img src={UserPic} />
                        <h3>Mahmud Himu</h3>
                        <p>Business Analyst</p>
                        <a href="#">What he is responsible for?</a>
                      </div>
                      <div className="teamSupporting_view_member col-4">
                        <img src={UserPic} />
                        <h3>Mahmud Himu</h3>
                        <p>Business Analyst</p>
                        <a href="#">What he is responsible for?</a>
                      </div>
                      <div className="teamSupporting_view_member col-4">
                        <img src={UserPic} />
                        <h3>Mahmud Himu</h3>
                        <p>Business Analyst</p>
                        <a href="#">What he is responsible for?</a>
                      </div>
                    </div>
                  </div>
                  <div id="tabs-2">
                    <div className="teamSupporting_view row">
                      <div className="teamSupporting_view_member col-4">
                        <img src={UserPic} />
                        <h3>Mahmud Himu</h3>
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
              <h2>
                
                My Team
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width={24}
                    height={24}
                    rx={6}
                    fill="#F48039"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M6.31975 16.6877C6.2007 16.9716 6.26513 17.2993 6.48284 17.517C6.70055 17.7347 7.02824 17.7991 7.31215 17.68L10.087 16.5165L7.48325 13.9128L6.31975 16.6877Z"
                    fill="#F48039"
                  />
                  <path
                    d="M17.5169 8.35927L15.6405 6.48286C15.3444 6.18678 14.8643 6.18678 14.5682 6.48286L8.1784 12.8728C8.17677 12.8744 8.17541 12.8762 8.17383 12.8778L11.122 15.826C11.1237 15.8244 11.1254 15.823 11.127 15.8215L17.5169 9.43156C17.813 9.13544 17.813 8.65538 17.5169 8.35927Z"
                    fill="#F48039"
                  />
                </svg>
              </h2>
              <ul>
                <li className="right available members">
                  <a href="#">
                    <svg
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.2083 15.1582L13.3442 12.12C14.4624 10.7908 15.075 9.11841 15.075 7.37736C15.075 3.30955 11.7655 0 7.69767 0C3.62986 0 0.320312 3.30955 0.320312 7.37736C0.320312 11.4452 3.62986 14.7547 7.69767 14.7547C9.22478 14.7547 10.68 14.2941 11.9243 13.4197L14.8213 16.4922C15.0045 16.6825 15.2508 16.7873 15.5148 16.7873C15.7646 16.7873 16.0017 16.6921 16.1816 16.5189C16.564 16.151 16.5762 15.5409 16.2083 15.1582ZM7.69767 1.92453C10.7044 1.92453 13.1505 4.3706 13.1505 7.37736C13.1505 10.3841 10.7044 12.8302 7.69767 12.8302C4.69092 12.8302 2.24484 10.3841 2.24484 7.37736C2.24484 4.3706 4.69092 1.92453 7.69767 1.92453Z"
                        fill="#BBBBBB"
                      />
                    </svg>
                    10 Members
                  </a>
                </li>
              </ul>
            </div>
            <div className="r_departments padb">
              <div className="department-profile">
                <div className="deprt-available">
                  <a href>Available</a>
                </div>
                <div className="profile-item p_width">
                  <div className="profile">
                    <img src={UserPic} alt="user" />
                  </div>
                  <div className="profile-text review_team">
                    <h3>Fahim Bashar Faisal</h3>
                    <p>Expert developer, AWS certified Architect &amp; DevOps</p>
                    <div className="text_team">
                      <p>
                        Department: <span>UIUX Designer</span>
                      </p>
                      <p>
                        Experience: <span>5 Years</span>
                      </p>
                    </div>
                  </div>
                </div>
                <p className="details pad">
                  Accumsan, dictumst dui aliquet lobortis massa. Cursus massa
                  aliquam amet quis non consectetur tempor. Purus nibh est cras sed.
                  Lobortis amet turpis mauris arcu odio mi commodo tincidunt
                  porttitor.
                </p>
                <p className="expartics">Expertise</p>
                
                <Slider {...settingsExpertise} dots={false}>
                  <div>
                      <div>HTML</div>
                  </div>
                  <div>
                      <div>CSS</div>
                  </div>
                  <div>
                      <div>HTML</div>
                  </div>
                  <div>
                      <div>CSS</div>
                  </div>
                  <div>
                      <div>HTML</div>
                  </div>
                  <div>
                      <div>CSS</div>
                  </div>
                </Slider>

                <div className="resume-part-flex">
                  <div className="view-resume">
                    <a href data-toggle="modal" data-target="#myModal2">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M10.6622 13.9822L6.01593 13.9844C6.01593 13.9844 6.01578 13.9844 6.01562 13.9844C5.58426 13.9844 5.23453 13.6349 5.23438 13.2036C5.23407 12.7721 5.5838 12.422 6.01517 12.4219L10.6615 12.4197H10.6618C11.0931 12.4197 11.4429 12.7692 11.443 13.2005C11.4433 13.632 11.0938 13.9819 10.6622 13.9822ZM9.60678 15.2713L6.01517 15.2734C5.58365 15.2737 5.23407 15.6238 5.23438 16.0551C5.23468 16.4865 5.58441 16.8359 6.01562 16.8359H6.01608L9.6077 16.8338C10.0392 16.8335 10.3888 16.4835 10.3885 16.0521C10.3882 15.6207 10.0385 15.2713 9.60724 15.2713C9.60709 15.2713 9.60693 15.2713 9.60678 15.2713ZM17.7367 15.126L13.0894 19.769C13.0893 19.769 13.0893 19.769 13.0893 19.7691L13.089 19.7693C13.0881 19.7704 13.0869 19.7713 13.0858 19.7723C13.0687 19.7891 13.051 19.8053 13.0325 19.8204C13.0278 19.8244 13.0228 19.8276 13.0179 19.8314C13.0026 19.8433 12.9872 19.8552 12.971 19.866C12.9668 19.8689 12.9622 19.8712 12.9578 19.8741C12.9407 19.8851 12.9234 19.8958 12.9054 19.9054C12.9024 19.9069 12.8993 19.9083 12.8964 19.9098C12.8767 19.9199 12.8568 19.9297 12.8362 19.9382C12.8345 19.939 12.8328 19.9394 12.8311 19.94C12.8093 19.9489 12.7872 19.957 12.7644 19.964C12.7626 19.9644 12.7608 19.9648 12.7591 19.9654C12.7365 19.9719 12.7138 19.9779 12.6906 19.9825C12.6854 19.9835 12.6801 19.984 12.6747 19.9849C12.655 19.9884 12.6352 19.9918 12.6149 19.9939C12.5891 19.9965 12.5632 19.9979 12.5371 19.9979L5.23468 20C3.5112 20 2.10938 18.5982 2.10938 16.875V3.125C2.10938 1.40182 3.5112 0 5.23438 0H14.8395C16.5625 0 17.9645 1.40182 17.9645 3.125L17.9654 10.6639C17.9654 11.0954 17.6157 11.4453 17.1841 11.4453C16.7526 11.4453 16.4029 11.0956 16.4029 10.6642L16.402 3.12515C16.402 2.26349 15.701 1.5625 14.8395 1.5625H5.23438C4.37286 1.5625 3.67188 2.26349 3.67188 3.125V16.875C3.67188 17.7365 4.37286 18.4375 5.23438 18.4375L11.7557 18.4355V16.5256C11.7557 15.0179 12.9823 13.7912 14.4901 13.7912H17.1849C17.2108 13.7912 17.2368 13.7926 17.2627 13.7952C17.2739 13.7962 17.2845 13.7984 17.2955 13.7999C17.3097 13.8019 17.3239 13.8036 17.3381 13.8065C17.3514 13.8091 17.3642 13.8127 17.3773 13.8161C17.3889 13.819 17.4007 13.8214 17.4121 13.8251C17.4252 13.829 17.4379 13.8339 17.4507 13.8385C17.4619 13.8425 17.4731 13.8461 17.4841 13.8507C17.4965 13.8559 17.5084 13.8618 17.5203 13.8676C17.5314 13.8728 17.5426 13.8777 17.5533 13.8834C17.5653 13.8899 17.5768 13.8972 17.5885 13.9043C17.5986 13.9104 17.6088 13.916 17.6187 13.9227C17.6326 13.9319 17.6459 13.9423 17.6591 13.9523C17.666 13.9577 17.6733 13.9624 17.6801 13.968C17.7203 14.001 17.7573 14.0379 17.7902 14.0782C17.7953 14.0845 17.7997 14.0912 17.8047 14.0976C17.8152 14.1115 17.8259 14.1252 17.8355 14.1397C17.8415 14.1486 17.8465 14.1579 17.8522 14.167C17.86 14.1797 17.8677 14.1922 17.8749 14.2053C17.8799 14.2149 17.8842 14.2247 17.8888 14.2343C17.8952 14.2477 17.9018 14.261 17.9076 14.2747C17.9114 14.2841 17.9144 14.2935 17.9178 14.3028C17.9233 14.3175 17.9288 14.332 17.9332 14.3469C17.9359 14.3559 17.9379 14.3651 17.9402 14.3741C17.9443 14.3898 17.9486 14.4052 17.9517 14.4211C17.9535 14.4307 17.9546 14.4405 17.9561 14.4501C17.9585 14.4655 17.9613 14.4809 17.9628 14.4966C17.9642 14.5103 17.9643 14.5239 17.9649 14.5377C17.9654 14.5493 17.9666 14.5607 17.9666 14.5726C17.9666 14.584 17.9654 14.5952 17.9649 14.6065C17.9643 14.6205 17.9642 14.6347 17.9628 14.6487C17.9613 14.6648 17.9584 14.6803 17.9559 14.696C17.9544 14.7055 17.9535 14.715 17.9517 14.7243C17.9485 14.7404 17.9442 14.756 17.9401 14.7717C17.9376 14.7806 17.9358 14.7896 17.9332 14.7984C17.9286 14.8135 17.923 14.8282 17.9176 14.8428C17.9143 14.8521 17.9112 14.8615 17.9074 14.8708C17.9018 14.8845 17.8951 14.8978 17.8886 14.9112C17.8841 14.9208 17.8798 14.9306 17.8748 14.94C17.8677 14.9533 17.8598 14.9658 17.852 14.9785C17.8465 14.9876 17.8413 14.9968 17.8355 15.0058C17.8256 15.0206 17.8146 15.0346 17.8038 15.0487C17.7991 15.0548 17.795 15.0612 17.7901 15.0673C17.7731 15.0876 17.7553 15.1073 17.7367 15.126ZM13.3182 16.5256V17.3317L15.2979 15.3537H14.4901C13.8438 15.3537 13.3182 15.8795 13.3182 16.5256ZM12.4927 10.9375H7.50732C7.11594 10.9375 6.74988 10.7634 6.50284 10.4597C6.25458 10.1547 6.15829 9.75876 6.2384 9.37317C6.46011 8.30551 7.12418 7.41577 8.0127 6.87897C7.7153 6.47217 7.53906 5.97122 7.53906 5.42969C7.53906 4.07272 8.64304 2.96875 10 2.96875C11.357 2.96875 12.4609 4.07272 12.4609 5.42969C12.4609 5.97122 12.2847 6.47217 11.9872 6.87897C12.8758 7.41577 13.5397 8.30551 13.7616 9.37317C13.8417 9.75876 13.7453 10.1547 13.4972 10.4597C13.2501 10.7634 12.8841 10.9375 12.4927 10.9375ZM9.10156 5.42969C9.10156 5.92514 9.50455 6.32812 10 6.32812C10.4955 6.32812 10.8984 5.92514 10.8984 5.42969C10.8984 4.93423 10.4955 4.53125 10 4.53125C9.50455 4.53125 9.10156 4.93423 9.10156 5.42969ZM12.1416 9.375C11.8199 8.49838 10.9743 7.89062 10.0204 7.89062H9.97955C9.02573 7.89062 8.18008 8.49838 7.85843 9.375H12.1416Z"
                            fill="#F48039"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width={20} height={20} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      View Resume
                    </a>
                  </div>
                  <div className="removeTeam">
                    <a href>- &nbsp; Remove From Your Team</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="r_departments padb">
              <div className="department-profile">
                <div className="deprt-available">
                  <a href>Available</a>
                </div>
                <div className="profile-item p_width">
                  <div className="profile">
                    <img src={UserPic} alt="user" />
                  </div>
                  <div className="profile-text review_team">
                    <h3>Fahim Bashar Faisal</h3>
                    <p>Expert developer, AWS certified Architect &amp; DevOps</p>
                    <div className="text_team">
                      <p>
                        Department: <span>UIUX Designer</span>
                      </p>
                      <p>
                        Experience: <span>5 Years</span>
                      </p>
                    </div>
                  </div>
                </div>
                <p className="details pad">
                  Accumsan, dictumst dui aliquet lobortis massa. Cursus massa
                  aliquam amet quis non consectetur tempor. Purus nibh est cras sed.
                  Lobortis amet turpis mauris arcu odio mi commodo tincidunt
                  porttitor.
                </p>
                <p className="expartics">Expertise</p>
                <Slider {...settingsExpertise} dots={false}>
                  <div>
                      <div>HTML</div>
                  </div>
                  <div>
                      <div>CSS</div>
                  </div>
                  <div>
                      <div>HTML</div>
                  </div>
                  <div>
                      <div>CSS</div>
                  </div>
                  <div>
                      <div>HTML</div>
                  </div>
                  <div>
                      <div>CSS</div>
                  </div>
                </Slider>
                <div className="resume-part-flex">
                  <div className="view-resume">
                    <a href data-toggle="modal" data-target="#myModal2">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M10.6622 13.9822L6.01593 13.9844C6.01593 13.9844 6.01578 13.9844 6.01562 13.9844C5.58426 13.9844 5.23453 13.6349 5.23438 13.2036C5.23407 12.7721 5.5838 12.422 6.01517 12.4219L10.6615 12.4197H10.6618C11.0931 12.4197 11.4429 12.7692 11.443 13.2005C11.4433 13.632 11.0938 13.9819 10.6622 13.9822ZM9.60678 15.2713L6.01517 15.2734C5.58365 15.2737 5.23407 15.6238 5.23438 16.0551C5.23468 16.4865 5.58441 16.8359 6.01562 16.8359H6.01608L9.6077 16.8338C10.0392 16.8335 10.3888 16.4835 10.3885 16.0521C10.3882 15.6207 10.0385 15.2713 9.60724 15.2713C9.60709 15.2713 9.60693 15.2713 9.60678 15.2713ZM17.7367 15.126L13.0894 19.769C13.0893 19.769 13.0893 19.769 13.0893 19.7691L13.089 19.7693C13.0881 19.7704 13.0869 19.7713 13.0858 19.7723C13.0687 19.7891 13.051 19.8053 13.0325 19.8204C13.0278 19.8244 13.0228 19.8276 13.0179 19.8314C13.0026 19.8433 12.9872 19.8552 12.971 19.866C12.9668 19.8689 12.9622 19.8712 12.9578 19.8741C12.9407 19.8851 12.9234 19.8958 12.9054 19.9054C12.9024 19.9069 12.8993 19.9083 12.8964 19.9098C12.8767 19.9199 12.8568 19.9297 12.8362 19.9382C12.8345 19.939 12.8328 19.9394 12.8311 19.94C12.8093 19.9489 12.7872 19.957 12.7644 19.964C12.7626 19.9644 12.7608 19.9648 12.7591 19.9654C12.7365 19.9719 12.7138 19.9779 12.6906 19.9825C12.6854 19.9835 12.6801 19.984 12.6747 19.9849C12.655 19.9884 12.6352 19.9918 12.6149 19.9939C12.5891 19.9965 12.5632 19.9979 12.5371 19.9979L5.23468 20C3.5112 20 2.10938 18.5982 2.10938 16.875V3.125C2.10938 1.40182 3.5112 0 5.23438 0H14.8395C16.5625 0 17.9645 1.40182 17.9645 3.125L17.9654 10.6639C17.9654 11.0954 17.6157 11.4453 17.1841 11.4453C16.7526 11.4453 16.4029 11.0956 16.4029 10.6642L16.402 3.12515C16.402 2.26349 15.701 1.5625 14.8395 1.5625H5.23438C4.37286 1.5625 3.67188 2.26349 3.67188 3.125V16.875C3.67188 17.7365 4.37286 18.4375 5.23438 18.4375L11.7557 18.4355V16.5256C11.7557 15.0179 12.9823 13.7912 14.4901 13.7912H17.1849C17.2108 13.7912 17.2368 13.7926 17.2627 13.7952C17.2739 13.7962 17.2845 13.7984 17.2955 13.7999C17.3097 13.8019 17.3239 13.8036 17.3381 13.8065C17.3514 13.8091 17.3642 13.8127 17.3773 13.8161C17.3889 13.819 17.4007 13.8214 17.4121 13.8251C17.4252 13.829 17.4379 13.8339 17.4507 13.8385C17.4619 13.8425 17.4731 13.8461 17.4841 13.8507C17.4965 13.8559 17.5084 13.8618 17.5203 13.8676C17.5314 13.8728 17.5426 13.8777 17.5533 13.8834C17.5653 13.8899 17.5768 13.8972 17.5885 13.9043C17.5986 13.9104 17.6088 13.916 17.6187 13.9227C17.6326 13.9319 17.6459 13.9423 17.6591 13.9523C17.666 13.9577 17.6733 13.9624 17.6801 13.968C17.7203 14.001 17.7573 14.0379 17.7902 14.0782C17.7953 14.0845 17.7997 14.0912 17.8047 14.0976C17.8152 14.1115 17.8259 14.1252 17.8355 14.1397C17.8415 14.1486 17.8465 14.1579 17.8522 14.167C17.86 14.1797 17.8677 14.1922 17.8749 14.2053C17.8799 14.2149 17.8842 14.2247 17.8888 14.2343C17.8952 14.2477 17.9018 14.261 17.9076 14.2747C17.9114 14.2841 17.9144 14.2935 17.9178 14.3028C17.9233 14.3175 17.9288 14.332 17.9332 14.3469C17.9359 14.3559 17.9379 14.3651 17.9402 14.3741C17.9443 14.3898 17.9486 14.4052 17.9517 14.4211C17.9535 14.4307 17.9546 14.4405 17.9561 14.4501C17.9585 14.4655 17.9613 14.4809 17.9628 14.4966C17.9642 14.5103 17.9643 14.5239 17.9649 14.5377C17.9654 14.5493 17.9666 14.5607 17.9666 14.5726C17.9666 14.584 17.9654 14.5952 17.9649 14.6065C17.9643 14.6205 17.9642 14.6347 17.9628 14.6487C17.9613 14.6648 17.9584 14.6803 17.9559 14.696C17.9544 14.7055 17.9535 14.715 17.9517 14.7243C17.9485 14.7404 17.9442 14.756 17.9401 14.7717C17.9376 14.7806 17.9358 14.7896 17.9332 14.7984C17.9286 14.8135 17.923 14.8282 17.9176 14.8428C17.9143 14.8521 17.9112 14.8615 17.9074 14.8708C17.9018 14.8845 17.8951 14.8978 17.8886 14.9112C17.8841 14.9208 17.8798 14.9306 17.8748 14.94C17.8677 14.9533 17.8598 14.9658 17.852 14.9785C17.8465 14.9876 17.8413 14.9968 17.8355 15.0058C17.8256 15.0206 17.8146 15.0346 17.8038 15.0487C17.7991 15.0548 17.795 15.0612 17.7901 15.0673C17.7731 15.0876 17.7553 15.1073 17.7367 15.126ZM13.3182 16.5256V17.3317L15.2979 15.3537H14.4901C13.8438 15.3537 13.3182 15.8795 13.3182 16.5256ZM12.4927 10.9375H7.50732C7.11594 10.9375 6.74988 10.7634 6.50284 10.4597C6.25458 10.1547 6.15829 9.75876 6.2384 9.37317C6.46011 8.30551 7.12418 7.41577 8.0127 6.87897C7.7153 6.47217 7.53906 5.97122 7.53906 5.42969C7.53906 4.07272 8.64304 2.96875 10 2.96875C11.357 2.96875 12.4609 4.07272 12.4609 5.42969C12.4609 5.97122 12.2847 6.47217 11.9872 6.87897C12.8758 7.41577 13.5397 8.30551 13.7616 9.37317C13.8417 9.75876 13.7453 10.1547 13.4972 10.4597C13.2501 10.7634 12.8841 10.9375 12.4927 10.9375ZM9.10156 5.42969C9.10156 5.92514 9.50455 6.32812 10 6.32812C10.4955 6.32812 10.8984 5.92514 10.8984 5.42969C10.8984 4.93423 10.4955 4.53125 10 4.53125C9.50455 4.53125 9.10156 4.93423 9.10156 5.42969ZM12.1416 9.375C11.8199 8.49838 10.9743 7.89062 10.0204 7.89062H9.97955C9.02573 7.89062 8.18008 8.49838 7.85843 9.375H12.1416Z"
                            fill="#F48039"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width={20} height={20} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      View Resume
                    </a>
                  </div>
                  <div className="removeTeam">
                    <a href>- &nbsp; Remove From Your Team</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="r_departments padb">
              <div className="department-profile">
                <div className="deprt-available">
                  <a href>Available</a>
                </div>
                <div className="profile-item p_width">
                  <div className="profile">
                    <img src={UserPic} alt="user" />
                  </div>
                  <div className="profile-text review_team">
                    <h3>Fahim Bashar Faisal</h3>
                    <p>Expert developer, AWS certified Architect &amp; DevOps</p>
                    <div className="text_team">
                      <p>
                        Department: <span>UIUX Designer</span>
                      </p>
                      <p>
                        Experience: <span>5 Years</span>
                      </p>
                    </div>
                  </div>
                </div>
                <p className="details pad">
                  Accumsan, dictumst dui aliquet lobortis massa. Cursus massa
                  aliquam amet quis non consectetur tempor. Purus nibh est cras sed.
                  Lobortis amet turpis mauris arcu odio mi commodo tincidunt
                  porttitor.
                </p>
                <p className="expartics">Expertise</p>
                <Slider {...settingsExpertise} dots={false}>
                  <div>
                      <div>HTML</div>
                  </div>
                  <div>
                      <div>CSS</div>
                  </div>
                  <div>
                      <div>HTML</div>
                  </div>
                  <div>
                      <div>CSS</div>
                  </div>
                  <div>
                      <div>HTML</div>
                  </div>
                  <div>
                      <div>CSS</div>
                  </div>
                </Slider>
                <div className="resume-part-flex">
                  <div className="view-resume">
                    <a href data-toggle="modal" data-target="#myModal2">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M10.6622 13.9822L6.01593 13.9844C6.01593 13.9844 6.01578 13.9844 6.01562 13.9844C5.58426 13.9844 5.23453 13.6349 5.23438 13.2036C5.23407 12.7721 5.5838 12.422 6.01517 12.4219L10.6615 12.4197H10.6618C11.0931 12.4197 11.4429 12.7692 11.443 13.2005C11.4433 13.632 11.0938 13.9819 10.6622 13.9822ZM9.60678 15.2713L6.01517 15.2734C5.58365 15.2737 5.23407 15.6238 5.23438 16.0551C5.23468 16.4865 5.58441 16.8359 6.01562 16.8359H6.01608L9.6077 16.8338C10.0392 16.8335 10.3888 16.4835 10.3885 16.0521C10.3882 15.6207 10.0385 15.2713 9.60724 15.2713C9.60709 15.2713 9.60693 15.2713 9.60678 15.2713ZM17.7367 15.126L13.0894 19.769C13.0893 19.769 13.0893 19.769 13.0893 19.7691L13.089 19.7693C13.0881 19.7704 13.0869 19.7713 13.0858 19.7723C13.0687 19.7891 13.051 19.8053 13.0325 19.8204C13.0278 19.8244 13.0228 19.8276 13.0179 19.8314C13.0026 19.8433 12.9872 19.8552 12.971 19.866C12.9668 19.8689 12.9622 19.8712 12.9578 19.8741C12.9407 19.8851 12.9234 19.8958 12.9054 19.9054C12.9024 19.9069 12.8993 19.9083 12.8964 19.9098C12.8767 19.9199 12.8568 19.9297 12.8362 19.9382C12.8345 19.939 12.8328 19.9394 12.8311 19.94C12.8093 19.9489 12.7872 19.957 12.7644 19.964C12.7626 19.9644 12.7608 19.9648 12.7591 19.9654C12.7365 19.9719 12.7138 19.9779 12.6906 19.9825C12.6854 19.9835 12.6801 19.984 12.6747 19.9849C12.655 19.9884 12.6352 19.9918 12.6149 19.9939C12.5891 19.9965 12.5632 19.9979 12.5371 19.9979L5.23468 20C3.5112 20 2.10938 18.5982 2.10938 16.875V3.125C2.10938 1.40182 3.5112 0 5.23438 0H14.8395C16.5625 0 17.9645 1.40182 17.9645 3.125L17.9654 10.6639C17.9654 11.0954 17.6157 11.4453 17.1841 11.4453C16.7526 11.4453 16.4029 11.0956 16.4029 10.6642L16.402 3.12515C16.402 2.26349 15.701 1.5625 14.8395 1.5625H5.23438C4.37286 1.5625 3.67188 2.26349 3.67188 3.125V16.875C3.67188 17.7365 4.37286 18.4375 5.23438 18.4375L11.7557 18.4355V16.5256C11.7557 15.0179 12.9823 13.7912 14.4901 13.7912H17.1849C17.2108 13.7912 17.2368 13.7926 17.2627 13.7952C17.2739 13.7962 17.2845 13.7984 17.2955 13.7999C17.3097 13.8019 17.3239 13.8036 17.3381 13.8065C17.3514 13.8091 17.3642 13.8127 17.3773 13.8161C17.3889 13.819 17.4007 13.8214 17.4121 13.8251C17.4252 13.829 17.4379 13.8339 17.4507 13.8385C17.4619 13.8425 17.4731 13.8461 17.4841 13.8507C17.4965 13.8559 17.5084 13.8618 17.5203 13.8676C17.5314 13.8728 17.5426 13.8777 17.5533 13.8834C17.5653 13.8899 17.5768 13.8972 17.5885 13.9043C17.5986 13.9104 17.6088 13.916 17.6187 13.9227C17.6326 13.9319 17.6459 13.9423 17.6591 13.9523C17.666 13.9577 17.6733 13.9624 17.6801 13.968C17.7203 14.001 17.7573 14.0379 17.7902 14.0782C17.7953 14.0845 17.7997 14.0912 17.8047 14.0976C17.8152 14.1115 17.8259 14.1252 17.8355 14.1397C17.8415 14.1486 17.8465 14.1579 17.8522 14.167C17.86 14.1797 17.8677 14.1922 17.8749 14.2053C17.8799 14.2149 17.8842 14.2247 17.8888 14.2343C17.8952 14.2477 17.9018 14.261 17.9076 14.2747C17.9114 14.2841 17.9144 14.2935 17.9178 14.3028C17.9233 14.3175 17.9288 14.332 17.9332 14.3469C17.9359 14.3559 17.9379 14.3651 17.9402 14.3741C17.9443 14.3898 17.9486 14.4052 17.9517 14.4211C17.9535 14.4307 17.9546 14.4405 17.9561 14.4501C17.9585 14.4655 17.9613 14.4809 17.9628 14.4966C17.9642 14.5103 17.9643 14.5239 17.9649 14.5377C17.9654 14.5493 17.9666 14.5607 17.9666 14.5726C17.9666 14.584 17.9654 14.5952 17.9649 14.6065C17.9643 14.6205 17.9642 14.6347 17.9628 14.6487C17.9613 14.6648 17.9584 14.6803 17.9559 14.696C17.9544 14.7055 17.9535 14.715 17.9517 14.7243C17.9485 14.7404 17.9442 14.756 17.9401 14.7717C17.9376 14.7806 17.9358 14.7896 17.9332 14.7984C17.9286 14.8135 17.923 14.8282 17.9176 14.8428C17.9143 14.8521 17.9112 14.8615 17.9074 14.8708C17.9018 14.8845 17.8951 14.8978 17.8886 14.9112C17.8841 14.9208 17.8798 14.9306 17.8748 14.94C17.8677 14.9533 17.8598 14.9658 17.852 14.9785C17.8465 14.9876 17.8413 14.9968 17.8355 15.0058C17.8256 15.0206 17.8146 15.0346 17.8038 15.0487C17.7991 15.0548 17.795 15.0612 17.7901 15.0673C17.7731 15.0876 17.7553 15.1073 17.7367 15.126ZM13.3182 16.5256V17.3317L15.2979 15.3537H14.4901C13.8438 15.3537 13.3182 15.8795 13.3182 16.5256ZM12.4927 10.9375H7.50732C7.11594 10.9375 6.74988 10.7634 6.50284 10.4597C6.25458 10.1547 6.15829 9.75876 6.2384 9.37317C6.46011 8.30551 7.12418 7.41577 8.0127 6.87897C7.7153 6.47217 7.53906 5.97122 7.53906 5.42969C7.53906 4.07272 8.64304 2.96875 10 2.96875C11.357 2.96875 12.4609 4.07272 12.4609 5.42969C12.4609 5.97122 12.2847 6.47217 11.9872 6.87897C12.8758 7.41577 13.5397 8.30551 13.7616 9.37317C13.8417 9.75876 13.7453 10.1547 13.4972 10.4597C13.2501 10.7634 12.8841 10.9375 12.4927 10.9375ZM9.10156 5.42969C9.10156 5.92514 9.50455 6.32812 10 6.32812C10.4955 6.32812 10.8984 5.92514 10.8984 5.42969C10.8984 4.93423 10.4955 4.53125 10 4.53125C9.50455 4.53125 9.10156 4.93423 9.10156 5.42969ZM12.1416 9.375C11.8199 8.49838 10.9743 7.89062 10.0204 7.89062H9.97955C9.02573 7.89062 8.18008 8.49838 7.85843 9.375H12.1416Z"
                            fill="#F48039"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width={20} height={20} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      View Resume
                    </a>
                  </div>
                  <div className="removeTeam">
                    <a href>- &nbsp; Remove From Your Team</a>
                  </div>
                </div>
              </div>
            </div>
            {/* ADD MEMBER */}
            <div className="db_add_Member">
              <p className="add_member_p">Want to add more members?</p>
              <a className="add_member_a" href="#">
                <svg
                  width={13}
                  height={13}
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.375 5.4375H7.4375V1.5C7.4375 1.03516 7.02734 0.625 6.5625 0.625H5.6875C5.19531 0.625 4.8125 1.03516 4.8125 1.5V5.4375H0.875C0.382812 5.4375 0 5.84766 0 6.3125V7.1875C0 7.67969 0.382812 8.0625 0.875 8.0625H4.8125V12C4.8125 12.4922 5.19531 12.875 5.6875 12.875H6.5625C7.02734 12.875 7.4375 12.4922 7.4375 12V8.0625H11.375C11.8398 8.0625 12.25 7.67969 12.25 7.1875V6.3125C12.25 5.84766 11.8398 5.4375 11.375 5.4375Z"
                    fill="#F48039"
                  />
                </svg>
                Add More Member
              </a>
            </div>
          </div>
          {/* ========== DEPARTMENT PART ========== */}
        </div>
      </div>
      <div className="cost_calculetor">
        <div className="fixedSidebar">
          <h4>Cost Calculator</h4>
          <div className="cost_value">
            <div className="cost-item">
              <h3>
                Fahim Bashar Faisal <span>$1200</span>
              </h3>
              <p>UIUX Designer</p>
            </div>
            <div className="cost-item">
              <h3>
                Alena Rhiel Madsen <span>$1500</span>
              </h3>
              <p>UIUX Designer</p>
            </div>
            <div className="cost-item">
              <h3>
                Cooper Siphron <span>$1800</span>
              </h3>
              <p>UIUX Designer</p>
            </div>
            <div className="cost-item">
              <h3>
                Roger Workman <span>$890</span>
              </h3>
              <p>UIUX Designer</p>
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

export default ReviewYourTeam;