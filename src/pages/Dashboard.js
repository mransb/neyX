import React from "react";
import "./Dashboard.css";
import {
  BsFillPersonLinesFill,
  BsFillPersonPlusFill,
  BsChatFill,
  BsCheck2All,
  BsFillHeartFill,
} from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import SmallCards from "../components/SmallCards";

const menu_toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

if ((menu_toggle, sidebar)) {
  menu_toggle.addEventListener("click", () => {
    console.log("clickedhjbhjb");
    menu_toggle.classList.toggle("is-active");
    sidebar.classList.toggle("is-active");
  });
}

const Dashboard = () => {
  return (
    <>
      <div className="app">
        <Sidebar />
        <main className="content">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col col-lg-2 col-md-4 col-sm-12 col-xs-12 p-2">
                <SmallCards
                  name="abc"
                  number="123"
                  icon={<BsFillPersonLinesFill />}
                />
              </div>
              <div className="col col-lg-2 col-md-4 col-sm-12 col-xs-12 p-2">
                <div className="card card-sm">
                  <div className="card-body">
                    <p className="p-card-sm">
                      New SignUps &nbsp;
                      <BsFillPersonPlusFill />
                    </p>
                    <h5>11</h5>
                  </div>
                </div>
              </div>
              <div className="col col-lg-2 col-md-4 col-sm-12 col-xs-12 p-2">
                <div className="card card-sm">
                  <div className="card-body">
                    <p className="p-card-sm">
                      Total call received &nbsp;
                      <BsChatFill />
                    </p>
                    <h5>6</h5>
                  </div>
                </div>
              </div>
              <div className="col col-lg-2 col-md-4 col-sm-12 col-xs-12 p-2">
                <div className="card card-sm">
                  <div className="card-body">
                    <p className="p-card-sm">
                      Meetings Done &nbsp;
                      <BsCheck2All />
                    </p>
                    <h5>9</h5>
                  </div>
                </div>
              </div>
              <div className="col col-lg-2 col-md-4 col-sm-12 col-xs-12 p-2">
                <div className="card card-sm">
                  <div className="card-body">
                    <p className="p-card-sm">
                      Agents Live &nbsp;
                      <BsFillHeartFill />
                    </p>
                    <h5>9</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4 p-2">
              <div className="col d-flex justify-content-start">
                <h2>Agents Working</h2>
              </div>
              <div className="col d-flex justify-content-end">
                <div className="px-2">
                  {/* <button type="button" className="btn btn-primary py-2 px-4">
                    Add Agent
                  </button> */}
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Add Agent
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header d-flex justify-content-center align-items-center">
                          <div className="d-flex justify-content-center align-items-center mt-5">
                            <img
                              src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
                              className="img"
                              alt="..."
                            />
                            <div class="file btn btn-sm btn-primary upload-pp">
                              <BsFillPersonPlusFill />
                              <input
                                className="upload-pic"
                                type="file"
                                name="file"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="modal-body d-flex justify-content-center">
                          <form>
                            <div>
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="text"
                                  aria-describedby="emailHelp"
                                  placeholder="Enter full name"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  placeholder="Enter email id"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="tel"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="Enter phone number"
                                />
                              </div>
                              <div className="d-flex justify-content-center">
                                <div className=" mb-3 pe-1 col-lg-4">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="text"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter id"
                                  />
                                </div>
                                <div className=" mb-3 ps-1 col-lg-4">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="text"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter status"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                          <button type="button" className="btn btn-primary">
                            Save
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <button
                    type="button"
                    class="btn btn-secondary p-2 px-4"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Edit Info
                  </button>
                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header d-flex justify-content-center align-items-center">
                          <div className="d-flex justify-content-center align-items-center mt-5">
                            <img
                              src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
                              className="img"
                              alt="..."
                            />
                            <div class="file btn btn-sm btn-primary upload-pp">
                              <BsFillPersonPlusFill />
                              <input
                                className="upload-pic"
                                type="file"
                                name="file"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="modal-body d-flex justify-content-center">
                          <form>
                            <div>
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="text"
                                  aria-describedby="emailHelp"
                                  placeholder="Enter full name"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  placeholder="Enter email id"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="tel"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="Enter phone number"
                                />
                              </div>
                              <div className="d-flex justify-content-center">
                                <div className=" mb-3 pe-1 col-lg-4">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="text"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter id"
                                  />
                                </div>
                                <div className=" mb-3 ps-1 col-lg-4">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="text"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter status"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                          <button type="button" className="btn btn-success">
                            Update
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* horizontal scrillong */}
            <div className="row mt-4">
              <div className="col">
                <div className="media-scroller snaps-inline">
                  <div className="media-element pb-2">
                    <div
                      className="card"
                      style={{ width: "18rem", borderRadius: "5%" }}
                    >
                      <div className="d-flex justify-content-center align-items-center mt-5">
                        <img
                          src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
                          className="img"
                          alt="..."
                        />
                      </div>
                      <div className="card-body d-flex justify-content-center mt-2">
                        <h5>Agent name</h5>
                      </div>
                      <div className="d-flex justify-content-center mb-5">
                        <div className="d-flex justify-content-center mt-2 pe-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-agent-num "
                          >
                            #001
                          </button>
                        </div>
                        <div className="d-flex justify-content-center mt-2 ps-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-agent-active "
                          >
                            Active
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center text-center tex">
                        <p>Working hours -</p>
                        <p>9:00am - 6:00pm</p>
                      </div>
                      <div className="d-flex justify-content-center text-center tex">
                        <p>name@domain.com </p>
                        <p>+91 000 000 000</p>
                      </div>
                    </div>
                  </div>
                  <div className="media-element pb-2">
                    <div
                      className="card"
                      style={{ width: "18rem", borderRadius: "5%" }}
                    >
                      <div className="d-flex justify-content-center align-items-center mt-5">
                        <img
                          src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
                          className="img"
                          alt="..."
                        />
                      </div>
                      <div className="card-body d-flex justify-content-center mt-2">
                        <h5>Agent name</h5>
                      </div>
                      <div className="d-flex justify-content-center mb-5">
                        <div className="d-flex justify-content-center mt-2 pe-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-agent-num "
                          >
                            #001
                          </button>
                        </div>
                        <div className="d-flex justify-content-center mt-2 ps-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-agent-active "
                          >
                            Active
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center text-center tex">
                        <p>Working hours -</p>
                        <p>9:00am - 6:00pm</p>
                      </div>
                      <div className="d-flex justify-content-center text-center tex">
                        <p>name@domain.com </p>
                        <p>+91 000 000 000</p>
                      </div>
                    </div>
                  </div>
                  <div className="media-element pb-2">
                    <div
                      className="card "
                      style={{ width: "18rem", borderRadius: "5%" }}
                    >
                      <div className="d-flex justify-content-center align-items-center mt-5">
                        <img
                          src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
                          className="img"
                          alt="..."
                        />
                      </div>
                      <div className="card-body d-flex justify-content-center mt-2">
                        <h5>Agent name</h5>
                      </div>
                      <div className="d-flex justify-content-center mb-5">
                        <div className="d-flex justify-content-center mt-2 pe-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-agent-num "
                          >
                            #001
                          </button>
                        </div>
                        <div className="d-flex justify-content-center mt-2 ps-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-agent-active "
                          >
                            Active
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center text-center tex">
                        <p>Working hours -</p>
                        <p>9:00am - 6:00pm</p>
                      </div>
                      <div className="d-flex justify-content-center text-center tex">
                        <p>name@domain.com </p>
                        <p>+91 000 000 000</p>
                      </div>
                    </div>
                  </div>
                  <div className="media-element pb-2">
                    <div
                      className="card "
                      style={{ width: "18rem", borderRadius: "5%" }}
                    >
                      <div className="d-flex justify-content-center align-items-center mt-5">
                        <img
                          src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
                          className="img"
                          alt="..."
                        />
                      </div>
                      <div className="card-body d-flex justify-content-center mt-2">
                        <h5>Agent name</h5>
                      </div>
                      <div className="d-flex justify-content-center mb-5">
                        <div className="d-flex justify-content-center mt-2 pe-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-agent-num "
                          >
                            #001
                          </button>
                        </div>
                        <div className="d-flex justify-content-center mt-2 ps-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-agent-active "
                          >
                            Active
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center text-center tex">
                        <p>Working hours -</p>
                        <p>9:00am - 6:00pm</p>
                      </div>
                      <div className="d-flex justify-content-center text-center tex">
                        <p>name@domain.com </p>
                        <p>+91 000 000 000</p>
                      </div>
                    </div>
                  </div>
                  <div className="media-element pb-2">
                    <div
                      className="card "
                      style={{ width: "18rem", borderRadius: "5%" }}
                    >
                      <div className="d-flex justify-content-center align-items-center mt-5">
                        <img
                          src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
                          className="img"
                          alt="..."
                        />
                      </div>
                      <div className="card-body d-flex justify-content-center mt-2">
                        <h5>Agent name</h5>
                      </div>
                      <div className="d-flex justify-content-center mb-5">
                        <div className="d-flex justify-content-center mt-2 pe-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-agent-num "
                          >
                            #001
                          </button>
                        </div>
                        <div className="d-flex justify-content-center mt-2 ps-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-agent-active "
                          >
                            Active
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center text-center tex">
                        <p>Working hours -</p>
                        <p>9:00am - 6:00pm</p>
                      </div>
                      <div className="d-flex justify-content-center text-center tex">
                        <p>name@domain.com </p>
                        <p>+91 000 000 000</p>
                      </div>
                    </div>
                  </div>
                  <div className="media-element pb-2">
                    <div
                      className="card "
                      style={{ width: "18rem", borderRadius: "5%" }}
                    >
                      <div className="d-flex justify-content-center align-items-center mt-5">
                        <img
                          src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
                          className="img"
                          alt="..."
                        />
                      </div>
                      <div className="card-body d-flex justify-content-center mt-2">
                        <h5>Agent name</h5>
                      </div>
                      <div className="d-flex justify-content-center mb-5">
                        <div className="d-flex justify-content-center mt-2 pe-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-agent-num "
                          >
                            #001
                          </button>
                        </div>
                        <div className="d-flex justify-content-center mt-2 ps-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-agent-active "
                          >
                            Active
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center text-center tex">
                        <p>Working hours -</p>
                        <p>9:00am - 6:00pm</p>
                      </div>
                      <div className="d-flex justify-content-center text-center tex">
                        <p>name@domain.com </p>
                        <p>+91 000 000 000</p>
                      </div>
                    </div>
                  </div>
                  <div className="media-element pb-2">
                    <div
                      className="card "
                      style={{ width: "18rem", borderRadius: "5%" }}
                    >
                      <div className="d-flex justify-content-center align-items-center mt-5">
                        <img
                          src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
                          className="img"
                          alt="..."
                        />
                      </div>
                      <div className="card-body d-flex justify-content-center mt-2">
                        <h5>Agent name</h5>
                      </div>
                      <div className="d-flex justify-content-center mb-5">
                        <div className="d-flex justify-content-center mt-2 pe-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-agent-num "
                          >
                            #001
                          </button>
                        </div>
                        <div className="d-flex justify-content-center mt-2 ps-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-agent-active "
                          >
                            Active
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center text-center tex">
                        <p>Working hours -</p>
                        <p>9:00am - 6:00pm</p>
                      </div>
                      <div className="d-flex justify-content-center text-center tex">
                        <p>name@domain.com </p>
                        <p>+91 000 000 000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
