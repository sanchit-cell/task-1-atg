import React, { useState } from "react";
import "./Mainpage.css";
import Arrow from "../../assets/baseline-arrow_drop_down-24px (1).svg";
import groupp from "../../assets/Vector (1).svg";
import post1 from "../../assets/Rectangle 5.png";
import post2 from "../../assets/post2.png";
import post3 from "../../assets/post3.png";
import threedot from "../../assets/Group 3.svg";
import calender from "../../assets/baseline-today-24px.svg";
import location from "../../assets/outline-location_on-24px.svg";
import eye from "../../assets/eye.svg";
import Logo from "../../assets/whole.svg";
import Down from "../../assets/baseline-arrow_drop_down-24px.svg";
import Search from "../../assets/Vector.svg";
import sharee from "../../assets/sharee.svg";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import suitcase from "../../assets/suitcase.svg";
import thumb from "../../assets/thumb.svg";
import reco1 from "../../assets/reco1.png";
import reco2 from "../../assets/reco2.png";
import reco3 from "../../assets/reco3.png";
import reco4 from "../../assets/reco4.png";
import leavearrow from "../../assets/leaveee.svg";
import exittt from "../../assets/outline-exit_to_app-24px.svg";
import exclaim from "../../assets/exclaim.svg";
import LocationInput from "../../components/LocationInp/LocationInput";
import Signin from "../../components/SignIn/Signin";
import rededit from "../../assets/rededit.png";

