import styled from 'styled-components';

// Container for the entire footer
const FooterContainer = styled.footer`
  background-color: #f3f8ff;
  padding: 40px 20px;
`;

// Subscription section
const SubscriptionSection = styled.div`
  text-align: center;
  padding: 40px 0;
  background-color: #e0efff;
  color: #000;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 20px;
  }

  input {
    padding: 10px;
    width: 250px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    background-color: #000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }
`;

// The main footer content (links and social icons)
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0;
  background-color: #fff;
`;

// Column for each section in the footer (About, Customer Service, etc.)
const FooterColumn = styled.div`
  flex: 1;
  min-width: 150px;
  margin: 10px;
  color: #000;

  h3 {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 8px;
    }

    a {
      color: #000;
      text-decoration: none;
      font-size: 14px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

// Social icons container
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  a {
    margin: 0 10px;
    font-size: 24px;
    color: #000;
    text-decoration: none;

    &:hover {
      color: #0073e6; /* Hover color for social icons */
    }
  }
`;

// Main Footer Component
const Footer = () => {
  return (
    <FooterContainer>
    
      <SubscriptionSection>
        <h2>Join Our List, Get 10% Off</h2>
        <p>
          Sign up for Zappos emails—new subscribers get 10% off a future order!
          Plus, get early access to sales, coupons, and more. (One code per email address.)
        </p>
        <input type="email" placeholder="Email Address" />
        <button>Join the Party</button>
      </SubscriptionSection>
    
      <FooterContent>
        <FooterColumn>
          <h3>About Zappos</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Zappos ONE</a></li>
            <li><a href="#">Zappos for Good</a></li>
            <li><a href="#">Zappos at Work</a></li>
            <li><a href="#">Get the Zappos Mobile App</a></li>
            <li><a href="#">Amazon Prime Benefits</a></li>
          </ul>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Info</a></li>
            <li><a href="#">¿Ayuda en español?</a></li>
            <li><a href="#">Shipping And Returns Policy</a></li>
            <li><a href="#">About Proposition 65</a></li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Measurement Guide</a></li>
            <li><a href="#">Size Conversion Chart</a></li>
            <li><a href="#">Measure Your Bra Size</a></li>
            <li><a href="#">Associates Program</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Press Kit & Brand Inquiries</a></li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h3>Explore Zappos</h3>
          <ul>
            <li><a href="#">Brands</a></li>
            <li><a href="#">Clothing</a></li>
            <li><a href="#">The Style Room</a></li>
            <li><a href="#">Eyewear</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Running</a></li>
          </ul>
        </FooterColumn>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
