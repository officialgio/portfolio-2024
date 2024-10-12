import { Fragment } from "react/jsx-runtime";
import BackgroundSection from "../../components/Background/background.component";
import { Inner } from "../../components/Inner/inner.component";
import "../home/home.styles.scss";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  // wait for all elements to be mounted before doing any animations
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    /**
     * Create a GSAP timeline that animates elements with the .highlight class based on scroll position.
     * Start slightly before the next page. Each .highlight needs to transition to clear light color and then reset (tlHRemove).
     * Ensure that each of these highlights go 1 by 1 (i.e stagger)
     */
    const tlH = gsap.timeline({
      scrollTrigger: {
        trigger: ".background",
        markers: true,
        scrub: true,
        start: "-48%",
        end: "48%",
      },
    });

    tlH.fromTo(
      ".highlight",
      { color: "rgba(255, 255, 255, 0.4)" },
      { color: "rgba(255, 255, 255, 1)", stagger: 1 }
    );
  });
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
