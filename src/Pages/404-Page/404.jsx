import "./404.css";
import ghost from "../../Assets/ghost-img.png";

const ErrorPage = () => {

  document.addEventListener('contextmenu', event => event.preventDefault());

  return (
        <div className="main2">
            <section className="home">
                <div className="home__container container">
                    <div className="home__data">
                        <span className="home__subtitle">Error 404</span>
                        <h1 className="home__title">Hey Buddy</h1>
                        <p className="home__description">
                            We can&apos;t seem to find the page <br /> you are looking for.
                        </p>
                        <a href="/" className="home__button">
                            Go Home
                        </a>
                    </div>

                    <div className="home__img">
                        <img src={ghost} alt="" />
                        <div className="home__shadow"></div>
                    </div>
                </div>
            </section>
        </div>

  )
}

export default ErrorPage;