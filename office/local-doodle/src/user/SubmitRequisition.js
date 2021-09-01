import { Link } from "react-router-dom"
import calendarImg from "../assets/images/calendar.png"
function SubmitRequisition() {
  return (
    
    <div className="right_content review_team_u">
        <div className="progressbarDiv">
            <form id="progress_form">
            <ul id="progressbar">
                <li className="active done" id="step1">
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
                <h1>Submit Requisition</h1>
            </div>
            <div className="btn_manage">
                <Link to="/submit_requisition_2">
                    Schedule a Meeting
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
            <div className="submitRequisitionInfo">
            <form className="info_form">
                <h2>Company Information</h2>
                <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                    <label>Company Name</label>
                    <input
                        type="text"
                        name="Company Name"
                        className="form-control"
                        placeholder="Company Name"
                    />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="Email"
                        className="form-control"
                        placeholder="Email"
                    />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        name="Address"
                        className="form-control"
                        placeholder="Address"
                    />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                    <label>Company Website</label>
                    <input
                        type="text"
                        name="Company Website"
                        className="form-control"
                        placeholder="Company Website"
                    />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="Phone"
                        className="form-control"
                        placeholder="Type your number"
                    />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group re_svg">
                    <label>Number of Inhouse Employes</label>
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
                        <select className="form-control">
                        <option>Select Departments</option>
                        <option>Select Departments 112</option>
                        <option>Select Departments 113</option>
                        <option>Select Departments 114</option>
                        </select>
                    </div>
                </div>
                </div>
            </form>
            </div>
            <div className="expectedStartingDate">
            <div className="row">
                <div className="col-md-6">
                <h3>Expected Starting Date</h3>
                <p>
                    Select your targeted date Vulputate massa sit arcu id. Aliquam
                    pharetra in egestas etiam massa sit arcu vulputate.
                </p>
                <div className="calenderDateView">Select Date From Calendar</div>
                </div>
                <div className="col-md-6 text-right">
                <img src={ calendarImg } />
                </div>
            </div>
            </div>
        </div>
        </div>

  );
}

export default SubmitRequisition;