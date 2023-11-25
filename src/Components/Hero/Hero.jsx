import React, { useState } from "react";
import Typed from "typed.js";
import axios from "axios"; 

import logo from "../../Assets/Logo.jpeg";
import "./Hero.css";

const Hero = () => {
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleGetNotified = async (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("email-input");
    const email = emailInput.value;

    // Replace'YOUR_MAILCHIMP_AUDIENCE_ID' with your actual Mailchimp API key and audience ID
    const apiUrl = `https://us12.api.mailchimp.com/3.0/lists/YOUR_MAILCHIMP_AUDIENCE_ID/members`;

    try {
      const response = await axios.post(
        apiUrl,
        {
          email_address: email,
          status: "subscribed",
        },
        {
          headers: {
            Authorization: "Bearer 15fa0a44a9d3f638c5ab15d057e60f1b-us12",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Mailchimp response:", response.data);
    } catch (error) {
      console.error("Error subscribing to Mailchimp:", error.response.data);
    }
  };

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Your Imagination, Our Engine"],
      typeSpeed: 30,
      backSpeed: 60,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="Hero">
      <img src={logo} alt="logo" className="logo" />

      <span className="tagline" ref={el} />

      <form action="" onSubmit={handleGetNotified}>
        {showEmailInput && (
          <input
            type="email"
            autoComplete="off"
            placeholder="Enter Your Email"
            className="Email-Form"
            required
            id="email-input"
          />
        )}
        <input
          value="Get in Touch"
          type="submit"
          className="btn"
          onClick={() => setShowEmailInput(true)}
          id="btn"
        />
      </form>
    </div>
  );
};

export default Hero;