import React, { useState, useEffect } from 'react';
import SearchImg from "../assets/images/search.png" 
import UserPic from "../assets/images/user_icon.png"
import rocketImg from "../assets/images/rocket.png"
import resume_userPic from '../assets/images/cv_images.png';
import Slider from "react-slick";
import { Link, useHistory } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ExpertiseNextArrow, ExpertisePrevArrow , SampleNextArrow, SamplePrevArrow } from "../common/CustomSetting";
import AskTalent from "./AskTalent";
import axios from 'axios';
import cogoToast from 'cogo-toast';
import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import Modal from 'react-modal';

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

const customStylesForModal = {
    content: {
      top: '15%'
    },
  };
function Dashboard() {
    const [data, setData] = useState([]);
    const [TeamMember, setTeamMember] = useState([]);
    const [TeamMemberID, setTeamMemberID] = useState([]);
    const [TeamMemberKey, setTeamMemberkey] = useState([]);
    const [EstimatedTotalCost, setEstimatedTotalCost] = useState(0);
    const [refresh, setRefresh] = useState(false);
    const [Modaldata, setModalData] = useState([]);
    const [dataLength, setdataLength] = useState(1);
    const routerHistory = useHistory();
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);  
    const [showModal, setIsOpen] = useState(false);

    function openModal(e , id) {
        console.log(data[id])
        setModalData(data[id])
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    const reviewYourTeam = (e) =>{
        let TeamMemberID = localStorage.getItem("TeamMemberID")
        if(TeamMemberID == ""){
            alert("Please select your team member")
        }else{
            routerHistory.push("review_your_team");
        }
    } 

    const Calculator = ()=>{
        console.log("TeamMemberID " , TeamMemberID)
        console.log("data " , data)

        let total = 0;

        for (let index = 0; index < data.length; index++) {
            if( TeamMemberID.includes(data[index].id) ){
                total += data[index].salary
            }
        }

        setEstimatedTotalCost(total)
    }

    const RemoveTeam =(e, id)=>{

        for( var i = 0; i < TeamMemberKey.length; i++){ 
            if ( TeamMemberKey[i] === id ) { 
                TeamMemberKey.splice(i, 1); 
            }
        }
        
        for( var i = 0; i < TeamMemberID.length; i++){ 
            if ( TeamMemberID[i] === data[id].id ) { 
                TeamMemberID.splice(i, 1); 
            }
        }

        for( var i = 0; i < TeamMember.length; i++){ 
            if (  TeamMember[i].props.className.includes(id) ) { 
                TeamMember.splice(i, 1); 
                setTeamMember(TeamMember)
            }
        }

        let slideItem = "slider-item-" + id;
        let toRemoveitemsFromSlide = document.getElementsByClassName(slideItem)

        for (let index = 0; index < toRemoveitemsFromSlide.length; index++) {
            toRemoveitemsFromSlide[index].style.display = "none";
        }

        let slideAddItem = "add-team-"+id
        document.getElementById(slideAddItem).style.display = "block";
        localStorage.setItem('TeamMemberID', TeamMemberID );

        Calculator()
    }


    const AddTeam = (e , id) => {

        let slideAddItem = "add-team-"+id
        document.getElementById(slideAddItem).style.display = "none";
        
        if(TeamMemberKey.includes(id)){
            alert("You have already take this developer")
        }else{
            TeamMemberKey.push(id)
            TeamMemberID.push(data[id].id)

            localStorage.setItem('TeamMemberID', TeamMemberID );
            setRefresh(!refresh)

            TeamMember.push( 
                
                <div className={ "slider-item slider-item-" + id }  >
                    <img src={UserPic} alt="User Pic" />
                    <h3> { data[id].emp_name } </h3>
                    <p> { data[id].depertment } </p>
                    <div className="slider-overlay" onClick={ (e) => {RemoveTeam(e, id)} } >
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

            );
        }

        Calculator()

    }

    function fetchData(filter="" , status="" , dropdownSort=""){

        var AuthUserToken = localStorage.getItem("AuthUserToken")
        axios.defaults.headers.common['AuthUserToken'] = AuthUserToken;

        axios.get( "employees?filter=" + filter +"&status="+ status+"&dropdownSort="+ dropdownSort )
        .then(res => {
            setData(res.data)
            setdataLength( parseInt(res.data.length /10 ) + 1 )
            document.getElementById("showingInfo")
        }).catch(function (error) {
            if(error.response.data.loginStatus == false){
                routerHistory.push("login");
                localStorage.removeItem("AuthUserToken")
            }
            cogoToast.error(error.response.data.message , { position: 'top-right' } );
        });
    }

    function Search(e) {
        let search_box = document.getElementById("search_box").value;
        fetchData(search_box)

        for (let index = 0; index < data.length; index++) {
            var x = "employee_" + index ;
            if(document.getElementById(x) != null ){
                document.getElementById(x).classList.remove("display_none")
            }
            
        }
    }

    function paginateClick(e) {
        let pageItem = document.getElementsByClassName("page-item");
        let page_item = "page_id_" + e.target.innerHTML
        let activeItem =  document.getElementsByClassName(page_item)
        
        for (let index = 0; index < pageItem.length; index++) {
            pageItem[index].children[0].classList.remove("active")
        }
        for (let index = 0; index < activeItem.length; index++) {
            activeItem[index].classList.add("active")
        }

        let page = e.target.innerHTML
        let start = page * 10 - 10;
        let end = start +10

        for (let index = 0; index < data.length; index++) {
            var x = "employee_" + index;
            if(document.getElementById(x) != null ){
                document.getElementById(x).classList.add("display_none")
            }
        }

        for (let index = start; index < end; index++) {
            var x = "employee_" + index;
            if(document.getElementById(x) != null ){
                 document.getElementById(x).classList.remove("display_none")
            }
        }
    }

    function employeeStatus(e , params) {
        if(params == 0){
            document.getElementById("availableEmployee").classList.add("available")
            document.getElementById("allEmployee").classList.remove("available")
        }else{
            document.getElementById("availableEmployee").classList.remove("available")
            document.getElementById("allEmployee").classList.add("available")
        }
        fetchData("" , params  )
    }

    function sortDropdown(params) {
        fetchData("" , "" , params )
    }

    const menuItems = [];

    for (var i = 0; i < dataLength; i++) {
        menuItems.push( 
        <li className="page-item" >
            <a className= { i == 0 ? " active" + " page_id_" + (i+1) : "page_id_" + (i+1) } onClick={paginateClick} >
                {
                    i + 1 
                }
            </a>
        </li> 
        );
    }
    

    useEffect(() => {
        fetchData()
    } , []);
    
  return (
    <>
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
                    <div className="progress-bar" />
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
                <div className="btn_manage"  >
                    <Link onClick={reviewYourTeam} > 
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


                {/* <div className="no_member_box-item">
                    <p>No Member added</p>
                </div> */}


                <div className="no_member_box-item">
                    <div className="member_box text-center slick-slider">
                    <Slider {...settings} dots={false}>

                        {TeamMember}

                    </Slider>
                    </div>
                </div>


                <div className="no_member_box_cost">
                    <p>
                    Estimated <br /> Monthly Cost
                    </p>
                    <span>$ {EstimatedTotalCost} </span>
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


                        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>
                                Choose
                            </DropdownToggle>
                            <DropdownMenu>
                                    <p className="dropdown-item text-center" onClick={ (e)=>sortDropdown("salary") } style={{ cursor:"pointer" }} >  Salary </p>
                                    <p className="dropdown-item text-center" onClick={ (e)=>sortDropdown("experence") } style={{ cursor:"pointer" }} >  Experience  </p>
                                    <p className="dropdown-item text-center" onClick={ (e)=>sortDropdown("depertment") } style={{ cursor:"pointer" }}>  Departments   </p>
                                    <p className="dropdown-item text-center" onClick={ (e)=>sortDropdown("emp_name") } style={{ cursor:"pointer" }}>  Name  </p>
                                
                            </DropdownMenu>
                        </ButtonDropdown>

                        <li className="right available" id="availableEmployee">
                            <a style={{cursor:"pointer"}} onClick={ (e)=>employeeStatus(e , 1)}>Available</a>
                        </li>
                        <li className="right" id="allEmployee">
                            <a style={{cursor:"pointer"}} onClick={ (e)=>employeeStatus(e , 0)}>All</a>
                        </li>
                        </ul>
                        <div className="item_serch">
                        <input
                            type="text"
                            className="form-control membarSearch"
                            placeholder="Search..."
                            id="search_box"
                        />
                        <img  src={SearchImg} onClick={ Search } />
                        </div>
                    </div>
                    {/* PAGE MUMBER START */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="r_number_u">
                                <div className="r_number_text">
                                <p id="showingInfo" >Showing 1-10 of 100</p>
                                </div>
                                <nav
                                className="costCalculator_pagination"
                                aria-label="Page navigation example"
                                >
                                <ul className="costCalculator pagination">

                                {menuItems}

                                </ul>
                                </nav>
                            </div>
                        </div>


                        {
                            data.map((post , key) =>
                                
                            <div className= {key <10 || key ==0 ? "col-lg-6 pl-0 pr_padding" : "col-lg-6 pl-0 pr_padding display_none" } key={key} id={"employee_" + key} data-name={post.emp_name} >
                                <div className= {post.emp_status == 1 ? "department-profile" : "department-profile engaged" } >
                                    <div className="deprt-available">
                                    <a href="#"> {post.emp_status == 1 ? "Available" : "Engaged" } </a>
                                    </div>
                                    <div className="profile-item">
                                    <div className="profile">
                                        <img src={UserPic} alt="User Pic" />
                                    </div>
                                    <div className="profile-text">
                                        <h3> { post.emp_name } </h3>
                                        <p>
                                        Expert developer, { post.expert_developer }
                                        </p>
                                    </div>
                                    </div>
                                    <div className="profile-text-dp">
                                    <p>
                                        Department: <span> { post.depertment } </span>
                                    </p>
                                    <p>
                                        Experience: <span>{ post.experence } Years</span>
                                    </p>
                                    </div>
                                    <p className="details">
                                    { post.userAbout }
                                    </p>
                                    <p className="expartics">Expertise</p>

                                    {
                                        ( post.expert_in !="" && post.expert_in !=null ) && 

                                        <Slider {...settingsExpertise} dots={false}>
                                        {
                                            JSON.parse(post.expert_in).map((expert , key) => 
                                            <div key={key}>
                                                <div>{ expert }</div>
                                            </div>
                                            )
                                        }
                                        </Slider>

                                    }

                                    


                                    <div className="resume-part-flex">
                                        <div className="view-resume"  >
                                            <a onClick={ (e)=> openModal(e , post.id )} style={{cursor: "pointer"}} >
                                            
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
                                        <div className="add-team" onClick={(e)=> AddTeam( e ,key ) } id={"add-team-"+ key } >
                                            <a >
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


                            )
                        }
                        
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
                               {menuItems}
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

            <AskTalent />
            <div className="askTalentagain">
                <img src={rocketImg} alt="img" />
                <p>
                Your talent requisition is successfully submitted. It may take 3-7
                <br /> working days to find a talent for you.
                </p>
                <button
                name="Ask for a Talent Again"
                type="button"
                className="btn btn-talentAgain"
                >
                Ask for a Talent Again
                </button>
            </div>
        </div>





        <Modal
            isOpen={showModal}
            contentLabel="Example Modal"
            style={customStylesForModal}
        >

                <button
                type="button"
                className="close"
                onClick={close}
                >
                <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M0.283203 1.66898C-0.0917969 1.29398 -0.0917969 0.66985 0.283203 0.281738C0.671315 -0.0932617 1.28233 -0.0932617 1.67044 0.281738L9.99474 8.62003L18.333 0.281738C18.708 -0.0932617 19.3322 -0.0932617 19.7063 0.281738C20.0944 0.66985 20.0944 1.29485 19.7063 1.66898L11.382 9.99415L19.7063 18.3324C20.0944 18.7074 20.0944 19.3316 19.7063 19.7197C19.3313 20.0947 18.7072 20.0947 18.333 19.7197L9.99474 11.3814L1.67044 19.7197C1.28233 20.0947 0.671315 20.0947 0.283203 19.7197C-0.0917969 19.3316 -0.0917969 18.7066 0.283203 18.3324L8.6075 9.99415L0.283203 1.66898Z"
                    fill="black"
                    />
                </svg>
                </button> 

                <div className="modal-header">
                    <div>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        
                        </button> 
                    </div>
                    <h4 className="modal-title" id="myModalLabel2">Available from { Modaldata.available_from}
                    
                      </h4>
                </div>


                <div className="row user_resume">
                    <div className="col-md-12 resume_info_top">
                        <div className="row">
                        <div className="col-md-4">
                            <div className="resume_userPic">
                            <img src={resume_userPic} alt="Resume Pic" />
                            <div className="overlay_resume_userPic">
                            </div>
                            </div>
                        </div>
                        <div className="col-md-8 resume_info_view">
                            <h2 className="resume_userName"> {Modaldata.emp_name } </h2>
                            <h3 className="resume_userExpert">Expert developer, { Modaldata.expert_developer }
                            </h3>
                            <div className="resume_userPosition">Position: { Modaldata.position } </div>
                            <p className="resume_userAbout"> {Modaldata.userAbout} </p>
                            <button type="button" className="btn btn-downloadResume"><svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.66223 13.9822L4.01593 13.9844C4.01593 13.9844 4.01578 13.9844 4.01562 13.9844C3.58426 13.9844 3.23453 13.6349 3.23438 13.2036C3.23407 12.7721 3.5838 12.422 4.01517 12.4219L8.66147 12.4197H8.66177C9.09314 12.4197 9.44287 12.7692 9.44302 13.2005C9.44333 13.632 9.09375 13.9819 8.66223 13.9822ZM7.60678 15.2713L4.01517 15.2734C3.58365 15.2737 3.23407 15.6238 3.23438 16.0551C3.23468 16.4865 3.58441 16.8359 4.01562 16.8359H4.01608L7.6077 16.8338C8.03922 16.8335 8.38879 16.4835 8.38849 16.0521C8.38818 15.6207 8.03845 15.2713 7.60724 15.2713C7.60709 15.2713 7.60693 15.2713 7.60678 15.2713ZM15.7367 15.126L11.0894 19.769C11.0893 19.769 11.0893 19.769 11.0893 19.7691L11.089 19.7693C11.0881 19.7704 11.0869 19.7713 11.0858 19.7723C11.0687 19.7891 11.051 19.8053 11.0325 19.8204C11.0278 19.8244 11.0228 19.8276 11.0179 19.8314C11.0026 19.8433 10.9872 19.8552 10.971 19.866C10.9668 19.8689 10.9622 19.8712 10.9578 19.8741C10.9407 19.8851 10.9234 19.8958 10.9054 19.9054C10.9024 19.9069 10.8993 19.9083 10.8964 19.9098C10.8767 19.9199 10.8568 19.9297 10.8362 19.9382C10.8345 19.939 10.8328 19.9394 10.8311 19.94C10.8093 19.9489 10.7872 19.957 10.7644 19.964C10.7626 19.9644 10.7608 19.9648 10.7591 19.9654C10.7365 19.9719 10.7138 19.9779 10.6906 19.9825C10.6854 19.9835 10.6801 19.984 10.6747 19.9849C10.655 19.9884 10.6352 19.9918 10.6149 19.9939C10.5891 19.9965 10.5632 19.9979 10.5371 19.9979L3.23468 20C1.5112 20 0.109375 18.5982 0.109375 16.875V3.125C0.109375 1.40182 1.5112 0 3.23438 0H12.8395C14.5625 0 15.9645 1.40182 15.9645 3.125L15.9654 10.6639C15.9654 11.0954 15.6157 11.4453 15.1841 11.4453C14.7526 11.4453 14.4029 11.0956 14.4029 10.6642L14.402 3.12515C14.402 2.26349 13.701 1.5625 12.8395 1.5625H3.23438C2.37286 1.5625 1.67188 2.26349 1.67188 3.125V16.875C1.67188 17.7365 2.37286 18.4375 3.23438 18.4375L9.75568 18.4355V16.5256C9.75568 15.0179 10.9823 13.7912 12.4901 13.7912H15.1849C15.2108 13.7912 15.2368 13.7926 15.2627 13.7952C15.2739 13.7962 15.2845 13.7984 15.2955 13.7999C15.3097 13.8019 15.3239 13.8036 15.3381 13.8065C15.3514 13.8091 15.3642 13.8127 15.3773 13.8161C15.3889 13.819 15.4007 13.8214 15.4121 13.8251C15.4252 13.829 15.4379 13.8339 15.4507 13.8385C15.4619 13.8425 15.4731 13.8461 15.4841 13.8507C15.4965 13.8559 15.5084 13.8618 15.5203 13.8676C15.5314 13.8728 15.5426 13.8777 15.5533 13.8834C15.5653 13.8899 15.5768 13.8972 15.5885 13.9043C15.5986 13.9104 15.6088 13.916 15.6187 13.9227C15.6326 13.9319 15.6459 13.9423 15.6591 13.9523C15.666 13.9577 15.6733 13.9624 15.6801 13.968C15.7203 14.001 15.7573 14.0379 15.7902 14.0782C15.7953 14.0845 15.7997 14.0912 15.8047 14.0976C15.8152 14.1115 15.8259 14.1252 15.8355 14.1397C15.8415 14.1486 15.8465 14.1579 15.8522 14.167C15.86 14.1797 15.8677 14.1922 15.8749 14.2053C15.8799 14.2149 15.8842 14.2247 15.8888 14.2343C15.8952 14.2477 15.9018 14.261 15.9076 14.2747C15.9114 14.2841 15.9144 14.2935 15.9178 14.3028C15.9233 14.3175 15.9288 14.332 15.9332 14.3469C15.9359 14.3559 15.9379 14.3651 15.9402 14.3741C15.9443 14.3898 15.9486 14.4052 15.9517 14.4211C15.9535 14.4307 15.9546 14.4405 15.9561 14.4501C15.9585 14.4655 15.9613 14.4809 15.9628 14.4966C15.9642 14.5103 15.9643 14.5239 15.9649 14.5377C15.9654 14.5493 15.9666 14.5607 15.9666 14.5726C15.9666 14.584 15.9654 14.5952 15.9649 14.6065C15.9643 14.6205 15.9642 14.6347 15.9628 14.6487C15.9613 14.6648 15.9584 14.6803 15.9559 14.696C15.9544 14.7055 15.9535 14.715 15.9517 14.7243C15.9485 14.7404 15.9442 14.756 15.9401 14.7717C15.9376 14.7806 15.9358 14.7896 15.9332 14.7984C15.9286 14.8135 15.923 14.8282 15.9176 14.8428C15.9143 14.8521 15.9112 14.8615 15.9074 14.8708C15.9018 14.8845 15.8951 14.8978 15.8886 14.9112C15.8841 14.9208 15.8798 14.9306 15.8748 14.94C15.8677 14.9533 15.8598 14.9658 15.852 14.9785C15.8465 14.9876 15.8413 14.9968 15.8355 15.0058C15.8256 15.0206 15.8146 15.0346 15.8038 15.0487C15.7991 15.0548 15.795 15.0612 15.7901 15.0673C15.7731 15.0876 15.7553 15.1073 15.7367 15.126ZM11.3182 16.5256V17.3317L13.2979 15.3537H12.4901C11.8438 15.3537 11.3182 15.8795 11.3182 16.5256ZM10.4927 10.9375H5.50732C5.11594 10.9375 4.74988 10.7634 4.50284 10.4597C4.25458 10.1547 4.15829 9.75876 4.2384 9.37317C4.46011 8.30551 5.12418 7.41577 6.0127 6.87897C5.7153 6.47217 5.53906 5.97122 5.53906 5.42969C5.53906 4.07272 6.64304 2.96875 8 2.96875C9.35696 2.96875 10.4609 4.07272 10.4609 5.42969C10.4609 5.97122 10.2847 6.47217 9.98715 6.87897C10.8758 7.41577 11.5397 8.30551 11.7616 9.37317C11.8417 9.75876 11.7453 10.1547 11.4972 10.4597C11.2501 10.7634 10.8841 10.9375 10.4927 10.9375ZM7.10156 5.42969C7.10156 5.92514 7.50455 6.32812 8 6.32812C8.49545 6.32812 8.89844 5.92514 8.89844 5.42969C8.89844 4.93423 8.49545 4.53125 8 4.53125C7.50455 4.53125 7.10156 4.93423 7.10156 5.42969ZM10.1416 9.375C9.81992 8.49838 8.97427 7.89062 8.02045 7.89062H7.97955C7.02573 7.89062 6.18008 8.49838 5.85843 9.375H10.1416Z" fill="white" />
                            </svg>
                            Download Resume</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 resume_experience">
                        <h4>Experience</h4>
                        <ul>
                        <li> {Modaldata.experence} + years’ working experience in development</li>
                        </ul>
                    </div>
                    <div className="col-md-6  resume_Education">
                        <h4>Education</h4>
                        <ul>
                        <li> {Modaldata.education} </li>
                        </ul>
                    </div>
                    <div className="col-md-6 resume_experience">
                        <h4>Professional Certification</h4>
                        <ul>
                        <li> {Modaldata.professional_certification}  </li>
                        </ul>
                    </div>
                    <div className="col-md-6  resume_Education">
                        <h4>Professional Training</h4>
                        <ul>
                        <li> {Modaldata.professional_training}  </li>
                        </ul>
                    </div>
                    <div className="col-md-12 resume_skillset">
                        <h4>Skillset</h4>
                        <div className="row">
                        <ul className="col-md-6">
                            <li>Backend:
                            <ul>
                                <ol>
                                <span>Python </span>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0554 4.65344L9.05901 4.04298L7.26772 0.227481C7.13393 -0.0574352 6.66647 -0.0574352 6.53268 0.227481L4.74193 4.04298L0.745513 4.65344C0.417263 4.70381 0.28618 5.10302 0.516388 5.33865L3.41972 8.31456L2.73343 12.5217C2.67872 12.8559 3.03568 13.1067 3.33089 12.9426L6.90047 10.9698L10.4701 12.9431C10.7626 13.1056 11.1228 12.8597 11.0675 12.5222L10.3812 8.31511L13.2846 5.33919C13.5148 5.10302 13.3831 4.70381 13.0554 4.65344Z" fill="#EEEEEE" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0554 4.65344L9.05901 4.04298L7.26772 0.227481C7.13393 -0.0574352 6.66647 -0.0574352 6.53268 0.227481L4.74193 4.04298L0.745513 4.65344C0.417263 4.70381 0.28618 5.10302 0.516388 5.33865L3.41972 8.31456L2.73343 12.5217C2.67872 12.8559 3.03568 13.1067 3.33089 12.9426L6.90047 10.9698L10.4701 12.9431C10.7626 13.1056 11.1228 12.8597 11.0675 12.5222L10.3812 8.31511L13.2846 5.33919C13.5148 5.10302 13.3831 4.70381 13.0554 4.65344Z" fill="#EEEEEE" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0554 4.65344L9.05901 4.04298L7.26772 0.227481C7.13393 -0.0574352 6.66647 -0.0574352 6.53268 0.227481L4.74193 4.04298L0.745513 4.65344C0.417263 4.70381 0.28618 5.10302 0.516388 5.33865L3.41972 8.31456L2.73343 12.5217C2.67872 12.8559 3.03568 13.1067 3.33089 12.9426L6.90047 10.9698L10.4701 12.9431C10.7626 13.1056 11.1228 12.8597 11.0675 12.5222L10.3812 8.31511L13.2846 5.33919C13.5148 5.10302 13.3831 4.70381 13.0554 4.65344Z" fill="#EEEEEE" />
                                </svg>
                                </ol>
                                <ol>
                                <span>Django</span>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0554 4.65344L9.05901 4.04298L7.26772 0.227481C7.13393 -0.0574352 6.66647 -0.0574352 6.53268 0.227481L4.74193 4.04298L0.745513 4.65344C0.417263 4.70381 0.28618 5.10302 0.516388 5.33865L3.41972 8.31456L2.73343 12.5217C2.67872 12.8559 3.03568 13.1067 3.33089 12.9426L6.90047 10.9698L10.4701 12.9431C10.7626 13.1056 11.1228 12.8597 11.0675 12.5222L10.3812 8.31511L13.2846 5.33919C13.5148 5.10302 13.3831 4.70381 13.0554 4.65344Z" fill="#EEEEEE" />
                                </svg>
                                </ol>
                            </ul>
                            </li>
                            <li>
                            Frontend:
                            <ul>
                                <ol>
                                <span>ReactJs</span>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0554 4.65344L9.05901 4.04298L7.26772 0.227481C7.13393 -0.0574352 6.66647 -0.0574352 6.53268 0.227481L4.74193 4.04298L0.745513 4.65344C0.417263 4.70381 0.28618 5.10302 0.516388 5.33865L3.41972 8.31456L2.73343 12.5217C2.67872 12.8559 3.03568 13.1067 3.33089 12.9426L6.90047 10.9698L10.4701 12.9431C10.7626 13.1056 11.1228 12.8597 11.0675 12.5222L10.3812 8.31511L13.2846 5.33919C13.5148 5.10302 13.3831 4.70381 13.0554 4.65344Z" fill="#EEEEEE" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0554 4.65344L9.05901 4.04298L7.26772 0.227481C7.13393 -0.0574352 6.66647 -0.0574352 6.53268 0.227481L4.74193 4.04298L0.745513 4.65344C0.417263 4.70381 0.28618 5.10302 0.516388 5.33865L3.41972 8.31456L2.73343 12.5217C2.67872 12.8559 3.03568 13.1067 3.33089 12.9426L6.90047 10.9698L10.4701 12.9431C10.7626 13.1056 11.1228 12.8597 11.0675 12.5222L10.3812 8.31511L13.2846 5.33919C13.5148 5.10302 13.3831 4.70381 13.0554 4.65344Z" fill="#EEEEEE" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0554 4.65344L9.05901 4.04298L7.26772 0.227481C7.13393 -0.0574352 6.66647 -0.0574352 6.53268 0.227481L4.74193 4.04298L0.745513 4.65344C0.417263 4.70381 0.28618 5.10302 0.516388 5.33865L3.41972 8.31456L2.73343 12.5217C2.67872 12.8559 3.03568 13.1067 3.33089 12.9426L6.90047 10.9698L10.4701 12.9431C10.7626 13.1056 11.1228 12.8597 11.0675 12.5222L10.3812 8.31511L13.2846 5.33919C13.5148 5.10302 13.3831 4.70381 13.0554 4.65344Z" fill="#EEEEEE" />
                                </svg>
                                </ol>
                                <ol>
                                <span>AngularJs</span>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3875 4.65344L9.39104 4.04298L7.59975 0.227481C7.46596 -0.0574352 6.9985 -0.0574352 6.86471 0.227481L5.07396 4.04298L1.07754 4.65344C0.749294 4.70381 0.618211 5.10302 0.848419 5.33865L3.75175 8.31456L3.06546 12.5217C3.01075 12.8559 3.36771 13.1067 3.66292 12.9426L7.2325 10.9698L10.8021 12.9431C11.0946 13.1056 11.4548 12.8597 11.3995 12.5222L10.7133 8.31511L13.6166 5.33919C13.8468 5.10302 13.7152 4.70381 13.3875 4.65344Z" fill="#F48039" />
                                </svg>
                                <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0554 4.65344L9.05901 4.04298L7.26772 0.227481C7.13393 -0.0574352 6.66647 -0.0574352 6.53268 0.227481L4.74193 4.04298L0.745513 4.65344C0.417263 4.70381 0.28618 5.10302 0.516388 5.33865L3.41972 8.31456L2.73343 12.5217C2.67872 12.8559 3.03568 13.1067 3.33089 12.9426L6.90047 10.9698L10.4701 12.9431C10.7626 13.1056 11.1228 12.8597 11.0675 12.5222L10.3812 8.31511L13.2846 5.33919C13.5148 5.10302 13.3831 4.70381 13.0554 4.65344Z" fill="#EEEEEE" />
                                </svg>
                                </ol>
                            </ul>
                            </li>
                        </ul>
                        <ul className="col-md-6 padding">
                            <li>Database: MySQL, Aurora, MariaDB, PostgreSQL, DynamoDB, MongoDB</li>
                            <li>Cache: Radis, MemCacheD, DAX</li>
                            <li>Cloud: AWS EC2, ELB, S3, CloudFront, CloudWatch, EBS, SES, SNS, Cognito, Lambda, API Gatway, GraphQL, Amplify, CodeCommit</li>
                            <li>Others: Git, Jira, Jenkins, Apache JMeter, JSON, REST, JWT, Socket, Apache, NGINX, Linux, MacOS, Windows
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-12 resume_speciality">
                        <h4>Speciality</h4>
                        <div className="row">
                        <ul className="col-md-6">
                            <li>Designing scalable system architecture with maintainability in mind</li>
                            <li>Refactoring prototypes into production quality implementations </li>
                            <li>Setting up and improving the development p rocess</li>
                            <li>Performance optimization: Algorithms, Python C extensions, Cython, PyPy, Numba</li>
                        </ul>
                        <ul className="col-md-6 padding">
                            <li>Software development team management</li>
                            <li>Data processing: Pandas, NumPy, JSON, CSV, XML, YAML, MessagePack</li>
                            <li>API implementation: REST API (with Django, Flask or Falcon), GraphQL API, Non-HTTP API (WAMP over WebSockets, ZeroRPC over ZeroMQ, Kafka consumer/producer interf ace), RPC API (HTTP/JSON-RPC, HTTP/SOAP)
                            </li>
                        </ul>
                        </div>
                    </div>
                    {/* ========== Resume_Worked_Projects STRAT ========== */}
                    <div className="col-md-12">
                        <div className="resume_Worked_Projects">
                        <h3>Worked in Projects</h3>
                        <div className="row">

                        {(() => {
                            if( Modaldata.worked_in_project !="" && Modaldata.worked_in_project !=null ){

                                let workedProject = JSON.parse(Modaldata.worked_in_project)

                                return(
                                    <>
                                    
                                    {
                                        workedProject.map((collection , key)=> 
                                        
                                        <div className="col-lg-4" key={key}>
                                            <div className="resume_Worked_item">
                                                <div className="resume_img">
                                                <img src={collection.Image} alt="Images" className="img-fluid w-100" />
                                                <div className="overlay_resume_project">
                                                    <a href={collection.URL}>
                                                    <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.4983 6.34616L9.81038 0.268705C9.64801 0.0952232 9.43161 0 9.20087 0C8.96987 0 8.7536 0.09536 8.59123 0.268705L8.07482 0.820616C7.91258 0.993824 7.8232 1.22518 7.8232 1.47186C7.8232 1.7184 7.91258 1.95755 8.07482 2.13076L11.393 5.68398H0.850878C0.375565 5.68398 0 6.08156 0 6.58956V7.36981C0 7.8778 0.375565 8.31548 0.850878 8.31548H11.4307L8.07495 11.8885C7.91271 12.062 7.82333 12.2871 7.82333 12.5338C7.82333 12.7802 7.91271 13.0085 8.07495 13.1818L8.59136 13.732C8.75373 13.9055 8.97 14 9.201 14C9.43174 14 9.64814 13.9042 9.8105 13.7307L15.4984 7.65343C15.6611 7.4794 15.7506 7.24709 15.75 7.00014C15.7505 6.75237 15.6611 6.51992 15.4983 6.34616Z" fill="white" />
                                                    </svg>
                                                    </a>
                                                </div>
                                                </div>
                                                <p> {collection.name} </p>
                                            </div>
                                        </div>

                                        )
                                    }
                                    </>
                                )

                            }
                        })()}

                        </div>
                        </div>
                    </div>
                    {/* ========== Resume_Worked_Projects end ========== */}
                    </div>

            
        </Modal>

    </>
  );
}

export default Dashboard;