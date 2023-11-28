import { useState, useRef, useEffect } from "react";
import Typed from "typed.js";
import logo from "../../Assets/Logo.jpeg";
import "./Hero.css";

const Hero = () => {
  const [showEmailInput, setShowEmailInput] = useState(false);

  const el = useRef(null);

  useEffect(() => {
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

      <form>
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
          type="submit"
          value="Get in Touch"
          className="btn"
          onClick={() => setShowEmailInput(true)}
          id="btn"
        />
      </form>
    </div>
  );
};

export default Hero;