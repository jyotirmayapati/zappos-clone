import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "../styles/CreateAccount.css"; // Assuming you will create a CSS file for this
import axios from "axios";

const CreateAccountPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Validate password
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      setSuccessMessage(response.data.message);
      setErrorMessage("");

      // Redirect to home page after a short delay
      setTimeout(() => {
        navigate("/"); // Redirect to home page
      }, 2000); // 2 seconds delay to show the success message

      setFormData({ name: "", email: "", password: "", confirmPassword: "" }); // Reset form
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("Server error. Please try again later.");
      }
    }
  };

  return (
    <div className="create-account-container">
      <div className="create-account-box">
        <img
          src="https://m.media-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg"
          alt="Zappos Logo"
          className="create-account-logo"
        />
        <h2 className="create-account-title">Create account</h2>
        
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form className="create-account-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="First and last name"
            className="create-account-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          {/* Email Field */}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="create-account-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          {/* Password Field */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="At least 6 characters"
            className="create-account-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <p className="password-hint">
            <i className="password-info-icon">i</i> Passwords must be at least 6 characters.
          </p>
          
          {/* Re-enter Password */}
          <label htmlFor="confirmPassword">Re-enter password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Re-enter password"
            className="create-account-input"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          
          {/* Submit Button */}
          <button type="submit" className="create-account-submit-btn">
            Create your Zappos account
          </button>
          
          {/* Help Section */}
          <p className="help-text">
            Need additional help? Don’t worry! You can reach us via phone, text, or live chat.
            See <a href="#">here</a> for contact details.
          </p>
          
          {/* Sign-in Link */}
          <p className="sign-in-link">
            Already have an account? <a href="#">Sign in ›</a>
          </p>
        </form>
      </div>
      
      {/* Footer */}
      <footer className="create-account-footer">
        <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a> | <a href="#">Customer Service</a>
      </footer>
    </div>
  );
};

export default CreateAccountPage;
