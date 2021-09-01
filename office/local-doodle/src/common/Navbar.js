import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import cellPhoneImg from '../assets/images/cellPhone.png'; 
import userImg from '../assets/images/user.png';
import userIcon from '../assets/images/user_icon.png';
import logImg from '../assets/images/log.png';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { FrontURL } from '../Constant';

const customStylesForModal = {
  content: {
    top: '11%',
  },
};

function Navbar() {

    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    const [showModal, setIsOpen] = useState(false);
    

    function openModal() {
      setIsOpen(true);
    }

    function close() {
      setIsOpen(false);
    }

    function logout() {
      localStorage.removeItem('AuthUserToken');
      window.location.href = FrontURL;
    }

  return (
    <>
      <nav className="navbar navbar-light ">
        <div className="container-fluid fixed_width dboard_widthHeader">
        <Link to="/" className="navbar-brand"> <img src={logImg} className="d-inline-block align-top" alt="" /> </Link>
          <div className="user_infos pull-left">
            <a href="#" className="aCall">
              <span className="cal_contact"><img src={cellPhoneImg} alt="Schedule Call" /> Schedule a call</span>
            </a>
            <ul className="notification">
              <li className="dropdown" id="dropdown">
                <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                  <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                      <path d="M19.5978 15.5036C18.2118 14.3321 17.4171 12.6197 17.4171 10.8057V8.25C17.4171 5.02425 15.0209 2.354 11.9171 1.90667V0.916667C11.9171 0.40975 11.5064 0 11.0004 0C10.4944 0 10.0837 0.40975 10.0837 0.916667V1.90667C6.97899 2.354 4.58374 5.02425 4.58374 8.25V10.8057C4.58374 12.6197 3.78899 14.3321 2.39474 15.5109C2.03816 15.8162 1.83374 16.2598 1.83374 16.7292C1.83374 17.6137 2.55332 18.3333 3.43791 18.3333H18.5629C19.4475 18.3333 20.1671 17.6137 20.1671 16.7292C20.1671 16.2598 19.9627 15.8162 19.5978 15.5036Z" fill="black" />
                      <path d="M11.0001 22C12.6602 22 14.0489 20.8166 14.3679 19.25H7.63226C7.95126 20.8166 9.34001 22 11.0001 22Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width={22} height={22} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <ul className="dropdown-menu notification_ul" aria-labelledby="dropdown">
                  <li>
                    <label>Your application has been referred for enrolment</label>
                    <span>3 Days ago</span>
                  </li>
                  <li>
                    <label>Your application has been referred for enrolment</label>
                    <span>3 Days ago</span>
                  </li>
                  <li>
                    <label>Your application has been referred for enrolment</label>
                    <span>3 Days ago</span>
                  </li>
                  <li>
                    <label>Your application has been referred for enrolment</label>
                    <span>3 Days ago</span>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="userNav">

                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                    <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                        <img src={userImg} alt="userPic" /> Hi, <span>Fahim</span>
                        <svg width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.66016 7.19531C5.90625 7.44141 6.31641 7.44141 6.5625 7.19531L11.8945 1.89062C12.1406 1.61719 12.1406 1.20703 11.8945 0.960938L11.2656 0.332031C11.0195 0.0859375 10.6094 0.0859375 10.3359 0.332031L6.125 4.54297L1.88672 0.332031C1.61328 0.0859375 1.20312 0.0859375 0.957031 0.332031L0.328125 0.960938C0.0820312 1.20703 0.0820312 1.61719 0.328125 1.89062L5.66016 7.19531Z" fill="#BBBBBB" />
                        </svg>
                        </a>
                    </DropdownToggle>
                    <DropdownMenu>
                        
                    <li onClick={openModal}> <Link to="/" className="dropdown-item">My Profile</Link> </li>
                    <li> <Link to="/" className="dropdown-item"> My Team </Link>  </li>
                    <li> <Link to="/" className="dropdown-item"> My Meetings </Link>  </li>
                    <li> <Link to="/ask_Talent" className="dropdown-item"> My asked talents </Link>  </li>
                    <li> <Link to="/" className="dropdown-item logOut" onClick={logout} > Logout </Link>  </li>

                    {/* <li><a href="ask_Talent.html" className="dropdown-item">My asked talents</a></li>
                    <li><a href="login.html" className="dropdown-item logOut">Logout</a></li> */}

                    

                    </DropdownMenu>
                </ButtonDropdown>

            </ul>
          </div>
          {/* <form class="form-inline">
          <button class="btn btn-sm btn-danger" type="button">Logout</button>
        </form> */}
        </div>
      </nav>

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
        
        <div className="row user_profile">
          <div className="viewUserDiv">
            <h1>My Profile</h1>
            <div className="Userdeatals">
              <img src={userIcon} />
              <button name="Update User" type="button" className="btn btn-update">
                Update
              </button>
              <button name="Delete User" type="button" className="btn btn-delete">
                Delete
              </button>
            </div>
          </div>
          <div className="companyProfile">
            <h2>Company Information</h2>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Type Email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Company Address</label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Company Address"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Company Website</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Company Website"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>phone</label>
                    <div className="input-group">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Type your number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="companyProfileInfo">
            <h2>Contact Person Information</h2>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Type Email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Company Address</label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Company Address"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Company Website</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Company Website"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>phone</label>
                    <div className="input-group">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Type your number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="companyProfilepassChange">
            <h2>Change Pasword</h2>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Current Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Current Password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>

    </>
  );
}

export default Navbar;
