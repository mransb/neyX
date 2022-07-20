import React from "react";
import "./Dashboard.css";
import {
  BsFillGridFill,
  BsCalendar3,
  BsChatTextFill,
  BsTelephone,
  BsGearFill,
  BsChatLeftDots,
  BsFillPersonLinesFill,
  BsFillPersonPlusFill,
  BsChatFill,
  BsCheck2All,
  BsFillHeartFill,
} from "react-icons/bs";

// const menu_toggle = document.querySelector(".menu-toggle");
// const sidebar = document.querySelector(".sidebar");

// menu_toggle.addEventListener("click", () => {
//   menu_toggle.classList.toggle("is-active");
//   sidebar.classList.toggle("is-active");
// });

const Dashboard = () => {
  return (
    <>
      <div class="app">
        <div class="menu-toggle">
          <div class="hamburger">
            <span></span>
          </div>
        </div>

        <aside class="sidebar">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span class="fs-4 mb-3">NeyX</span>
          </a>

          <nav class="menu">
            <a href="#" class="menu-item is-active">
              <BsFillGridFill />
              Home
            </a>
            <a href="#" class="menu-item">
              <BsCalendar3 /> Clients
            </a>
            <a href="#" class="menu-item">
              <BsChatTextFill /> Feedback
            </a>
            <a href="#" class="menu-item">
              <BsTelephone /> Calls
            </a>
            <a href="#" class="menu-item">
              <BsChatLeftDots /> Meetings
            </a>
            <a href="#" class="menu-item">
              <BsGearFill /> Settings
            </a>
          </nav>
        </aside>

        <main class="content">
          <div class="container">
            <div class="row d-flex justify-content-center">
              <div class="col col-lg-2 col-md-4 col-sm-12 col-xs-12 p-2">
                <div class="card card-sm">
                  <div class="card-body">
                    <p class="p-card-sm">
                      Total Customers &nbsp;
                      <BsFillPersonLinesFill />
                    </p>
                    <h5>45</h5>
                  </div>
                </div>
              </div>
              <div class="col col-lg-2 col-md-4 col-sm-12 col-xs-12 p-2">
                <div class="card card-sm">
                  <div class="card-body">
                    <p class="p-card-sm">
                      New SignUps &nbsp;
                      <BsFillPersonPlusFill />
                    </p>
                    <h5>11</h5>
                  </div>
                </div>
              </div>
              <div class="col col-lg-2 col-md-4 col-sm-12 col-xs-12 p-2">
                <div class="card card-sm">
                  <div class="card-body">
                    <p class="p-card-sm">
                      Total call received &nbsp;
                      <BsChatFill />
                    </p>
                    <h5>6</h5>
                  </div>
                </div>
              </div>
              <div class="col col-lg-2 col-md-4 col-sm-12 col-xs-12 p-2">
                <div class="card card-sm">
                  <div class="card-body">
                    <p class="p-card-sm">
                      Meetings Done &nbsp;
                      <BsCheck2All />
                    </p>
                    <h5>9</h5>
                  </div>
                </div>
              </div>
              <div class="col col-lg-2 col-md-4 col-sm-12 col-xs-12 p-2">
                <div class="card card-sm">
                  <div class="card-body">
                    <p class="p-card-sm">
                      Agents Live &nbsp;
                      <BsFillHeartFill />
                    </p>
                    <h5>9</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-4 p-2">
              <div class="col d-flex justify-content-start">
                <h2>Agents Working</h2>
              </div>
              <div class="col d-flex justify-content-end">
                <div class="px-2">
                  <button type="button" class="btn btn-primary py-2 px-4">
                    Add Agent
                  </button>
                </div>
                <div class="px-2">
                  <button type="button" class="btn btn-secondary p-2 px-4">
                    Edit Info
                  </button>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <div
                  class="card "
                  style={{ width: "18rem", borderRadius: "5%" }}
                >
                  <div class="d-flex justify-content-center pt-4">
                    <img
                      src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
                      class="card-img-top card-img"
                      alt="..."
                    />
                  </div>
                  <div class="card-body d-flex justify-content-center mt-2">
                    <h5>Agent name</h5>
                  </div>
                  <div class="d-flex justify-content-center mb-5">
                    <div class="d-flex justify-content-center mt-2 pe-1">
                      <button type="button" class="btn btn-sm btn-agent-num ">
                        #001
                      </button>
                    </div>
                    <div class="d-flex justify-content-center mt-2 ps-1">
                      <button
                        type="button"
                        class="btn btn-sm btn-agent-active"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Active
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Modal title
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">...</div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center text-center tex">
                    <p>Working hours -</p>
                    <p>9:00am - 6:00pm</p>
                  </div>
                  <div class="d-flex justify-content-center text-center tex">
                    <p>name@domain.com </p>
                    <p>+91 000 000 000</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  class="card "
                  style={{ width: "18rem", borderRadius: "5%" }}
                >
                  <div class="d-flex justify-content-center pt-4">
                    <img
                      src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
                      class="card-img-top card-img"
                      alt="..."
                    />
                  </div>
                  <div class="card-body d-flex justify-content-center mt-2">
                    <h5>Agent name</h5>
                  </div>
                  <div class="d-flex justify-content-center mb-5">
                    <div class="d-flex justify-content-center mt-2 pe-1">
                      <button type="button" class="btn btn-sm btn-agent-num ">
                        #001
                      </button>
                    </div>
                    <div class="d-flex justify-content-center mt-2 ps-1">
                      <button
                        type="button"
                        class="btn btn-sm btn-agent-active"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Active
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Modal title
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">...</div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center text-center tex">
                    <p>Working hours -</p>
                    <p>9:00am - 6:00pm</p>
                  </div>
                  <div class="d-flex justify-content-center text-center tex">
                    <p>name@domain.com </p>
                    <p>+91 000 000 000</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  class="card "
                  style={{ width: "18rem", borderRadius: "5%" }}
                >
                  <div class="d-flex justify-content-center pt-4">
                    <img
                      src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
                      class="card-img-top card-img"
                      alt="..."
                    />
                  </div>
                  <div class="card-body d-flex justify-content-center mt-2">
                    <h5>Agent name</h5>
                  </div>
                  <div class="d-flex justify-content-center mb-5">
                    <div class="d-flex justify-content-center mt-2 pe-1">
                      <button type="button" class="btn btn-sm btn-agent-num ">
                        #001
                      </button>
                    </div>
                    <div class="d-flex justify-content-center mt-2 ps-1">
                      <button
                        type="button"
                        class="btn btn-sm btn-agent-active"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Active
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Modal title
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">...</div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center text-center tex">
                    <p>Working hours -</p>
                    <p>9:00am - 6:00pm</p>
                  </div>
                  <div class="d-flex justify-content-center text-center tex">
                    <p>name@domain.com </p>
                    <p>+91 000 000 000</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  class="card "
                  style={{ width: "18rem", borderRadius: "5%" }}
                >
                  <div class="d-flex justify-content-center pt-4">
                    <img
                      src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
                      class="card-img-top card-img"
                      alt="..."
                    />
                  </div>
                  <div class="card-body d-flex justify-content-center mt-2">
                    <h5>Agent name</h5>
                  </div>
                  <div class="d-flex justify-content-center mb-5">
                    <div class="d-flex justify-content-center mt-2 pe-1">
                      <button type="button" class="btn btn-sm btn-agent-num ">
                        #001
                      </button>
                    </div>
                    <div class="d-flex justify-content-center mt-2 ps-1">
                      <button
                        type="button"
                        class="btn btn-sm btn-agent-active"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Active
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Modal title
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">...</div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center text-center tex">
                    <p>Working hours -</p>
                    <p>9:00am - 6:00pm</p>
                  </div>
                  <div class="d-flex justify-content-center text-center tex">
                    <p>name@domain.com </p>
                    <p>+91 000 000 000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark main">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span class="fs-4">NeyX</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto texts">
          <li class="nav-item">
            <a href="#" class="nav-link text-dark" aria-current="page">
              <BsFillGridFill />
              Home
            </a>
          </li>

          <li>
            <a href="#" class="nav-link text-dark">
              <BsCalendar3 /> Clients
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-dark">
              <BsChatTextFill /> Feedback
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-dark">
              <BsTelephone /> Calls
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-dark">
              <BsChatLeftDots /> Meetings
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-dark">
              <BsGearFill /> Settings
            </a>
          </li>
        </ul>
        <hr />
        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a class="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;
