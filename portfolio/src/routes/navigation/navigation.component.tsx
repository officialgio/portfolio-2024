import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import "../../App.scss";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="flex once-in">
        <Link to="about" className="fs-400">
          <h2 className="logo">@Gio</h2>
        </Link>
      </nav>
      {/* // Burger */}
      <div className="btn btn-hamburger">
        <div
          data-strength="50"
          data-strength-text="25"
          className="btn-click magnetic"
        >
          <div className="btn-fill"></div>
          <div className="btn-bars">
            <div className="header__nav__line1"></div>
            <div className="header__nav__line2"></div>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
