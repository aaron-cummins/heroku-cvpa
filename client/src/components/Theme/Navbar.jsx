import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import { LogOut } from "../../utilities/Login_utiles";
import { useNavigate } from "react-router-dom";
import img from "../../assets/images/faces/1.jpg";

const Navbar = ({ usuario }) => {
  const { setLogueado } = useStateContext();
  const navega = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    LogOut();
    setLogueado(false);
    navega("/");
  };

  return (
    <header className="mb-3">
      <nav className="navbar navbar-expand navbar-light ">
        <div className="container-fluid">
          <a
            href="#"
            className="burger-btn d-block"
            onClick={() =>
              document.getElementById("sidebar").classList.toggle("active")
            }>
            <i className="bi bi-justify fs-3"></i>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown me-1">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <i className="bi bi-envelope bi-sub fs-4 text-gray-600"></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownMenuButton">
                  <li>
                    <h6 className="dropdown-header">Mail</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      No new mail
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown me-3">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <i className="bi bi-bell bi-sub fs-4 text-gray-600"></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownMenuButton">
                  <li>
                    <h6 className="dropdown-header">Notifications</h6>
                  </li>
                  <li>
                    <a className="dropdown-item">No notification available</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="dropdown">
              <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="user-menu d-flex">
                  <div className="user-name text-end me-3">
                    <h6 className="mb-0 text-gray-600">{usuario?.nombres}</h6>
                    <p className="mb-0 text-sm text-gray-600">
                      {usuario?.profesion}
                    </p>
                  </div>
                  <div className="user-img d-flex align-items-center">
                    <div className="avatar avatar-md">
                      <img src={img} alt="..." />
                    </div>
                  </div>
                </div>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton">
                <li>
                  <h6 className="dropdown-header">
                    Hola, {usuario?.nombres + " " + usuario?.apellidos}
                  </h6>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="icon-mid bi bi-person me-2"></i> Perfil
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => handleLogOut(e)}>
                    <i className="icon-mid bi bi-box-arrow-left me-2"></i>
                    Salir
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
