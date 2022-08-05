import React from "react";
import "./AllClients.css";
import ClientsCard from "./ClientsCard";
import Sidebar from "../../components/Sidebar";
import styles from "./AllClients.css";

const menu_toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

if ((menu_toggle, sidebar)) {
  menu_toggle.addEventListener("click", () => {
    console.log("clickedhjbhjb");
    menu_toggle.classList.toggle("is-active");
    sidebar.classList.toggle("is-active");
  });
}

const AllClients = () => {
  return (
    <>
      <div className="app">
        <Sidebar />

        <div className="container mb-5" style={{ backgroundColor: "#F2F6FA" }}>
          <div className="row mt-2">
            <div className="col">
              <h3>Clients</h3>
            </div>

            <div className="col d-flex align-items-end justify-content-end mb-2">
              <nav className="navbar navbar-expand-lg profile-navbar">
                <div className="container-fluid">
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
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#"
                        >
                          All Clients
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/newSignUPs">
                          New Sign-Ups
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/verifiedClients">
                          Verified Clients
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/unverified">
                          Unerified
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/inactive">
                          Inactive
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-lg-6">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="E-commerce" btn3="New" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Gametech" btn3="Inactive" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Design" btn3="Backlog" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Design" btn3="Backlog" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Fintech" btn3="Backlog" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Design" btn3="New" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Design" btn3="Backlog" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Design" btn3="Backlog" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Fintech" btn3="Backlog" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Design" btn3="New" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Design" btn3="Backlog" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Design" btn3="Backlog" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Fintech" btn3="Backlog" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Design" btn3="New" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Design" btn3="Backlog" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Design" btn3="Backlog" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Fintech" btn3="Backlog" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Design" btn3="New" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Design" btn3="Backlog" />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-center">
              <ClientsCard btn2="Design" btn3="Backlog" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllClients;
