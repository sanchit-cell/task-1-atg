import React, { useRef, useState } from "react";
import "./Signin.css";
import formimg from "../../assets/formimg.png";
import eyeimg from "../../assets/eye.svg";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import crossbtn from "../../assets/crossbtn.svg";

const Signin = ({ onClose, onSignIn }) => {
  const Signinref = useRef();
  const [formType, setFormType] = useState("signup");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const closeWindow = (e) => {
    if (Signinref.current === e.target) {
      onClose();
    }
  };

  const switchToSignIn = () => {
    setFormType("signin");
  };

  const switchToSignUp = () => {
    setFormType("signup");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "signup") {
      // Perform sign up logic
    } else {
      // Perform sign in logic
    }
    // Assuming sign-in or sign-up is successful, pass the user data back
    onSignIn({ name: `${userData.firstName} ${userData.lastName}`, email: userData.email });
  };

  return (
    <div ref={Signinref} onClick={closeWindow} className="signin-form flex">
      <div className="crossbtn-div flex">
        <img onClick={onClose} src={crossbtn} alt="Close" />
      </div>
      <div className="signin-form-in">
        <div className="form-header">
          <p>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>
        <div className="main-form-cont flex">
          <div className="form-cont-left flex">
            {formType === "signup" ? (
              <>
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit} className="flex main-form">
                  <div className="first-last-gp flex">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={userData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={userData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                  />
                  <div className="pass-gp flex">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={userData.password}
                      onChange={handleChange}
                      required
                    />
                    <img src={eyeimg} alt="Show password" />
                  </div>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                  />
                  <button className="form-sbmt-btn" type="submit">
                    Create Account
                  </button>
                  <div className="flex btn-flexx">
                  <button className="form-sbmt-btn-small" type="submit">
                    Create Account
                  </button>
                  <span onClick={switchToSignIn}>or, Sign In</span>
                  </div>
                </form>
                <div className="flex btn-gp">
                  <button className="btn-face flex">
                    <img src={facebook} alt="Facebook" />
                    <span>Sign Up with Facebook</span>
                  </button>
                  <button className="btn-goog flex">
                    <img src={google} alt="Google" />
                    <span>Sign Up with Google</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit} className="flex main-form-signin">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                  />
                  <div className="pass-gp flex">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={userData.password}
                      onChange={handleChange}
                      required
                    />
                    <img src={eyeimg} alt="Show password" />
                  </div>
                  <button className="form-sbmt-btn" type="submit">
                    Sign In
                  </button>
                  <div className="flex btn-flexx extra-gappp">
                  <button className="form-sbmt-btn-small" type="submit">
                    Sign In
                  </button>
                  <span onClick={switchToSignUp}>or, Create Account</span>
                  </div>
                </form>
                <div className="flex btn-gp">
                  <button className="btn-face flex">
                    <img src={facebook} alt="Facebook" />
                    <span>Sign In with Facebook</span>
                  </button>
                  <button className="btn-goog flex">
                    <img src={google} alt="Google" />
                    <span>Sign In with Google</span>
                  </button>
                </div>
                <div className="forgott">
                  <p>Forgot Password?</p>
                </div>
              </>
            )}
          </div>
          <div className="form-cont-right flex">
            <div className="form-cont-right-top">
              {formType === "signup" ? (
                <p>
                  Already have an account?{" "}
                  <span className="highlight cursor-point" onClick={switchToSignIn}>
                    Sign In
                  </span>
                </p>
              ) : (
                <p>
                  Don't have an account?{" "}
                  <span className="highlight cursor-point" onClick={switchToSignUp}>
                    Sign Up
                  </span>
                </p>
              )}
            </div>
            <img src={formimg} alt="Form" />
            <p>
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;