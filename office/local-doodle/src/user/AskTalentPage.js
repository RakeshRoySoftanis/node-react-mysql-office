import Slider from "react-slick";
import UserPic from "../assets/images/user_icon.png"
import { ExpertiseNextArrow, ExpertisePrevArrow } from "../common/CustomSetting";
import AskTalent from "./AskTalent";

function AskTalentPage() {

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
    <div class="right_content">
         <AskTalent />


         <div className="your-team-name ask_talent_padding">
            <div className="team_name">
                <div className="name-text">
                <h1> My Asked Talentse </h1>
                </div>
            </div>
            {/* ========== DEPARTMENT PART ========== */}
            <div className="r_departments Ask_telens">
                <div className="r-department-part">
                <div className="row">
                    {/* Available Part */}
                    <div className="col-lg-6 pr_padding">
                    <div className="department-profile">
                        <div className="deprt-available">
                        <span href data-toggle="modal" data-target="#editTalent">
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
                        </span>
                        </div>
                        <div className="profile-item">
                        <div className="profile">
                            <img src={ UserPic } alt="User Pic" />
                        </div>
                        <div className="profile-text">
                            <h3>Senior UI/UX Designer</h3>
                            <label>x3</label>
                        </div>
                        </div>
                        <div className="profile-text-dp">
                        <p>
                            Department <br />
                            <span>Server Manager</span>
                        </p>
                        <p>
                            Status <br />
                            <span>Still Searching</span>
                        </p>
                        <p>
                            Status <br />
                            <span>Still Searching</span>
                        </p>
                        </div>
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
                        <div className="talent-part-flex">
                        <button
                            name="Pause Requisition"
                            type="button"
                            className="btn btn-pousereq"
                        >
                            Pause Requisition
                        </button>
                        <button
                            name="Cancel Requisition"
                            type="button"
                            className="btn btn-cancelreq"
                        >
                            Cancel Requisition
                        </button>
                        </div>
                    </div>
                    </div>
                    {/* Engaged Part */}
                    <div className="col-lg-6 pl_padding">
                    <div className="department-profile engaged">
                        <div className="deprt-available">
                        <span href data-toggle="modal" data-target="#editTalent">
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
                        </span>
                        </div>
                        <div className="profile-item">
                        <div className="profile">
                            <img src={ UserPic } alt="User Pic" />
                        </div>
                        <div className="profile-text">
                            <h3>Senior UI/UX Designer</h3>
                            <label>x3</label>
                        </div>
                        </div>
                        <div className="profile-text-dp">
                        <p>
                            Department <br />
                            <span>Server Manager</span>
                        </p>
                        <p>
                            Status <br />
                            <span>Still Searching</span>
                        </p>
                        <p>
                            Status <br />
                            <span>Still Searching</span>
                        </p>
                        </div>
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
                        <div className="talent-part-flex">
                        <button
                            name="Pause Requisition"
                            type="button"
                            className="btn btn-pousereq"
                        >
                            Pause Requisition
                        </button>
                        <button
                            name="Cancel Requisition"
                            type="button"
                            className="btn btn-cancelreq"
                        >
                            Cancel Requisition
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>


    </div>
  );
}

export default AskTalentPage;