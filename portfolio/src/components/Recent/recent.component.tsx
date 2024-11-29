import { useRef } from "react";
import "../Recent/recent.styles.scss";

const Recent = () => {
  const pinContainerRef = useRef(null);

  return (
    <div ref={pinContainerRef} className="section recent">
      <div className="container">
        <h2 className="fs-800">
          Currently I work in
          <span className="animate-dot">.</span>
          <span className="animate-dot">.</span>
          <span className="animate-dot">.</span>
        </h2>
      </div>
    </div>
  );
};

export default Recent;