const Mainpage = () => {
  const [showSign, setShowSign] = useState(false);
  const [showSigninMob, setShowSigninMob] = useState(false);
  const [user, setUser] = useState(null);
  const [isSigned, setisSigned] = useState(false);
  const [btninfo, setbtninfo] = useState({
    text: "Join Group",
    img: groupp,
    btnClass: "color-btn",
  });
  // const [followw, setfollow] = useState({
  //   text:"Follow",
  //   btnClass:''
  // });

  const [followStatus, setFollowStatus] = useState({
    Leisure: false,
    Activism: false,
    MBA: false,
    Philosophy: false,
  });

  const handleSignIn = (userData) => {
    setUser(userData);
    setisSigned(true);
    setShowSign(false);
  };

  const joinorLeave = () => {
    if (btninfo.text === "Join Group") {
      setbtninfo({
        text: "Leave Group",
        img: exittt,
      });
    } else {
      setbtninfo({
        text: "Join Group",
        img: groupp,
        btnClass: "color-btn",
      });
    }
  };

  const followUnfollow = (group) => {
    setFollowStatus((prevState) => ({
      ...prevState,
      [group]: !prevState[group],
    }));
  };
  return (
    <>
      <header className="flex header-cont">
        <div className="logo-cont">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="search-bar">
          <div className="flex search-bar-in">
            <img src={Search} alt="" />
            <input
              type="text"
              className="search-box"
              placeholder="Search for your favorite groups in ATG"
              name="searchh"
              id="searchh"
            />
          </div>
        </div>
        <div className="flex">
          {user ? (
            <div className="user-info flex">
              <img
                src={user.image || person1}
                alt="user"
                className="user-img"
              />
              <span>{user.name}</span>
            </div>
          ) : (
            <p className="before-hyper">
              Create Account.
              <span
                className="hyperlink cursor-point"
                onClick={() => setShowSign(true)}
              >
                {" "}
                It's free!
              </span>
              {showSign && (
                <Signin
                  onClose={() => setShowSign(false)}
                  onSignIn={handleSignIn}
                />
              )}
            </p>
          )}
          <img src={Down} alt="" />
        </div>
      </header>
      <section className="upper-section">
        <div className="flex small-screen-cont">
          <img src={leavearrow} alt="" />
          <button className="small-screen-btn" onClick={joinorLeave}>
            {btninfo.text}
          </button>
        </div>
        <div className="flex-contain flex">
          <div className="upper-head">Computer Engineering</div>
          <div className="lower-text">
            142,765 Computer Engineers follow this
          </div>
        </div>
      </section>

      <section className="bottom-section flex">
        <div className="bottom-section-cont">
          <div className="flex bottom-section-in">
            <div>
              <ul className="flex list-nav">
                <li className="active">All Posts(32)</li>
                <li>Article</li>
                <li>Event</li>
                <li>Education</li>
                <li>Job</li>
              </ul>
            </div>
            <div className="flex btn-cont">
              <button className="flex btn">
                <span> Write a post</span> <img src={Arrow} alt="" />
              </button>
              <button
                className={`flex btn ${btninfo.btnClass}`}
                onClick={joinorLeave}
              >
                <img src={btninfo.img} alt="" /> <span>{btninfo.text}</span>
              </button>
            </div>
          </div>
          <hr />
          <div className="bottom-section-in-small flex">
            <span>Posts(368)</span>
            <button className="flex bottom-section-in-btn">
              <span>Filter: All</span>
              <img src={Arrow} alt="" />
            </button>
          </div>
          <div className="bottom-cont flex">
            <div className="bottom-cont-left">
              <div className="main-cont-bottom flex">
                <div className="btm-img-cont">
                  <img src={post1} alt="post1" />
                </div>
                <div className="main-cont-bottom-in flex">
                  <div className="tag-cont">
                    <p>✍️ Article</p>
                  </div>
                  <div className="cap-head flex">
                    <p>
                      What if famous brands had regular fonts? Meet
                      RegulaBrands!
                    </p>
                    <img src={threedot} alt="threedot" />
                  </div>
                  <div className="capp">
                    <p>
                      I’ve worked in UX for the better part of a decade. From
                      now on, I plan to rei …
                    </p>
                  </div>
                  <div className="btm-cont-foot flex">
                    <div className="cont-foot-left flex">
                      <img src={person1} alt="person1" />
                      <span>Sarthak Kamra</span>
                    </div>
                    <div className="cont-foot-left-small flex">
                      <img src={person1} alt="person1" />
                      <div className="flex flex-col small-left-cont-foot-in">
                        <span>Sarthak Kamra</span>
                        <span className="view-small">1.4k views</span>
                      </div>
                    </div>
                    <div className="cont-foot-right flex">
                      <div>
                        <img src={eye} alt="eye" />
                        <span>1.4k views</span>
                      </div>
                      <button className="flex share-btn">
                        <img src={sharee} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-cont-bottom flex">
                <div className="btm-img-cont">
                  <img src={post2} alt="post2" />
                </div>
                <div className="main-cont-bottom-in flex">
                  <div className="tag-cont">
                    <p>🔬️ Education</p>
                  </div>
                  <div className="cap-head flex">
                    <p>
                      Tax Benefits for Investment under National Pension Scheme
                      launched by Government
                    </p>
                    <img src={threedot} alt="threedot" />
                  </div>
                  <div className="capp">
                    <p>
                      I’ve worked in UX for the better part of a decade. From
                      now on, I plan to rei…
                    </p>
                  </div>
                  <div className="btm-cont-foot flex">
                    <div className="cont-foot-left flex">
                      <img src={person2} alt="person1" />
                      <span>Sarah West</span>
                    </div>
                    <div className="cont-foot-left-small flex">
                      <img src={person2} alt="person2" />
                      <div className="flex flex-col small-left-cont-foot-in">
                        <span>Sarah West</span>
                        <span className="view-small">1.4k views</span>
                      </div>
                    </div>
                    <div className="cont-foot-right flex">
                      <div>
                        <img src={eye} alt="eye" />
                        <span>1.4k views</span>
                      </div>
                      <button className="flex share-btn">
                        <img src={sharee} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-cont-bottom flex">
                <div className="btm-img-cont">
                  <img src={post3} alt="" />
                </div>
                <div className="main-cont-bottom-in flex">
                  <div className="tag-cont">
                    <p>🗓️ Meetup</p>
                  </div>
                  <div className="cap-head flex">
                    <p>Finance & Investment Elite Social Mixer @Lujiazui</p>
                    <img src={threedot} alt="threedot" />
                  </div>
                  <div className="below-cap-card3 flex">
                    <div className="below-cap-left flex">
                      <img src={calender} alt="calender" />
                      <p>Fri, 12 Oct, 2018</p>
                    </div>
                    <div className="below-cap-right flex">
                      <img src={location} alt="location" />
                      <p>Ahmedabad, India</p>
                    </div>
                  </div>
                  <button className="main-cont-btn-btm">Visit Website</button>
                  <div className="btm-cont-foot flex">
                    <div className="cont-foot-left flex">
                      <img src={person3} alt="person1" />
                      <span>Ronal Jones</span>
                    </div>
                    <div className="cont-foot-left-small flex">
                      <img src={person3} alt="person3" />
                      <div className="flex flex-col small-left-cont-foot-in">
                        <span>Ronal Jones</span>
                        <span className="view-small">1.4k views</span>
                      </div>
                    </div>
                    <div className="cont-foot-right flex">
                      <div>
                        <img src={eye} alt="eye" />
                        <span>1.4k views</span>
                      </div>
                      <button className="flex share-btn">
                        <img src={sharee} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-cont-bottom flex margin-btm-card4">
                <div className="main-cont-bottom-in flex">
                  <div className="tag-cont">
                    <p className="card4-p">💼️ Job</p>
                  </div>
                  <div className="cap-head flex">
                    <p>Software Developer</p>
                    <img src={threedot} alt="threedot" />
                  </div>
                  <div className="below-cap-card3 flex">
                    <div className="below-cap-left flex">
                      <img src={suitcase} alt="calender" />
                      <p className="disp-inno-desk">
                        Innovaccer Analytics Private Ltd.
                      </p>
                      <p className="disp-inno-small">Innovaccer Analytic...</p>
                    </div>
                    <div className="below-cap-right flex">
                      <img src={location} alt="location" />
                      <p>Noida, India</p>
                    </div>
                  </div>
                  <button className="main-cont-btn-btm color-green">
                    Apply on Timesjobs
                  </button>
                  <div className="btm-cont-foot flex">
                    <div className="cont-foot-left flex">
                      <img src={person4} alt="person1" />
                      <span>Joseph Gray</span>
                    </div>
                    <div className="cont-foot-left-small flex">
                      <img src={person4} alt="person1" />
                      <div className="flex flex-col small-left-cont-foot-in">
                        <span>Joseph Gray</span>
                        <span className="view-small">1.4k views</span>
                      </div>
                    </div>
                    <div className="cont-foot-right flex">
                      <div>
                        <img src={eye} alt="eye" />
                        <span>1.4k views</span>
                      </div>
                      <button className="flex share-btn">
                        <img src={sharee} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-cont-right">
              <div className="bottom-cont-right-in flex">
                <div className="bottom-cont-right-up">
                  <LocationInput />
                </div>
                <div className="bottom-cont-right-down flex">
                  <img src={exclaim} alt="" />
                  <span>
                    Your location will help us serve better and extend a
                    personalised experience.
                  </span>
                </div>
                {isSigned ? (
                  <>
                    <div className="flex flex-col just-gap">
                      <div className="flex flex-col main-rec-cont">
                        <div className="flex flex-r main-rec-head">
                          <img src={thumb} alt="" />
                          <span>RECOMMENDED GROUPS</span>
                        </div>
                        <div className="flex flex-col rec-types-cont">
                          <div className="flex flex-r rec-types-main">
                            <div className="flex flex-r rec-types-left">
                              <img src={reco1} alt="" />
                              <span>Leisure</span>
                            </div>
                            <div className="rec-types-right">
                              <button
                                onClick={() => followUnfollow("Leisure")}
                                className={`flex reco-follow-btn ${
                                  followStatus.Leisure ? "followed" : "follow"
                                }`}
                              >
                                {followStatus.Leisure ? "Followed" : "Follow"}
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-r rec-types-main">
                            <div className="flex flex-r rec-types-left">
                              <img src={reco2} alt="" />
                              <span>Activism</span>
                            </div>
                            <div className="rec-types-right">
                              <button
                                onClick={() => followUnfollow("Activism")}
                                className={`flex reco-follow-btn ${
                                  followStatus.Activism ? "followed" : "follow"
                                }`}
                              >
                                {followStatus.Activism ? "Followed" : "Follow"}
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-r rec-types-main">
                            <div className="flex flex-r rec-types-left">
                              <img src={reco3} alt="" />
                              <span>MBA</span>
                            </div>
                            <div className="rec-types-right">
                              <button
                                onClick={() => followUnfollow("MBA")}
                                className={`flex reco-follow-btn ${
                                  followStatus.MBA ? "followed" : "follow"
                                }`}
                              >
                                {followStatus.MBA ? "Followed" : "Follow"}
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-r rec-types-main">
                            <div className="flex flex-r rec-types-left">
                              <img src={reco4} alt="" />
                              <span>Philosofy</span>
                            </div>
                            <div className="rec-types-right">
                              <button
                                onClick={() => followUnfollow("Philosophy")}
                                className={`.rec-types-right-btn ${
                                  followStatus.Philosophy
                                    ? "followed"
                                    : "follow"
                                }`}
                              >
                                {followStatus.Philosophy
                                  ? "Followed"
                                  : "Follow"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="see-more highlight">
                        <p>See More ...</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex rededitt">
        <img
          src={rededit}
          onClick={() => setShowSigninMob(true)}
          className="rededit"
          alt=""
        />
        {showSigninMob && (
          <Signin
            onClose={() => setShowSigninMob(false)}
            onSignIn={handleSignIn}
          />
        )}
      </div>
    </>
  );
};

export default Mainpage;
