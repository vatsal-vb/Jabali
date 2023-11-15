import "./Landing.css";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Team from "../../Components/Team/Team";
import Investor from "../../Components/Investors/Investor";
import Footer from "../../Components/Footer";

const Landing = () => {
  return (
    <div className="Landing">

       <Hero />

       <About />

       <Team />

       <Investor />

       <Footer />


    </div>
  )
}

export default Landing