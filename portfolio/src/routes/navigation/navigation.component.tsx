import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="flex">
        <a href="">
          <h2>
            <Link to="about">@Gio </Link>
          </h2>
        </a>
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
