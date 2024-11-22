import "../../components/Background/background.styles.scss";

const Background = () => {
  return (
    <section id="background" className="section background flex">
      <div className="section__container fs-700">
        <span className="highlight">
          I'm currently a student at{" "}
          <a className="light" href="" target="_blank">
            SCHOOL_NAME
          </a>
          . My expected graduation date is in 2025.
        </span>
        <span className="highlight">
          As a passionate person who loves CS, I enjoy learning about Software
          Engineering.
        </span>
        <span className="highlight">
          I hope I can take part in the{" "}
          <span className="light">engineering</span> and
          <span className="light"> designing</span> spectrum — a combination of
          technical knowledge with my creative vision to design and implement
          solutions that fit customer needs.
        </span>
      </div>
    </section>
  );
};

export default Background;