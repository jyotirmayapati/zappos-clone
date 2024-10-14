import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignInPage.css";
import axios from "axios";

const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Store the JWT token
      localStorage.setItem("token", response.data.token);
      setSuccessMessage("Successfully logged in!");
      setErrorMessage("");

      // Redirect to home page after a short delay
      setTimeout(() => {
        navigate("/"); // Redirect to home page
      }, 2000); // 2 seconds delay to show the success message
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setErrorMessage("Invalid credentials. Please try again.");
        } else if (error.response.status === 404) {
          setErrorMessage("Email not found. Please register first.");
        } else {
          setErrorMessage("Server error. Please try again later.");
        }
      } else {
        setErrorMessage("Server error. Please try again later.");
      }
      setSuccessMessage("");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-header">
        <img 
          src="https://m.media-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg" 
          alt="Zappos Logo" 
          className="zappos-logo"
        />
      </div>

      <div className="signin-box">
        <h1>Sign-In</h1>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required
            />
            <button type="button" className="forgot-password" onClick={() => alert("Feature coming soon!")}>
              Forgot password?
            </button>
          </div>

          <button type="submit" className="signin-btn">Sign in</button>

          <div className="stay-signed-in">
            <input type="checkbox" id="staySignedIn" />
            <label htmlFor="staySignedIn">Keep me signed in.</label>
            <span className="details-link">Details</span>
          </div>
        </form>

        <div className="new-to-zappos">
          <span>New to Zappos?</span>
          <button className="create-account-btn" onClick={() => navigate("/create-account")}>
            Create your Zappos account
          </button>
        </div>
      </div>

      <footer className="footer">
        <ul>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Customer Service</a></li>
        </ul>
        <p>&copy; 2009–2023 - Zappos.com LLC or its affiliates</p>
      </footer>
    </div>
  );
};

export default SignInPage;
