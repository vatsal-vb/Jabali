import { useState , useEffect } from "react";
import logo from "../../Assets/Logo.png";
import image from "../../Assets/Logo.png";
import "./Landing.css"

const LandingPage = () => {

  const [activeSlide, setActiveSlide] = useState(1);
  const [email, setEmail] = useState("");

  const handleBulletClick = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const images = document.querySelectorAll(".image");
    const textSlider = document.querySelector(".text-group");
    const bullets = document.querySelectorAll(".bullets span");

    images.forEach((img, index) => {
      if (index + 1 === activeSlide) {
        img.classList.add("show");
      } else {
        img.classList.remove("show");
      }
    });

    textSlider.style.transform = `translateY(${-(activeSlide - 1) * 2.2}rem)`;

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
    <main className="main">

      <div className="box">

        <div className="inner-box">

          <div className="forms-wrap">

            <form action="index.html" autoComplete="off" className="sign-in-form">

              <div className="logo">

                <img src={logo} alt="Jabali" />

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

          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img
                src={image}
                className="image img-1 show"
                alt=""
              />
              <img
                src={image}
                className="image img-2"
                alt=""
              />
              <img
                src={image}
                className="image img-3"
                alt=""
              />
            </div>
            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Example Text</h2>
                  <h2>Doler Sit Amet</h2>
                  <h2>Lorem Ipsum</h2>
                </div>
              </div>
              <div className="bullets">
                <span
                  className={`active ${activeSlide === 1 ? "active" : ""}`}
                  onClick={() => handleBulletClick(1)}
                  data-value="1"
                ></span>
                <span
                  className={`active ${activeSlide === 2 ? "active" : ""}`}
                  onClick={() => handleBulletClick(2)}
                  data-value="2"
                ></span>
                <span
                  className={`active ${activeSlide === 3 ? "active" : ""}`}
                  onClick={() => handleBulletClick(3)}
                  data-value="3"
                ></span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </main>
  )
}

export default LandingPage