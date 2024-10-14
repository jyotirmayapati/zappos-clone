import React from "react";
import "../styles/SignInPopup.css";

const SignInPopup = ({ onClose, onCreateAccount }) => {
  // Redirect to Zappos Sign-In page
  const handleZapposSignIn = () => {
    window.location.href = "/signin"; // Assuming "/signin" is the route to the full sign-in page
  };
  
  const handleCreateAccount=()=>{
    window.location.href ="/create-account"
  }

  // Redirect to Google Sign-In (simplified)
  const handleGoogleSignIn = () => {
    window.location.href = "https://accounts.google.com/signin";
  };

  // Redirect to Amazon Sign-In (simplified)
  const handleAmazonSignIn = () => {
    window.location.href = "https://www.amazon.com/ap/signin";
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        {/* Title */}
        <h2 className="popup-title">Sign in to Zappos</h2>

        {/* Horizontal Line */}
        <hr className="horizontal-line" />

        {/* Flex Container */}
        <div className="popup-flex-container">
          {/* Left side: Buttons */}
          <div className="button-container">
            <button className="sign-in-btn zappos-btn" onClick={handleZapposSignIn}>
              <img
                src="https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg"
                alt="Zappos Logo"
                className="icon"
              />
              Sign in with Zappos
            </button>

            <button className="sign-in-btn amazon-btn" onClick={handleAmazonSignIn}>
              <img
                src="https://m.media-amazon.com/images/I/51HCHFclmmL.jpg"
                alt="Amazon Logo"
                className="icon"
              />
              Sign in with Amazon
            </button>

            <button className="sign-in-btn google-btn" onClick={handleGoogleSignIn}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrISl_jB0Un7OZOknwQmSF5jcvQR207EKN3g&s"
                alt="Google Logo"
                className="icon"
              />
              Sign in with Google
            </button>

            {/* Divider */}
            <div className="or">
              <hr className="horizontal-line1" />
              <h4>or</h4>
              <hr className="horizontal-line1" />
            </div>

            <button className="create-account-btn" onClick={handleCreateAccount}>
              Create your Zappos Account
            </button>
          </div>

          {/* Vertical Line */}
          <div className="vertical-line"></div>

          {/* Right side: Benefits section */}
          <div className="benefits-section">
            <p style={{ fontWeight: "bolder" }}>
              By logging in with Amazon, you may be eligible for additional
              Prime benefits like FREE Upgraded Shipping. Then, join Zappos VIP
              for additional Prime-linked VIP perks:
            </p>
            <ul>
              <li>
                If you are an Amazon Prime Member, sign in with Amazon to
                qualify for free upgraded shipping!
              </li>
              <li>Get FREE Expedited Shipping</li>
              <li>Earn 2 Points for Every $1 Spent</li>
              <li>Receive Bonus Points on Select Brands</li>
              <li>Redeem Points for VIP Codes</li>
            </ul>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="horizontal-line" />

        {/* Terms and Conditions */}
        <p className="terms">
          By signing in, you agree to Zappos'{" "}
          <a href="#">Terms and Conditions</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default SignInPopup;
