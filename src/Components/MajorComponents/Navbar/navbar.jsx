import React, { useState } from "react";
import Logo from "../../../assests/images/Azuki Logo White.svg";
import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import { GiSailboat } from "react-icons/gi";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [check, setCheck] = useState(0);
  let handleNavBtn = () => {
    setCheck(1);
  };
  let handleClose = () => {
    setCheck(0);
  };
  return (
    <div className="fixed-top py-3 webNav">
      {check === 0 && (
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid px-md-4 px-2">
            <Link
              to="/"
              className="mx-2 mt-1 logo-section d-flex justify-content-center align-items-center rounded"
            >
              <img src={Logo} className="logo-img" alt="" />
            </Link>
            <button
              className="ml-auto d-lg-none d-block px-3 py-1 navBtn"
              onClick={handleNavBtn}
            >
              <FaBars />
            </button>
            <ul className="nav ml-auto justify-content-between d-lg-flex d-none">
              <li className="nav-item mr-2">
                <Link to="/" className="nav-link active" aria-current="page">
                  HOME
                </Link>
              </li>
              <li className="nav-item mr-2">
                <Link className="nav-link active" aria-current="page">
                  GALLERY
                </Link>
              </li>
              <li className="nav-item mr-2">
                <Link
                  to="/garden"
                  className="nav-link active"
                  aria-current="page"
                >
                  THE GARDEN
                </Link>
              </li>
              <li className="nav-item mr-2">
                <Link to="/update" className="nav-link active">
                  UPDATES
                </Link>
              </li>
              <li className="nav-item mr-2">
                <Link to="/manifesto" className="nav-link active">
                  MANIFESTO
                </Link>
              </li>
              <li className="nav-item mr-2">
                <Link to="/mindmap" className="nav-link active">
                  MINDMAP
                </Link>
              </li>
              <li className="nav-item position-relative mr-2">
                <Link className="nav-link active">SHOP</Link>
                <p className="soon bg-white text-danger px-1">SOON</p>
              </li>
              <li className="nav-item mr-2">
                <Link className="nav-link active icon">
                  <BsTwitter />
                </Link>
              </li>
              <li className="nav-item mr-2">
                <Link className="nav-link active icon">
                  <FaGamepad />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active icon">
                  <GiSailboat className="bg-dark rounded-circle p-1 text-white" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
      {check === 1 && (
        <div className="py-3 mobNavbar" id="mob">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid px-md-4 px-2">
              <Link
                to="/"
                className="mx-2 mt-1 logo-section d-flex justify-content-center align-items-center rounded"
              >
                <img src={Logo} className="logo-img" alt="" />
              </Link>
              <GrFormClose
                className="mr-2 bg-white close"
                onClick={handleClose}
              />
            </div>
            <ul className="nav w-100 mx-md-4 mx-2 mt-3 pl-2 d-flex flex-column">
              <li className="h5 pb-3 mobList border-bottom">
                <Link className="text-dark">HOME</Link>
              </li>
              <li className="h5 pb-3 d-block mobList mt-2 border-bottom">
                <Link className="text-dark">GALLERY</Link>
              </li>
              <li className="h5 pb-3 d-block mobList mt-2 border-bottom">
                <Link className="text-dark">THE GARDEN</Link>
              </li>
              <li className="h5 pb-3 d-block mobList mt-2  border-bottom">
                <Link className="text-dark">UPDATES</Link>
              </li>
              <li className="h5 pb-3 d-block mobList mt-2 border-bottom">
                <Link className="text-dark">MANIFESTO</Link>
              </li>
              <li className="h5 pb-3 d-block mobList mt-2 border-bottom">
                <Link className="text-dark">MINDMAP</Link>
              </li>
              <li className="h5 pb-3 d-block mobList mt-2 border-bottom shop">
                <Link className="d-flex justify-content-between align-items-center text-dark">
                  SHOP{" "}
                  <span className="text-danger bg-white px-2 py-1 mob-soon">
                    COMING SOON
                  </span>
                </Link>
              </li>
              <li className="h5 pb-3 d-block mobList mt-2 border-bottom">
                <a
                  className="d-flex justify-content-between align-items-center text-dark"
                  href="#"
                >
                  TWITTER{" "}
                  <span className="">
                    <BsTwitter />
                  </span>
                </a>
              </li>
              <li className="h5 pb-3 d-block mobList mt-2 border-bottom">
                <a
                  className="d-flex justify-content-between align-items-center text-dark"
                  href="#"
                >
                  DISCORD{" "}
                  <span className="">
                    <FaGamepad />
                  </span>
                </a>
              </li>
              <li className="h5 d-block mobList mt-2">
                <a
                  className="d-flex justify-content-between align-items-center text-dark"
                  href="#"
                >
                  OPENSEA{" "}
                  <span className="rounded-circle bg-dark text-white d-flex justify-content-center align-items-center">
                    <GiSailboat />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
