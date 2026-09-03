import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);

  const [user, setUser] = useState(null);


  // =========================================================
  // LOAD USER
  // =========================================================

  useEffect(() => {

    const loadUser = () => {

      const storedUser =
        localStorage.getItem("ironfitUser");


      if (storedUser) {

        try {

          setUser(
            JSON.parse(storedUser)
          );

        } catch (error) {

          console.log(
            "User data error:",
            error
          );

          localStorage.removeItem(
            "ironfitUser"
          );

          setUser(null);
        }

      } else {

        setUser(null);

      }
    };


    // LOAD USER WHEN HEADER STARTS

    loadUser();


    // LISTEN FOR LOGIN / LOGOUT

    window.addEventListener(
      "ironfitUserChanged",
      loadUser
    );


    // CLEANUP

    return () => {

      window.removeEventListener(
        "ironfitUserChanged",
        loadUser
      );

    };

  }, []);


  // =========================================================
  // CLOSE MENU
  // =========================================================

  const handleClick = () => {

    setMenuOpen(false);

    setProfileOpen(false);

  };


  // =========================================================
  // LOGOUT
  // =========================================================

  const handleLogout = () => {

    localStorage.removeItem(
      "ironfitUser"
    );


    setUser(null);


    // UPDATE HEADER

    window.dispatchEvent(
      new Event("ironfitUserChanged")
    );


    setProfileOpen(false);

    setMenuOpen(false);

  };


  // =========================================================
  // USER INITIALS
  // =========================================================

  const getInitials = () => {

    if (!user?.name) {

      return "U";

    }


    return user.name

      .split(" ")

      .map((name) =>
        name.charAt(0)
      )

      .slice(0, 2)

      .join("")

      .toUpperCase();

  };
  const getProfileImageUrl = (imagePath) => {
  if (!imagePath) return null;

  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  return `http://localhost:3040${imagePath}`;
};



  return (

    <header className="site-header">


      {/* =====================================================
          HEADER CONTAINER
      ===================================================== */}

      <div className="site-header__container">


        {/* LOGO */}

        <Link
          to="/"
          className="site-header__logo"
          onClick={handleClick}
        >

          IRON<span>FIT</span>

        </Link>


        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        <nav className="site-header__nav">


          {/* HOME */}

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `site-header__link ${
                isActive
                  ? "site-header__link--active"
                  : ""
              }`
            }
            onClick={handleClick}
          >
            Home
          </NavLink>


          {/* ABOUT */}

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `site-header__link ${
                isActive
                  ? "site-header__link--active"
                  : ""
              }`
            }
            onClick={handleClick}
          >
            About
          </NavLink>


          {/* PROGRAMS */}

          <NavLink
            to="/programs"
            className={({ isActive }) =>
              `site-header__link ${
                isActive
                  ? "site-header__link--active"
                  : ""
              }`
            }
            onClick={handleClick}
          >
            Programs
          </NavLink>


          {/* TRAINERS */}

          <NavLink
            to="/trainers"
            className={({ isActive }) =>
              `site-header__link ${
                isActive
                  ? "site-header__link--active"
                  : ""
              }`
            }
            onClick={handleClick}
          >
            Trainers
          </NavLink>


          {/* MEMBERSHIP */}

          <NavLink
            to="/membership"
            className={({ isActive }) =>
              `site-header__link ${
                isActive
                  ? "site-header__link--active"
                  : ""
              }`
            }
            onClick={handleClick}
          >
            Membership
          </NavLink>


          {/* GALLERY */}

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `site-header__link ${
                isActive
                  ? "site-header__link--active"
                  : ""
              }`
            }
            onClick={handleClick}
          >
            Gallery
          </NavLink>


          {/* CONTACT */}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `site-header__link ${
                isActive
                  ? "site-header__link--active"
                  : ""
              }`
            }
            onClick={handleClick}
          >
            Contact
          </NavLink>


          {/* =================================================
              DESKTOP USER PROFILE
          ================================================= */}

          {user ? (

            <div className="site-header__profile">


              {/* PROFILE BUTTON */}

              <button
                type="button"
                className="site-header__profile-button"
                onClick={() =>
                  setProfileOpen(
                    !profileOpen
                  )
                }
              >

               <span className="site-header__profile-image">
  {user?.profileImage ? (
    <img
      src={getProfileImageUrl(user.profileImage)}
      alt={user.name}
      className="site-header__profile-image-img"
    />
  ) : (
    getInitials()
  )}
</span>

                <span className="site-header__profile-name">

                  {user.name}

                </span>


                <span
                  className={`site-header__profile-arrow ${
                    profileOpen
                      ? "site-header__profile-arrow--open"
                      : ""
                  }`}
                >

                  ↓

                </span>

              </button>


              {/* DESKTOP PROFILE DROPDOWN */}

              {profileOpen && (

                <div className="site-header__profile-dropdown">


                  {/* PROFILE INFO */}

                  <div className="site-header__profile-info">

                    <span className="site-header__profile-image site-header__profile-image--large">

                      {user?.profileImage ? (
    <img
      src={getProfileImageUrl(user.profileImage)}
      alt={user.name}
      className="site-header__profile-image-img"
    />
  ) : (
    getInitials()
  )}

                    </span>
                    


                    <div>

                      <strong>
                        {user.name}
                      </strong>

                      <small>
                        {user.email}
                      </small>

                    </div>

                  </div>


                  <div className="site-header__profile-divider"></div>


                  {/* MY PROFILE */}

                  <Link
                    to="/profile"
                    className="site-header__profile-item"
                    onClick={handleClick}
                  >

                    <span>
                      My Profile
                    </span>

                    <span>
                      →
                    </span>

                  </Link>


                  {/* MEMBERSHIP */}

                  <Link
                    to="/membership"
                    className="site-header__profile-item"
                    onClick={handleClick}
                  >

                    <span>
                      Membership
                    </span>

                    <span>
                      →
                    </span>

                  </Link>


                  {/* SETTINGS */}

                  <Link
                    to="/settings"
                    className="site-header__profile-item"
                    onClick={handleClick}
                  >

                    <span>
                      Settings
                    </span>

                    <span>
                      →
                    </span>

                  </Link>


                  {/* LOGOUT */}

                  <button
                    type="button"
                    className="site-header__profile-item site-header__profile-logout"
                    onClick={handleLogout}
                  >

                    <span>
                      Logout
                    </span>

                    <span>
                      →
                    </span>

                  </button>

                </div>

              )}

            </div>

          ) : (

            <Link
              to="/login"
              className="site-header__login"
              onClick={handleClick}
            >

              Login

            </Link>

          )}

        </nav>


        {/* ===================================================
            MOBILE MENU BUTTON
        =================================================== */}

        <button
          type="button"
          className={`site-header__menu ${
            menuOpen
              ? "site-header__menu--open"
              : ""
          }`}
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          <span></span>

          <span></span>

        </button>

      </div>


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <nav
        className={`site-header__mobile-nav ${
          menuOpen
            ? "site-header__mobile-nav--open"
            : ""
        }`}
      >


        {/* ===================================================
            MOBILE USER PROFILE
        =================================================== */}

        {user ? (

          <div className="site-header__mobile-profile">


            {/* USER HEADER */}

            <button
              type="button"
              className="site-header__mobile-profile-user"
              onClick={() =>
                setProfileOpen(
                  !profileOpen
                )
              }
            >

              <span className="site-header__profile-image">

                {getInitials()}
                

              </span>


              <span className="site-header__mobile-profile-details">

                <strong>
                  {user.name}
                </strong>

                <small>
                  {user.email}
                </small>

              </span>


              <span
                className={`site-header__mobile-profile-arrow ${
                  profileOpen
                    ? "site-header__mobile-profile-arrow--open"
                    : ""
                }`}
              >

                ↓

              </span>

            </button>


            {/* MOBILE PROFILE DROPDOWN */}

            {profileOpen && (

              <div className="site-header__mobile-profile-menu">


                {/* MY PROFILE */}

                <Link
                  to="/profile"
                  className="site-header__mobile-profile-item"
                  onClick={handleClick}
                >

                  <span>
                    My Profile
                  </span>

                  <span>
                    →
                  </span>

                </Link>


                {/* MEMBERSHIP */}

                <Link
                  to="/membership"
                  className="site-header__mobile-profile-item"
                  onClick={handleClick}
                >

                  <span>
                    Membership
                  </span>

                  <span>
                    →
                  </span>

                </Link>


                {/* SETTINGS */}

                <Link
                  to="/settings"
                  className="site-header__mobile-profile-item"
                  onClick={handleClick}
                >

                  <span>
                    Settings
                  </span>

                  <span>
                    →
                  </span>

                </Link>


                {/* LOGOUT */}

                <button
                  type="button"
                  className="site-header__mobile-profile-item"
                  onClick={handleLogout}
                >

                  <span>
                    Logout
                  </span>

                  <span>
                    →
                  </span>

                </button>

              </div>

            )}

          </div>

        ) : (

          <Link
            to="/login"
            className="site-header__mobile-profile-login"
            onClick={handleClick}
          >

            Login

            <span>
              →
            </span>

          </Link>

        )}


        {/* ===================================================
            HOME
        =================================================== */}

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `site-header__mobile-link ${
              isActive
                ? "site-header__mobile-link--active"
                : ""
            }`
          }
          onClick={handleClick}
        >

          <span>
            Home
          </span>

          <span>
            →
          </span>

        </NavLink>


        {/* ABOUT */}

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `site-header__mobile-link ${
              isActive
                ? "site-header__mobile-link--active"
                : ""
            }`
          }
          onClick={handleClick}
        >

          <span>
            About
          </span>

          <span>
            →
          </span>

        </NavLink>


        {/* PROGRAMS */}

        <NavLink
          to="/programs"
          className={({ isActive }) =>
            `site-header__mobile-link ${
              isActive
                ? "site-header__mobile-link--active"
                : ""
            }`
          }
          onClick={handleClick}
        >

          <span>
            Programs
          </span>

          <span>
            →
          </span>

        </NavLink>


        {/* TRAINERS */}

        <NavLink
          to="/trainers"
          className={({ isActive }) =>
            `site-header__mobile-link ${
              isActive
                ? "site-header__mobile-link--active"
                : ""
            }`
          }
          onClick={handleClick}
        >

          <span>
            Trainers
          </span>

          <span>
            →
          </span>

        </NavLink>


        {/* MEMBERSHIP */}

        <NavLink
          to="/membership"
          className={({ isActive }) =>
            `site-header__mobile-link ${
              isActive
                ? "site-header__mobile-link--active"
                : ""
            }`
          }
          onClick={handleClick}
        >

          <span>
            Membership
          </span>

          <span>
            →
          </span>

        </NavLink>


        {/* GALLERY */}

        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `site-header__mobile-link ${
              isActive
                ? "site-header__mobile-link--active"
                : ""
            }`
          }
          onClick={handleClick}
        >

          <span>
            Gallery
          </span>

          <span>
            →
          </span>

        </NavLink>


        {/* CONTACT */}

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `site-header__mobile-link ${
              isActive
                ? "site-header__mobile-link--active"
                : ""
            }`
          }
          onClick={handleClick}
        >

          <span>
            Contact
          </span>

          <span>
            →
          </span>

        </NavLink>

      </nav>

    </header>

  );

};


export default Header;