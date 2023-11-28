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
        <button className="input btn" id="btn"><a href="mailto:contact@jabali.ai">Get in touch</a></button>
      </form>
    </div>
  );
};

export default Hero;