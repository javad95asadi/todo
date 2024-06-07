import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Navigation = () => {

  const [currentDay, setCurrentDay] = useState('');
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = weekdays[today.getDay()];
    const dateOfMonth = today.getDate();
    setCurrentDay(`${dayOfWeek}, June ${dateOfMonth}`);
  }, []);
  return (
    <>
      <nav className="navbar nav navbar-expand-lg shadow-none mt-2">
          <p className="navbar-brand  mb-0" >
            <p className="font_15 m-0 semibold">
              {currentDay}
            </p>

          </p>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mt-3 mt-md-0" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item mx-2">
                <div className="vert_line">

                </div>
              </li>
              <li className="nav-item mx-md-1 mx-3 my-2 my-md-0">
                <NavLink
                  to="/"
                  className={` nav-link  d-flex  font_13  align-items-center `}
                  type="submit"
                >
                  <i className={`fi fi-br-house-chimney-blank   font_14 d-flex  align-items-center ${currentPath === '/' ? 'color_main' : ''}`}></i>
                  <p className={`m-0 mx-2 d-flex font_13 semibold ${currentPath === '/' ? 'active' : ''}`}>HOME</p>
                </NavLink>
              </li>
              <li className="nav-item  mx-3  my-2 m-md-0">
                <NavLink
                  to="/task"
                  className={` nav-link  d-flex  font_13  align-items-center ${currentPath === '/task' ? 'active' : ''}`}

                  type="submit"
                >
                  <i className={`fi fi-br-list-check   font_14 d-flex  align-items-center ${currentPath === '/task' ? 'color_main' : ''}`}></i>
                  <p className={`m-0 mx-2 d-flex font_13 semibold ${currentPath === '/task' ? 'active' : ''}`}>TASK</p>

                </NavLink>
              </li>
            </ul>
          </div>
          <div className="d-none d-lg-flex " role="search">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">

                <NavLink
                  to="#" 
                  className=" col-12  sec_back_color py-2 btn btn-sm bor_6 font_15 py-2    align-items-center d-flex justify-content-center"
                  type="submit"
                >
                  <i className="fi fi-br-settings-sliders font_14 d-flex  align-items-center m-1"></i>

                </NavLink>
              </li>
              <li className="nav-item">

                <NavLink
                  to="#"
                  className=" col-12  sec_back_color py-2 btn btn-sm bor_6 font_15 py-2    align-items-center d-flex justify-content-center"
                  type="submit"
                >
                  <i className="fi fi-br-circle-user font_14 d-flex  align-items-center m-1"></i>

                </NavLink>
              </li>
            </ul>
          </div>
      </nav>
    </>
  );
};
export default Navigation;
