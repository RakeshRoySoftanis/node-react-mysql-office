import SearchImg from "../assets/images/search.png" 
import UserPic from "../assets/images/user_icon.png"
import Slider from "react-slick";
import { ExpertiseNextArrow, ExpertisePrevArrow, SampleNextArrow, SamplePrevArrow } from "../common/CustomSetting";
import { Link } from "react-router-dom";

function ReviewTeamMember() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const settingsExpertise = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <ExpertiseNextArrow />,
        prevArrow: <ExpertisePrevArrow />
    };
    
  return (
    <div className="right_content">
        <div className="progressbarDiv">
            <form id="progress_form">
            <ul id="progressbar">
                <li className="active" id="step1">
                Add Talents
                </li>
                <li id="step2">Review Team</li>
                <li id="step3">Submit Requisition</li>
                <li id="step4">Schedule a Meeting</li>
            </ul>
            <div className="progress">
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
        <div className="your-team-name">
            <div className="team_name">
            <div className="name-text">
                <h1>
                Your Team Name
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
                </h1>
            </div>
            <div className="btn_manage">
                <Link to="/review_your_team" >
                    Review Your Team
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
            {/* no_member_box */}
            <div className="no_member_box">
            <div className="no_member_box-item">
                <div className="member_box text-center slick-slider">
                <Slider {...settings} dots={false}>
                    <div className="slider-item">
                        <img src={UserPic} alt="User Pic" />
                        <h3>Fahim Bashar Faisal</h3>
                        <p>UIUX Designer</p>
                        <div className="slider-overlay">
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
                        </div>
                    </div>

                    <div className="slider-item">
                        <img src={UserPic} alt="User Pic" />
                        <h3>Fahim Bashar Faisal</h3>
                        <p>UIUX Designer</p>
                        <div className="slider-overlay">
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
                        </div>
                    </div>
                    <div className="slider-item">
                        <img src={UserPic} alt="User Pic" />
                        <h3>Fahim Bashar Faisal</h3>
                        <p>UIUX Designer</p>
                        <div className="slider-overlay">
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
                        </div>
                    </div>
                    
                    <div className="slider-item">
                        <img src={UserPic} alt="User Pic" />
                        <h3>Fahim Bashar Faisal</h3>
                        <p>UIUX Designer</p>
                        <div className="slider-overlay">
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
                        </div>
                    </div>
                    
                    <div className="slider-item">
                        <img src={UserPic} alt="User Pic" />
                        <h3>Fahim Bashar Faisal</h3>
                        <p>UIUX Designer</p>
                        <div className="slider-overlay">
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
                        </div>
                    </div>
                    
                    <div className="slider-item">
                        <img src={UserPic} alt="User Pic" />
                        <h3>Fahim Bashar Faisal</h3>
                        <p>UIUX Designer</p>
                        <div className="slider-overlay">
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
                        </div>
                    </div>

                    <div className="slider-item">
                        <img src={UserPic} alt="User Pic" />
                        <h3>Fahim Bashar Faisal</h3>
                        <p>UIUX Designer</p>
                        <div className="slider-overlay">
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
                        </div>
                    </div>

                    <div className="slider-item">
                        <img src={UserPic} alt="User Pic" />
                        <h3>Fahim Bashar Faisal 2</h3>
                        <p>UIUX Designer</p>
                        <div className="slider-overlay">
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
                        </div>
                    </div>
                </Slider>
                </div>
            </div>
            <div className="no_member_box_cost">
                <p>
                Estimated <br /> Monthly Cost
                </p>
                <span>$8,450</span>
            </div>
            </div>
            {/* ========== DEPARTMENT PART ========== */}
            <div className="r_departments">
            <div className="col-lg-12">
                <div className="r-department-part">
                <div className="depart-ul">
                    <ul>
                    <li>
                        <a href="#">Sort by</a>
                    </li>
                    <li className="dropdown">
                        <a
                        href="#"
                        className="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        <svg
                            width={13}
                            height={8}
                            viewBox="0 0 13 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M5.66016 7.19531C5.90625 7.44141 6.31641 7.44141 6.5625 7.19531L11.8945 1.89062C12.1406 1.61719 12.1406 1.20703 11.8945 0.960938L11.2656 0.332031C11.0195 0.0859375 10.6094 0.0859375 10.3359 0.332031L6.125 4.54297L1.88672 0.332031C1.61328 0.0859375 1.20312 0.0859375 0.957031 0.332031L0.328125 0.960938C0.0820312 1.20703 0.0820312 1.61719 0.328125 1.89062L5.66016 7.19531Z"
                            fill="#BBBBBB"
                            />
                        </svg>
                        Departments
                        </a>
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
                    </li>
                    <li className="right available">
                        <a href="#">Available</a>
                    </li>
                    <li className="right">
                        <a href="#">All</a>
                    </li>
                    </ul>
                    <div className="item_serch">
                    <input
                        type="text"
                        className="form-control membarSearch"
                        placeholder="Search..."
                    />
                    <img  src={SearchImg} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="r_number_u">
                        <div className="r_number_text">
                        <p>Showing 1-10 of 100</p>
                        </div>
                        <nav
                        className="costCalculator_pagination"
                        aria-label="Page navigation example"
                        >
                        <ul className="costCalculator pagination">
                            <li className="page-item">
                            <a className=" active" href="#">
                                1
                            </a>
                            </li>
                            <li className="page-item">
                            <a className href="#">
                                2
                            </a>
                            </li>
                            <li className="page-item">
                            <a className href="#">
                                3
                            </a>
                            </li>
                            <li className="page-item">
                            <a className href="#">
                                4
                            </a>
                            </li>
                            <li className="page-item">
                            <a className href="#">
                                5
                            </a>
                            </li>
                            <li className="page-item">
                            <a className href="#">
                                6
                            </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    </div>
                    {/* Available Part */}
                    <div className="col-lg-6 pl-0 pr_padding">
                    <div className="department-profile">
                        <div className="deprt-available">
                        <a href>Available</a>
                        </div>
                        <div className="profile-item">
                        <div className="profile">
                            <img src={UserPic} alt="user" />
                        </div>
                        <div className="profile-text">
                            <h3>Fahim Bashar Faisal</h3>
                            <p>
                            Expert developer, AWS certified Architect &amp; DevOps
                            </p>
                        </div>
                        </div>
                        <div className="profile-text-dp">
                        <p>
                            Department: <span>UIUX Designer</span>
                        </p>
                        <p>
                            Experience: <span>5 Years</span>
                        </p>
                        </div>
                        <p className="details">
                        Accumsan, dictumst dui aliquet lobortis massa. Cursus massa
                        aliquam amet quis non consectetur tempor. Purus nibh est cras
                        sed. Lobortis amet turpis mauris arcu odio mi commodo
                        tincidunt porttitor.
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
                                width={16}
                                height={20}
                                viewBox="0 0 16 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M8.66223 13.9822L4.01593 13.9844C4.01593 13.9844 4.01578 13.9844 4.01562 13.9844C3.58426 13.9844 3.23453 13.6349 3.23438 13.2036C3.23407 12.7721 3.5838 12.422 4.01517 12.4219L8.66147 12.4197H8.66177C9.09314 12.4197 9.44287 12.7692 9.44302 13.2005C9.44333 13.632 9.09375 13.9819 8.66223 13.9822ZM7.60678 15.2713L4.01517 15.2734C3.58365 15.2737 3.23407 15.6238 3.23438 16.0551C3.23468 16.4865 3.58441 16.8359 4.01562 16.8359H4.01608L7.6077 16.8338C8.03922 16.8335 8.38879 16.4835 8.38849 16.0521C8.38818 15.6207 8.03845 15.2713 7.60724 15.2713C7.60709 15.2713 7.60693 15.2713 7.60678 15.2713ZM15.7367 15.126L11.0894 19.769C11.0893 19.769 11.0893 19.769 11.0893 19.7691L11.089 19.7693C11.0881 19.7704 11.0869 19.7713 11.0858 19.7723C11.0687 19.7891 11.051 19.8053 11.0325 19.8204C11.0278 19.8244 11.0228 19.8276 11.0179 19.8314C11.0026 19.8433 10.9872 19.8552 10.971 19.866C10.9668 19.8689 10.9622 19.8712 10.9578 19.8741C10.9407 19.8851 10.9234 19.8958 10.9054 19.9054C10.9024 19.9069 10.8993 19.9083 10.8964 19.9098C10.8767 19.9199 10.8568 19.9297 10.8362 19.9382C10.8345 19.939 10.8328 19.9394 10.8311 19.94C10.8093 19.9489 10.7872 19.957 10.7644 19.964C10.7626 19.9644 10.7608 19.9648 10.7591 19.9654C10.7365 19.9719 10.7138 19.9779 10.6906 19.9825C10.6854 19.9835 10.6801 19.984 10.6747 19.9849C10.655 19.9884 10.6352 19.9918 10.6149 19.9939C10.5891 19.9965 10.5632 19.9979 10.5371 19.9979L3.23468 20C1.5112 20 0.109375 18.5982 0.109375 16.875V3.125C0.109375 1.40182 1.5112 0 3.23438 0H12.8395C14.5625 0 15.9645 1.40182 15.9645 3.125L15.9654 10.6639C15.9654 11.0954 15.6157 11.4453 15.1841 11.4453C14.7526 11.4453 14.4029 11.0956 14.4029 10.6642L14.402 3.12515C14.402 2.26349 13.701 1.5625 12.8395 1.5625H3.23438C2.37286 1.5625 1.67188 2.26349 1.67188 3.125V16.875C1.67188 17.7365 2.37286 18.4375 3.23438 18.4375L9.75568 18.4355V16.5256C9.75568 15.0179 10.9823 13.7912 12.4901 13.7912H15.1849C15.2108 13.7912 15.2368 13.7926 15.2627 13.7952C15.2739 13.7962 15.2845 13.7984 15.2955 13.7999C15.3097 13.8019 15.3239 13.8036 15.3381 13.8065C15.3514 13.8091 15.3642 13.8127 15.3773 13.8161C15.3889 13.819 15.4007 13.8214 15.4121 13.8251C15.4252 13.829 15.4379 13.8339 15.4507 13.8385C15.4619 13.8425 15.4731 13.8461 15.4841 13.8507C15.4965 13.8559 15.5084 13.8618 15.5203 13.8676C15.5314 13.8728 15.5426 13.8777 15.5533 13.8834C15.5653 13.8899 15.5768 13.8972 15.5885 13.9043C15.5986 13.9104 15.6088 13.916 15.6187 13.9227C15.6326 13.9319 15.6459 13.9423 15.6591 13.9523C15.666 13.9577 15.6733 13.9624 15.6801 13.968C15.7203 14.001 15.7573 14.0379 15.7902 14.0782C15.7953 14.0845 15.7997 14.0912 15.8047 14.0976C15.8152 14.1115 15.8259 14.1252 15.8355 14.1397C15.8415 14.1486 15.8465 14.1579 15.8522 14.167C15.86 14.1797 15.8677 14.1922 15.8749 14.2053C15.8799 14.2149 15.8842 14.2247 15.8888 14.2343C15.8952 14.2477 15.9018 14.261 15.9076 14.2747C15.9114 14.2841 15.9144 14.2935 15.9178 14.3028C15.9233 14.3175 15.9288 14.332 15.9332 14.3469C15.9359 14.3559 15.9379 14.3651 15.9402 14.3741C15.9443 14.3898 15.9486 14.4052 15.9517 14.4211C15.9535 14.4307 15.9546 14.4405 15.9561 14.4501C15.9585 14.4655 15.9613 14.4809 15.9628 14.4966C15.9642 14.5103 15.9643 14.5239 15.9649 14.5377C15.9654 14.5493 15.9666 14.5607 15.9666 14.5726C15.9666 14.584 15.9654 14.5952 15.9649 14.6065C15.9643 14.6205 15.9642 14.6347 15.9628 14.6487C15.9613 14.6648 15.9584 14.6803 15.9559 14.696C15.9544 14.7055 15.9535 14.715 15.9517 14.7243C15.9485 14.7404 15.9442 14.756 15.9401 14.7717C15.9376 14.7806 15.9358 14.7896 15.9332 14.7984C15.9286 14.8135 15.923 14.8282 15.9176 14.8428C15.9143 14.8521 15.9112 14.8615 15.9074 14.8708C15.9018 14.8845 15.8951 14.8978 15.8886 14.9112C15.8841 14.9208 15.8798 14.9306 15.8748 14.94C15.8677 14.9533 15.8598 14.9658 15.852 14.9785C15.8465 14.9876 15.8413 14.9968 15.8355 15.0058C15.8256 15.0206 15.8146 15.0346 15.8038 15.0487C15.7991 15.0548 15.795 15.0612 15.7901 15.0673C15.7731 15.0876 15.7553 15.1073 15.7367 15.126ZM11.3182 16.5256V17.3317L13.2979 15.3537H12.4901C11.8438 15.3537 11.3182 15.8795 11.3182 16.5256ZM10.4927 10.9375H5.50732C5.11594 10.9375 4.74988 10.7634 4.50284 10.4597C4.25458 10.1547 4.15829 9.75876 4.2384 9.37317C4.46011 8.30551 5.12418 7.41577 6.0127 6.87897C5.7153 6.47217 5.53906 5.97122 5.53906 5.42969C5.53906 4.07272 6.64304 2.96875 8 2.96875C9.35696 2.96875 10.4609 4.07272 10.4609 5.42969C10.4609 5.97122 10.2847 6.47217 9.98715 6.87897C10.8758 7.41577 11.5397 8.30551 11.7616 9.37317C11.8417 9.75876 11.7453 10.1547 11.4972 10.4597C11.2501 10.7634 10.8841 10.9375 10.4927 10.9375ZM7.10156 5.42969C7.10156 5.92514 7.50455 6.32812 8 6.32812C8.49545 6.32812 8.89844 5.92514 8.89844 5.42969C8.89844 4.93423 8.49545 4.53125 8 4.53125C7.50455 4.53125 7.10156 4.93423 7.10156 5.42969ZM10.1416 9.375C9.81992 8.49838 8.97427 7.89062 8.02045 7.89062H7.97955C7.02573 7.89062 6.18008 8.49838 5.85843 9.375H10.1416Z"
                                fill="white"
                                />
                            </svg>
                            View Resume
                            </a>
                        </div>
                        <div className="add-team">
                            <a href>
                            <svg
                                width={13}
                                height={13}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M11.375 5.4375H7.4375V1.5C7.4375 1.03516 7.02734 0.625 6.5625 0.625H5.6875C5.19531 0.625 4.8125 1.03516 4.8125 1.5V5.4375H0.875C0.382812 5.4375 0 5.84766 0 6.3125V7.1875C0 7.67969 0.382812 8.0625 0.875 8.0625H4.8125V12C4.8125 12.4922 5.19531 12.875 5.6875 12.875H6.5625C7.02734 12.875 7.4375 12.4922 7.4375 12V8.0625H11.375C11.8398 8.0625 12.25 7.67969 12.25 7.1875V6.3125C12.25 5.84766 11.8398 5.4375 11.375 5.4375Z"
                                fill="white"
                                />
                            </svg>
                            Add in Team
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Engaged Part */}
                    <div className="col-lg-6 pr-0 pl_padding">
                    <div className="department-profile engaged">
                        <div className="deprt-available">
                        <a href>Engaged</a>
                        </div>
                        <div className="profile-item">
                        <div className="profile">
                            <img src={UserPic} alt="user" />
                        </div>
                        <div className="profile-text">
                            <h3>Fahim Bashar Faisal</h3>
                            <p>
                            Expert developer, AWS certified Architect &amp; DevOps
                            </p>
                        </div>
                        </div>
                        <div className="profile-text-dp">
                        <p>
                            Department: <span>UIUX Designer</span>
                        </p>
                        <p>
                            Experience: <span>5 Years</span>
                        </p>
                        </div>
                        <p className="details">
                        Accumsan, dictumst dui aliquet lobortis massa. Cursus massa
                        aliquam amet quis non consectetur tempor. Purus nibh est cras
                        sed. Lobortis amet turpis mauris arcu odio mi commodo
                        tincidunt porttitor.
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
                                width={16}
                                height={20}
                                viewBox="0 0 16 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M8.66223 13.9822L4.01593 13.9844C4.01593 13.9844 4.01578 13.9844 4.01562 13.9844C3.58426 13.9844 3.23453 13.6349 3.23438 13.2036C3.23407 12.7721 3.5838 12.422 4.01517 12.4219L8.66147 12.4197H8.66177C9.09314 12.4197 9.44287 12.7692 9.44302 13.2005C9.44333 13.632 9.09375 13.9819 8.66223 13.9822ZM7.60678 15.2713L4.01517 15.2734C3.58365 15.2737 3.23407 15.6238 3.23438 16.0551C3.23468 16.4865 3.58441 16.8359 4.01562 16.8359H4.01608L7.6077 16.8338C8.03922 16.8335 8.38879 16.4835 8.38849 16.0521C8.38818 15.6207 8.03845 15.2713 7.60724 15.2713C7.60709 15.2713 7.60693 15.2713 7.60678 15.2713ZM15.7367 15.126L11.0894 19.769C11.0893 19.769 11.0893 19.769 11.0893 19.7691L11.089 19.7693C11.0881 19.7704 11.0869 19.7713 11.0858 19.7723C11.0687 19.7891 11.051 19.8053 11.0325 19.8204C11.0278 19.8244 11.0228 19.8276 11.0179 19.8314C11.0026 19.8433 10.9872 19.8552 10.971 19.866C10.9668 19.8689 10.9622 19.8712 10.9578 19.8741C10.9407 19.8851 10.9234 19.8958 10.9054 19.9054C10.9024 19.9069 10.8993 19.9083 10.8964 19.9098C10.8767 19.9199 10.8568 19.9297 10.8362 19.9382C10.8345 19.939 10.8328 19.9394 10.8311 19.94C10.8093 19.9489 10.7872 19.957 10.7644 19.964C10.7626 19.9644 10.7608 19.9648 10.7591 19.9654C10.7365 19.9719 10.7138 19.9779 10.6906 19.9825C10.6854 19.9835 10.6801 19.984 10.6747 19.9849C10.655 19.9884 10.6352 19.9918 10.6149 19.9939C10.5891 19.9965 10.5632 19.9979 10.5371 19.9979L3.23468 20C1.5112 20 0.109375 18.5982 0.109375 16.875V3.125C0.109375 1.40182 1.5112 0 3.23438 0H12.8395C14.5625 0 15.9645 1.40182 15.9645 3.125L15.9654 10.6639C15.9654 11.0954 15.6157 11.4453 15.1841 11.4453C14.7526 11.4453 14.4029 11.0956 14.4029 10.6642L14.402 3.12515C14.402 2.26349 13.701 1.5625 12.8395 1.5625H3.23438C2.37286 1.5625 1.67188 2.26349 1.67188 3.125V16.875C1.67188 17.7365 2.37286 18.4375 3.23438 18.4375L9.75568 18.4355V16.5256C9.75568 15.0179 10.9823 13.7912 12.4901 13.7912H15.1849C15.2108 13.7912 15.2368 13.7926 15.2627 13.7952C15.2739 13.7962 15.2845 13.7984 15.2955 13.7999C15.3097 13.8019 15.3239 13.8036 15.3381 13.8065C15.3514 13.8091 15.3642 13.8127 15.3773 13.8161C15.3889 13.819 15.4007 13.8214 15.4121 13.8251C15.4252 13.829 15.4379 13.8339 15.4507 13.8385C15.4619 13.8425 15.4731 13.8461 15.4841 13.8507C15.4965 13.8559 15.5084 13.8618 15.5203 13.8676C15.5314 13.8728 15.5426 13.8777 15.5533 13.8834C15.5653 13.8899 15.5768 13.8972 15.5885 13.9043C15.5986 13.9104 15.6088 13.916 15.6187 13.9227C15.6326 13.9319 15.6459 13.9423 15.6591 13.9523C15.666 13.9577 15.6733 13.9624 15.6801 13.968C15.7203 14.001 15.7573 14.0379 15.7902 14.0782C15.7953 14.0845 15.7997 14.0912 15.8047 14.0976C15.8152 14.1115 15.8259 14.1252 15.8355 14.1397C15.8415 14.1486 15.8465 14.1579 15.8522 14.167C15.86 14.1797 15.8677 14.1922 15.8749 14.2053C15.8799 14.2149 15.8842 14.2247 15.8888 14.2343C15.8952 14.2477 15.9018 14.261 15.9076 14.2747C15.9114 14.2841 15.9144 14.2935 15.9178 14.3028C15.9233 14.3175 15.9288 14.332 15.9332 14.3469C15.9359 14.3559 15.9379 14.3651 15.9402 14.3741C15.9443 14.3898 15.9486 14.4052 15.9517 14.4211C15.9535 14.4307 15.9546 14.4405 15.9561 14.4501C15.9585 14.4655 15.9613 14.4809 15.9628 14.4966C15.9642 14.5103 15.9643 14.5239 15.9649 14.5377C15.9654 14.5493 15.9666 14.5607 15.9666 14.5726C15.9666 14.584 15.9654 14.5952 15.9649 14.6065C15.9643 14.6205 15.9642 14.6347 15.9628 14.6487C15.9613 14.6648 15.9584 14.6803 15.9559 14.696C15.9544 14.7055 15.9535 14.715 15.9517 14.7243C15.9485 14.7404 15.9442 14.756 15.9401 14.7717C15.9376 14.7806 15.9358 14.7896 15.9332 14.7984C15.9286 14.8135 15.923 14.8282 15.9176 14.8428C15.9143 14.8521 15.9112 14.8615 15.9074 14.8708C15.9018 14.8845 15.8951 14.8978 15.8886 14.9112C15.8841 14.9208 15.8798 14.9306 15.8748 14.94C15.8677 14.9533 15.8598 14.9658 15.852 14.9785C15.8465 14.9876 15.8413 14.9968 15.8355 15.0058C15.8256 15.0206 15.8146 15.0346 15.8038 15.0487C15.7991 15.0548 15.795 15.0612 15.7901 15.0673C15.7731 15.0876 15.7553 15.1073 15.7367 15.126ZM11.3182 16.5256V17.3317L13.2979 15.3537H12.4901C11.8438 15.3537 11.3182 15.8795 11.3182 16.5256ZM10.4927 10.9375H5.50732C5.11594 10.9375 4.74988 10.7634 4.50284 10.4597C4.25458 10.1547 4.15829 9.75876 4.2384 9.37317C4.46011 8.30551 5.12418 7.41577 6.0127 6.87897C5.7153 6.47217 5.53906 5.97122 5.53906 5.42969C5.53906 4.07272 6.64304 2.96875 8 2.96875C9.35696 2.96875 10.4609 4.07272 10.4609 5.42969C10.4609 5.97122 10.2847 6.47217 9.98715 6.87897C10.8758 7.41577 11.5397 8.30551 11.7616 9.37317C11.8417 9.75876 11.7453 10.1547 11.4972 10.4597C11.2501 10.7634 10.8841 10.9375 10.4927 10.9375ZM7.10156 5.42969C7.10156 5.92514 7.50455 6.32812 8 6.32812C8.49545 6.32812 8.89844 5.92514 8.89844 5.42969C8.89844 4.93423 8.49545 4.53125 8 4.53125C7.50455 4.53125 7.10156 4.93423 7.10156 5.42969ZM10.1416 9.375C9.81992 8.49838 8.97427 7.89062 8.02045 7.89062H7.97955C7.02573 7.89062 6.18008 8.49838 5.85843 9.375H10.1416Z"
                                fill="white"
                                />
                            </svg>
                            View Resume
                            </a>
                        </div>
                        <div className="add-team">
                            <a href>
                            <svg
                                width={13}
                                height={13}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M11.375 5.4375H7.4375V1.5C7.4375 1.03516 7.02734 0.625 6.5625 0.625H5.6875C5.19531 0.625 4.8125 1.03516 4.8125 1.5V5.4375H0.875C0.382812 5.4375 0 5.84766 0 6.3125V7.1875C0 7.67969 0.382812 8.0625 0.875 8.0625H4.8125V12C4.8125 12.4922 5.19531 12.875 5.6875 12.875H6.5625C7.02734 12.875 7.4375 12.4922 7.4375 12V8.0625H11.375C11.8398 8.0625 12.25 7.67969 12.25 7.1875V6.3125C12.25 5.84766 11.8398 5.4375 11.375 5.4375Z"
                                fill="white"
                                />
                            </svg>
                            Add in Team
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Available Part */}
                    <div className="col-lg-6 pl-0 pr_padding">
                    <div className="department-profile">
                        <div className="deprt-available">
                        <a href>Available</a>
                        </div>
                        <div className="profile-item">
                        <div className="profile">
                            <img src={UserPic} alt="user" />
                        </div>
                        <div className="profile-text">
                            <h3>Fahim Bashar Faisal</h3>
                            <p>
                            Expert developer, AWS certified Architect &amp; DevOps
                            </p>
                        </div>
                        </div>
                        <div className="profile-text-dp">
                        <p>
                            Department: <span>UIUX Designer</span>
                        </p>
                        <p>
                            Experience: <span>5 Years</span>
                        </p>
                        </div>
                        <p className="details">
                        Accumsan, dictumst dui aliquet lobortis massa. Cursus massa
                        aliquam amet quis non consectetur tempor. Purus nibh est cras
                        sed. Lobortis amet turpis mauris arcu odio mi commodo
                        tincidunt porttitor.
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
                                width={16}
                                height={20}
                                viewBox="0 0 16 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M8.66223 13.9822L4.01593 13.9844C4.01593 13.9844 4.01578 13.9844 4.01562 13.9844C3.58426 13.9844 3.23453 13.6349 3.23438 13.2036C3.23407 12.7721 3.5838 12.422 4.01517 12.4219L8.66147 12.4197H8.66177C9.09314 12.4197 9.44287 12.7692 9.44302 13.2005C9.44333 13.632 9.09375 13.9819 8.66223 13.9822ZM7.60678 15.2713L4.01517 15.2734C3.58365 15.2737 3.23407 15.6238 3.23438 16.0551C3.23468 16.4865 3.58441 16.8359 4.01562 16.8359H4.01608L7.6077 16.8338C8.03922 16.8335 8.38879 16.4835 8.38849 16.0521C8.38818 15.6207 8.03845 15.2713 7.60724 15.2713C7.60709 15.2713 7.60693 15.2713 7.60678 15.2713ZM15.7367 15.126L11.0894 19.769C11.0893 19.769 11.0893 19.769 11.0893 19.7691L11.089 19.7693C11.0881 19.7704 11.0869 19.7713 11.0858 19.7723C11.0687 19.7891 11.051 19.8053 11.0325 19.8204C11.0278 19.8244 11.0228 19.8276 11.0179 19.8314C11.0026 19.8433 10.9872 19.8552 10.971 19.866C10.9668 19.8689 10.9622 19.8712 10.9578 19.8741C10.9407 19.8851 10.9234 19.8958 10.9054 19.9054C10.9024 19.9069 10.8993 19.9083 10.8964 19.9098C10.8767 19.9199 10.8568 19.9297 10.8362 19.9382C10.8345 19.939 10.8328 19.9394 10.8311 19.94C10.8093 19.9489 10.7872 19.957 10.7644 19.964C10.7626 19.9644 10.7608 19.9648 10.7591 19.9654C10.7365 19.9719 10.7138 19.9779 10.6906 19.9825C10.6854 19.9835 10.6801 19.984 10.6747 19.9849C10.655 19.9884 10.6352 19.9918 10.6149 19.9939C10.5891 19.9965 10.5632 19.9979 10.5371 19.9979L3.23468 20C1.5112 20 0.109375 18.5982 0.109375 16.875V3.125C0.109375 1.40182 1.5112 0 3.23438 0H12.8395C14.5625 0 15.9645 1.40182 15.9645 3.125L15.9654 10.6639C15.9654 11.0954 15.6157 11.4453 15.1841 11.4453C14.7526 11.4453 14.4029 11.0956 14.4029 10.6642L14.402 3.12515C14.402 2.26349 13.701 1.5625 12.8395 1.5625H3.23438C2.37286 1.5625 1.67188 2.26349 1.67188 3.125V16.875C1.67188 17.7365 2.37286 18.4375 3.23438 18.4375L9.75568 18.4355V16.5256C9.75568 15.0179 10.9823 13.7912 12.4901 13.7912H15.1849C15.2108 13.7912 15.2368 13.7926 15.2627 13.7952C15.2739 13.7962 15.2845 13.7984 15.2955 13.7999C15.3097 13.8019 15.3239 13.8036 15.3381 13.8065C15.3514 13.8091 15.3642 13.8127 15.3773 13.8161C15.3889 13.819 15.4007 13.8214 15.4121 13.8251C15.4252 13.829 15.4379 13.8339 15.4507 13.8385C15.4619 13.8425 15.4731 13.8461 15.4841 13.8507C15.4965 13.8559 15.5084 13.8618 15.5203 13.8676C15.5314 13.8728 15.5426 13.8777 15.5533 13.8834C15.5653 13.8899 15.5768 13.8972 15.5885 13.9043C15.5986 13.9104 15.6088 13.916 15.6187 13.9227C15.6326 13.9319 15.6459 13.9423 15.6591 13.9523C15.666 13.9577 15.6733 13.9624 15.6801 13.968C15.7203 14.001 15.7573 14.0379 15.7902 14.0782C15.7953 14.0845 15.7997 14.0912 15.8047 14.0976C15.8152 14.1115 15.8259 14.1252 15.8355 14.1397C15.8415 14.1486 15.8465 14.1579 15.8522 14.167C15.86 14.1797 15.8677 14.1922 15.8749 14.2053C15.8799 14.2149 15.8842 14.2247 15.8888 14.2343C15.8952 14.2477 15.9018 14.261 15.9076 14.2747C15.9114 14.2841 15.9144 14.2935 15.9178 14.3028C15.9233 14.3175 15.9288 14.332 15.9332 14.3469C15.9359 14.3559 15.9379 14.3651 15.9402 14.3741C15.9443 14.3898 15.9486 14.4052 15.9517 14.4211C15.9535 14.4307 15.9546 14.4405 15.9561 14.4501C15.9585 14.4655 15.9613 14.4809 15.9628 14.4966C15.9642 14.5103 15.9643 14.5239 15.9649 14.5377C15.9654 14.5493 15.9666 14.5607 15.9666 14.5726C15.9666 14.584 15.9654 14.5952 15.9649 14.6065C15.9643 14.6205 15.9642 14.6347 15.9628 14.6487C15.9613 14.6648 15.9584 14.6803 15.9559 14.696C15.9544 14.7055 15.9535 14.715 15.9517 14.7243C15.9485 14.7404 15.9442 14.756 15.9401 14.7717C15.9376 14.7806 15.9358 14.7896 15.9332 14.7984C15.9286 14.8135 15.923 14.8282 15.9176 14.8428C15.9143 14.8521 15.9112 14.8615 15.9074 14.8708C15.9018 14.8845 15.8951 14.8978 15.8886 14.9112C15.8841 14.9208 15.8798 14.9306 15.8748 14.94C15.8677 14.9533 15.8598 14.9658 15.852 14.9785C15.8465 14.9876 15.8413 14.9968 15.8355 15.0058C15.8256 15.0206 15.8146 15.0346 15.8038 15.0487C15.7991 15.0548 15.795 15.0612 15.7901 15.0673C15.7731 15.0876 15.7553 15.1073 15.7367 15.126ZM11.3182 16.5256V17.3317L13.2979 15.3537H12.4901C11.8438 15.3537 11.3182 15.8795 11.3182 16.5256ZM10.4927 10.9375H5.50732C5.11594 10.9375 4.74988 10.7634 4.50284 10.4597C4.25458 10.1547 4.15829 9.75876 4.2384 9.37317C4.46011 8.30551 5.12418 7.41577 6.0127 6.87897C5.7153 6.47217 5.53906 5.97122 5.53906 5.42969C5.53906 4.07272 6.64304 2.96875 8 2.96875C9.35696 2.96875 10.4609 4.07272 10.4609 5.42969C10.4609 5.97122 10.2847 6.47217 9.98715 6.87897C10.8758 7.41577 11.5397 8.30551 11.7616 9.37317C11.8417 9.75876 11.7453 10.1547 11.4972 10.4597C11.2501 10.7634 10.8841 10.9375 10.4927 10.9375ZM7.10156 5.42969C7.10156 5.92514 7.50455 6.32812 8 6.32812C8.49545 6.32812 8.89844 5.92514 8.89844 5.42969C8.89844 4.93423 8.49545 4.53125 8 4.53125C7.50455 4.53125 7.10156 4.93423 7.10156 5.42969ZM10.1416 9.375C9.81992 8.49838 8.97427 7.89062 8.02045 7.89062H7.97955C7.02573 7.89062 6.18008 8.49838 5.85843 9.375H10.1416Z"
                                fill="white"
                                />
                            </svg>
                            View Resume
                            </a>
                        </div>
                        <div className="add-team">
                            <a href>
                            <svg
                                width={13}
                                height={13}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M11.375 5.4375H7.4375V1.5C7.4375 1.03516 7.02734 0.625 6.5625 0.625H5.6875C5.19531 0.625 4.8125 1.03516 4.8125 1.5V5.4375H0.875C0.382812 5.4375 0 5.84766 0 6.3125V7.1875C0 7.67969 0.382812 8.0625 0.875 8.0625H4.8125V12C4.8125 12.4922 5.19531 12.875 5.6875 12.875H6.5625C7.02734 12.875 7.4375 12.4922 7.4375 12V8.0625H11.375C11.8398 8.0625 12.25 7.67969 12.25 7.1875V6.3125C12.25 5.84766 11.8398 5.4375 11.375 5.4375Z"
                                fill="white"
                                />
                            </svg>
                            Add in Team
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Engaged Part */}
                    <div className="col-lg-6 pr-0 pl_padding">
                    <div className="department-profile engaged">
                        <div className="deprt-available">
                        <a href>Engaged</a>
                        </div>
                        <div className="profile-item">
                        <div className="profile">
                            <img src={UserPic} alt="user" />
                        </div>
                        <div className="profile-text">
                            <h3>Fahim Bashar Faisal</h3>
                            <p>
                            Expert developer, AWS certified Architect &amp; DevOps
                            </p>
                        </div>
                        </div>
                        <div className="profile-text-dp">
                        <p>
                            Department: <span>UIUX Designer</span>
                        </p>
                        <p>
                            Experience: <span>5 Years</span>
                        </p>
                        </div>
                        <p className="details">
                        Accumsan, dictumst dui aliquet lobortis massa. Cursus massa
                        aliquam amet quis non consectetur tempor. Purus nibh est cras
                        sed. Lobortis amet turpis mauris arcu odio mi commodo
                        tincidunt porttitor.
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
                                width={16}
                                height={20}
                                viewBox="0 0 16 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M8.66223 13.9822L4.01593 13.9844C4.01593 13.9844 4.01578 13.9844 4.01562 13.9844C3.58426 13.9844 3.23453 13.6349 3.23438 13.2036C3.23407 12.7721 3.5838 12.422 4.01517 12.4219L8.66147 12.4197H8.66177C9.09314 12.4197 9.44287 12.7692 9.44302 13.2005C9.44333 13.632 9.09375 13.9819 8.66223 13.9822ZM7.60678 15.2713L4.01517 15.2734C3.58365 15.2737 3.23407 15.6238 3.23438 16.0551C3.23468 16.4865 3.58441 16.8359 4.01562 16.8359H4.01608L7.6077 16.8338C8.03922 16.8335 8.38879 16.4835 8.38849 16.0521C8.38818 15.6207 8.03845 15.2713 7.60724 15.2713C7.60709 15.2713 7.60693 15.2713 7.60678 15.2713ZM15.7367 15.126L11.0894 19.769C11.0893 19.769 11.0893 19.769 11.0893 19.7691L11.089 19.7693C11.0881 19.7704 11.0869 19.7713 11.0858 19.7723C11.0687 19.7891 11.051 19.8053 11.0325 19.8204C11.0278 19.8244 11.0228 19.8276 11.0179 19.8314C11.0026 19.8433 10.9872 19.8552 10.971 19.866C10.9668 19.8689 10.9622 19.8712 10.9578 19.8741C10.9407 19.8851 10.9234 19.8958 10.9054 19.9054C10.9024 19.9069 10.8993 19.9083 10.8964 19.9098C10.8767 19.9199 10.8568 19.9297 10.8362 19.9382C10.8345 19.939 10.8328 19.9394 10.8311 19.94C10.8093 19.9489 10.7872 19.957 10.7644 19.964C10.7626 19.9644 10.7608 19.9648 10.7591 19.9654C10.7365 19.9719 10.7138 19.9779 10.6906 19.9825C10.6854 19.9835 10.6801 19.984 10.6747 19.9849C10.655 19.9884 10.6352 19.9918 10.6149 19.9939C10.5891 19.9965 10.5632 19.9979 10.5371 19.9979L3.23468 20C1.5112 20 0.109375 18.5982 0.109375 16.875V3.125C0.109375 1.40182 1.5112 0 3.23438 0H12.8395C14.5625 0 15.9645 1.40182 15.9645 3.125L15.9654 10.6639C15.9654 11.0954 15.6157 11.4453 15.1841 11.4453C14.7526 11.4453 14.4029 11.0956 14.4029 10.6642L14.402 3.12515C14.402 2.26349 13.701 1.5625 12.8395 1.5625H3.23438C2.37286 1.5625 1.67188 2.26349 1.67188 3.125V16.875C1.67188 17.7365 2.37286 18.4375 3.23438 18.4375L9.75568 18.4355V16.5256C9.75568 15.0179 10.9823 13.7912 12.4901 13.7912H15.1849C15.2108 13.7912 15.2368 13.7926 15.2627 13.7952C15.2739 13.7962 15.2845 13.7984 15.2955 13.7999C15.3097 13.8019 15.3239 13.8036 15.3381 13.8065C15.3514 13.8091 15.3642 13.8127 15.3773 13.8161C15.3889 13.819 15.4007 13.8214 15.4121 13.8251C15.4252 13.829 15.4379 13.8339 15.4507 13.8385C15.4619 13.8425 15.4731 13.8461 15.4841 13.8507C15.4965 13.8559 15.5084 13.8618 15.5203 13.8676C15.5314 13.8728 15.5426 13.8777 15.5533 13.8834C15.5653 13.8899 15.5768 13.8972 15.5885 13.9043C15.5986 13.9104 15.6088 13.916 15.6187 13.9227C15.6326 13.9319 15.6459 13.9423 15.6591 13.9523C15.666 13.9577 15.6733 13.9624 15.6801 13.968C15.7203 14.001 15.7573 14.0379 15.7902 14.0782C15.7953 14.0845 15.7997 14.0912 15.8047 14.0976C15.8152 14.1115 15.8259 14.1252 15.8355 14.1397C15.8415 14.1486 15.8465 14.1579 15.8522 14.167C15.86 14.1797 15.8677 14.1922 15.8749 14.2053C15.8799 14.2149 15.8842 14.2247 15.8888 14.2343C15.8952 14.2477 15.9018 14.261 15.9076 14.2747C15.9114 14.2841 15.9144 14.2935 15.9178 14.3028C15.9233 14.3175 15.9288 14.332 15.9332 14.3469C15.9359 14.3559 15.9379 14.3651 15.9402 14.3741C15.9443 14.3898 15.9486 14.4052 15.9517 14.4211C15.9535 14.4307 15.9546 14.4405 15.9561 14.4501C15.9585 14.4655 15.9613 14.4809 15.9628 14.4966C15.9642 14.5103 15.9643 14.5239 15.9649 14.5377C15.9654 14.5493 15.9666 14.5607 15.9666 14.5726C15.9666 14.584 15.9654 14.5952 15.9649 14.6065C15.9643 14.6205 15.9642 14.6347 15.9628 14.6487C15.9613 14.6648 15.9584 14.6803 15.9559 14.696C15.9544 14.7055 15.9535 14.715 15.9517 14.7243C15.9485 14.7404 15.9442 14.756 15.9401 14.7717C15.9376 14.7806 15.9358 14.7896 15.9332 14.7984C15.9286 14.8135 15.923 14.8282 15.9176 14.8428C15.9143 14.8521 15.9112 14.8615 15.9074 14.8708C15.9018 14.8845 15.8951 14.8978 15.8886 14.9112C15.8841 14.9208 15.8798 14.9306 15.8748 14.94C15.8677 14.9533 15.8598 14.9658 15.852 14.9785C15.8465 14.9876 15.8413 14.9968 15.8355 15.0058C15.8256 15.0206 15.8146 15.0346 15.8038 15.0487C15.7991 15.0548 15.795 15.0612 15.7901 15.0673C15.7731 15.0876 15.7553 15.1073 15.7367 15.126ZM11.3182 16.5256V17.3317L13.2979 15.3537H12.4901C11.8438 15.3537 11.3182 15.8795 11.3182 16.5256ZM10.4927 10.9375H5.50732C5.11594 10.9375 4.74988 10.7634 4.50284 10.4597C4.25458 10.1547 4.15829 9.75876 4.2384 9.37317C4.46011 8.30551 5.12418 7.41577 6.0127 6.87897C5.7153 6.47217 5.53906 5.97122 5.53906 5.42969C5.53906 4.07272 6.64304 2.96875 8 2.96875C9.35696 2.96875 10.4609 4.07272 10.4609 5.42969C10.4609 5.97122 10.2847 6.47217 9.98715 6.87897C10.8758 7.41577 11.5397 8.30551 11.7616 9.37317C11.8417 9.75876 11.7453 10.1547 11.4972 10.4597C11.2501 10.7634 10.8841 10.9375 10.4927 10.9375ZM7.10156 5.42969C7.10156 5.92514 7.50455 6.32812 8 6.32812C8.49545 6.32812 8.89844 5.92514 8.89844 5.42969C8.89844 4.93423 8.49545 4.53125 8 4.53125C7.50455 4.53125 7.10156 4.93423 7.10156 5.42969ZM10.1416 9.375C9.81992 8.49838 8.97427 7.89062 8.02045 7.89062H7.97955C7.02573 7.89062 6.18008 8.49838 5.85843 9.375H10.1416Z"
                                fill="white"
                                />
                            </svg>
                            View Resume
                            </a>
                        </div>
                        <div className="add-team">
                            <a href>
                            <svg
                                width={13}
                                height={13}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M11.375 5.4375H7.4375V1.5C7.4375 1.03516 7.02734 0.625 6.5625 0.625H5.6875C5.19531 0.625 4.8125 1.03516 4.8125 1.5V5.4375H0.875C0.382812 5.4375 0 5.84766 0 6.3125V7.1875C0 7.67969 0.382812 8.0625 0.875 8.0625H4.8125V12C4.8125 12.4922 5.19531 12.875 5.6875 12.875H6.5625C7.02734 12.875 7.4375 12.4922 7.4375 12V8.0625H11.375C11.8398 8.0625 12.25 7.67969 12.25 7.1875V6.3125C12.25 5.84766 11.8398 5.4375 11.375 5.4375Z"
                                fill="white"
                                />
                            </svg>
                            Add in Team
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* PAGE NUMBER LOWER START */}
                <div className="row">
                    <div className="col-md-12">
                    <div className="r_number_u lower">
                        <nav
                        className="costCalculator_pagination"
                        aria-label="Page navigation example"
                        >
                        <ul className="costCalculator pagination">
                            <li className="page-item">
                            <a className=" active" href="#">
                                1
                            </a>
                            </li>
                            <li className="page-item">
                            <a className href="#">
                                2
                            </a>
                            </li>
                            <li className="page-item">
                            <a className href="#">
                                3
                            </a>
                            </li>
                            <li className="page-item">
                            <a className href="#">
                                4
                            </a>
                            </li>
                            <li className="page-item">
                            <a className href="#">
                                5
                            </a>
                            </li>
                            <li className="page-item">
                            <a className href="#">
                                6
                            </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    </div>
                </div>
                {/* PAGE NUMBER LOWER END */}
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default ReviewTeamMember;