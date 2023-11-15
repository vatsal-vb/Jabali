import React, { useState } from "react";
import Typed from "typed.js";
import logo from "../../Assets/Logo.jpeg";
import "./Hero.css";

const Hero = () => {

  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleGetNotified = () => {
    setShowEmailInput(true);
  };

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Example Tagline"],
      typeSpeed: 200,
      backSpeed: 200,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="Hero">

      <img src={logo} alt="logo" className="logo" />

      <span className="tagline" ref={el} />

      <form action="">
        {showEmailInput && (
          <input
            type="email"
            autoComplete="off"
            placeholder="Enter Your Email"
            className="Email-Form"
            required
          />
        )}
        <input
          value="Get in Touch"
          type="submit"
          className="btn"
          onClick={handleGetNotified}
          id="btn"
        />
      </form>

    </div>
  )
}

export default Hero