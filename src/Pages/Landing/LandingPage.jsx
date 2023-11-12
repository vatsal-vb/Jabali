import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../Assets/Logo.png";
import image from "../../Assets/Logo.png";
import "./Landing.css";

const LandingPage = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [email, setEmail] = useState("");

  const handleBulletClick = (index) => {
    setActiveSlide(index);
  };

  document.addEventListener('contextmenu', event => event.preventDefault());

  useEffect(() => {
    const images = document.querySelectorAll(".image");
    const bullets = document.querySelectorAll(".bullets span");

    images.forEach((img, index) => {
      if (index + 1 === activeSlide) {
        img.classList.add("show");
      } else {
        img.classList.remove("show");
      }
    });

    bullets.forEach((bull, index) => {
      if (index + 1 === activeSlide) {
        bull.classList.add("active");
      } else {
        bull.classList.remove("active");
      }
    });
  }, [activeSlide]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <motion.main
      className="main"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="box">
        <div className="inner-box">
          <motion.div
            className="forms-wrap"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <form action="index.html" autoComplete="off" className="sign-in-form">
              <div className="logo">
                <motion.img
                  src={logo}
                  alt="Jabali"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                />
                <h4>Jabali</h4>
              </div>
              <div className="heading">
                <h2>Jabali - Coming Soon</h2>
                <h6>Get Notified When We Launch!</h6>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="email"
                    className={`input-field ${email && "active"}`}
                    autoComplete="off"
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <label>Enter Your Email</label>
                </div>
                <input type="submit" value="Get Notified" className="sign-btn" />
              </div>
            </form>
          </motion.div>

          <motion.div
            className="carousel"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
          >
            <div className="images-wrapper">
              <motion.img
                src={image}
                className="image img-1 show"
                alt=""
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              />
              <motion.img
                src={image}
                className="image img-2"
                alt=""
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              />
              <motion.img
                src={image}
                className="image img-3"
                alt=""
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              />
            </div>
              <div className="bullets">
                <motion.span
                  className={`active ${activeSlide === 1 ? "active" : ""}`}
                  onClick={() => handleBulletClick(1)}
                  data-value="1"
                  whileHover={{ scale: 1.2 }}
                ></motion.span>
                <motion.span
                  className={`active ${activeSlide === 2 ? "active" : ""}`}
                  onClick={() => handleBulletClick(2)}
                  data-value="2"
                  whileHover={{ scale: 1.2 }}
                ></motion.span>
                <motion.span
                  className={`active ${activeSlide === 3 ? "active" : ""}`}
                  onClick={() => handleBulletClick(3)}
                  data-value="3"
                  whileHover={{ scale: 1.2 }}
                ></motion.span>
              </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default LandingPage;