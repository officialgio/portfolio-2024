import { Fragment } from "react/jsx-runtime";
import BackgroundSection from "../../components/Background/background.component";
import { Inner } from "../../components/Inner/inner.component";
import "../home/home.styles.scss";

const Home = () => {
  return (
    <Inner>
      <section className="section home-intro about-image">
        <div className="container medium">
          <div className="row">
            {/* Small Intro */}
            <div className="flex-col">
              <h4 className="spna-lines animate fs-500 ">
                Hi, I'm Giovanny! I'm a Software Engineer.
              </h4>
            </div>
            {/* Intro Image */}
            <div className="flex-col">
              <div className="single-about-image once-in">
                <div className="overlay overlay-image blur-load">
                  <img
                    data-scroll
                    data-scroll-speed="0.1"
                    className="overlay overlay-image"
                    src="https://freenaturestock.com/wp-content/uploads/freenaturestock-2268-768x1152.jpg"
                    alt="headshot"
                  />
                </div>
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BackgroundSection />
    </Inner>
  );
};

export default Home;
