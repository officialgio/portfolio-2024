import { Fragment } from "react/jsx-runtime";
import BackgroundSection from "../../components/section-background/section-background.component";

const Home = () => {
  return (
    <Fragment>
      <section className="section home-intro about-image">
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <h4 className="spna-lines animate">
                Hi, I'm Giovanny! I'm a Software Engineer.
              </h4>
            </div>
            <div className="flex-col">
              <div className="single-about-image once-in">
                <div className="overlay overlay-image blur-load">
                  <img
                    className="overlay overlay-image"
                    src=""
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
    </Fragment>
  );
};

export default Home;
