import { Link } from "react-router-dom";
import team_listingImg from "../assets/images/team_listing.png"

function TeamListing() {
  return (
    
    <div className="right_content">
        {/* ==================== ASK TALENT ============================ */}
        <div className="askTalent team_padding">
            <h2 className="askTalent_title">Manage Your Team</h2>
            <div className="team_listing_header">
            <p className="askTalent_tagLine">
                Our talent pool isn't enough to meet your demand! We can still hire
                <br /> for you. let us know your requirement.
            </p>
            </div>
            {/* =================== TEAM LISTING START ===================  */}
            {/* part-1 */}
            <div className="Team_Listing padding">
            <div className="row">
                <div className="col-lg-4">
                <div className="t_listing_r">
                    <div className="logo">
                    <img src={team_listingImg} alt="images" />
                    </div>
                    <div className="listing_text">
                    <h4>My Designing Team</h4>
                    <p>Dedicated Offshore Team</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-8">
                <div className="t_listing_l">
                    <div className="row">
                    <div className="col-lg-4">
                        <div className="l_text">
                        <h3>Number of members</h3>
                        <p>4 Member</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="l_text">
                        <h3>Estimated Cost</h3>
                        <p>$10,000/month</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="l_text">
                        <h3>Status</h3>
                        <p>Meeting Scheduled</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="l_text logos">
                        <Link to="/db_manage_team" className="l-logo">
                            <svg
                            width={17}
                            height={15}
                            viewBox="0 0 17 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M16.7283 6.79946L10.589 0.287898C10.4137 0.102025 10.1802 0 9.9311 0C9.68177 0 9.44833 0.102171 9.27308 0.287898L8.71568 0.879231C8.54056 1.06481 8.44409 1.31269 8.44409 1.57699C8.44409 1.84114 8.54056 2.09737 8.71568 2.28295L12.2973 6.08998H0.918408C0.405372 6.08998 0 6.51596 0 7.06024V7.89623C0 8.4405 0.405372 8.90944 0.918408 8.90944H12.3379L8.71581 12.7377C8.5407 12.9236 8.44423 13.1647 8.44423 13.429C8.44423 13.693 8.5407 13.9377 8.71581 14.1234L9.27322 14.7128C9.44847 14.8987 9.6819 15 9.93124 15C10.1803 15 10.4139 14.8974 10.5891 14.7115L16.7284 8.2001C16.9041 8.01364 17.0007 7.76474 17 7.50015C17.0005 7.23468 16.9041 6.98563 16.7283 6.79946Z"
                                fill="white"
                            />
                            </svg>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* part-2 */}
            <div className="Team_Listing">
            <div className="row">
                <div className="col-lg-4">
                <div className="t_listing_r">
                    <div className="logo">
                    <img src={team_listingImg} alt="images" />
                    </div>
                    <div className="listing_text">
                    <h4>My Designing Team</h4>
                    <p>Dedicated Offshore Team</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-8">
                <div className="t_listing_l">
                    <div className="row">
                    <div className="col-lg-4">
                        <div className="l_text">
                        <h3>Number of members</h3>
                        <p>4 Member</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="l_text">
                        <h3>Estimated Cost</h3>
                        <p>$10,000/month</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="l_text">
                        <h3>Status</h3>
                        <p>Meeting Scheduled</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="l_text logos">
                        <Link to="/db_manage_team" className="l-logo">
                            <svg
                            width={17}
                            height={15}
                            viewBox="0 0 17 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M16.7283 6.79946L10.589 0.287898C10.4137 0.102025 10.1802 0 9.9311 0C9.68177 0 9.44833 0.102171 9.27308 0.287898L8.71568 0.879231C8.54056 1.06481 8.44409 1.31269 8.44409 1.57699C8.44409 1.84114 8.54056 2.09737 8.71568 2.28295L12.2973 6.08998H0.918408C0.405372 6.08998 0 6.51596 0 7.06024V7.89623C0 8.4405 0.405372 8.90944 0.918408 8.90944H12.3379L8.71581 12.7377C8.5407 12.9236 8.44423 13.1647 8.44423 13.429C8.44423 13.693 8.5407 13.9377 8.71581 14.1234L9.27322 14.7128C9.44847 14.8987 9.6819 15 9.93124 15C10.1803 15 10.4139 14.8974 10.5891 14.7115L16.7284 8.2001C16.9041 8.01364 17.0007 7.76474 17 7.50015C17.0005 7.23468 16.9041 6.98563 16.7283 6.79946Z"
                                fill="white"
                            />
                            </svg>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* Create New Team */}
            <div className="Team_L_creat_team">
            <a href>
                <svg
                width={62}
                height={62}
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <circle cx={31} cy={31} r={31} fill="#F48039" />
                <path
                    d="M37.8571 29.2857H32.7143V24.1429C32.7143 23.5357 32.1786 23 31.5714 23H30.4286C29.7857 23 29.2857 23.5357 29.2857 24.1429V29.2857H24.1429C23.5 29.2857 23 29.8214 23 30.4286V31.5714C23 32.2143 23.5 32.7143 24.1429 32.7143H29.2857V37.8571C29.2857 38.5 29.7857 39 30.4286 39H31.5714C32.1786 39 32.7143 38.5 32.7143 37.8571V32.7143H37.8571C38.4643 32.7143 39 32.2143 39 31.5714V30.4286C39 29.8214 38.4643 29.2857 37.8571 29.2857Z"
                    fill="white"
                />
                </svg>
                Create New Team
            </a>
            </div>
            {/* =================== TEAM LISTING END ===================  */}
        </div>
    </div>

  );
}

export default TeamListing;