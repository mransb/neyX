import React from "react";
import "./login.css";

const Login = () => {
  return (
    <>
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-lg-7 col-md-6 col-sm-12 first pe-2 mt-5">
            <img
              src="https://s3-alpha-sig.figma.com/img/2389/d5ec/77886e9f772743c75c06702a45d8105a?Expires=1659312000&Signature=QeRzyxQ4DnkgRbs4hBxdewxn7rtAHM4XcmI6XHNAjulQm5G3B64M7-2v8FqNhmV5lCsDVREQiZXogZOSd5bGn2q0vbfUj8-d~M3OPpRcAzbcLoqj~Qy-6oTxsrNvj8sAsyTCVLkc-meLjz5nALZa4VKWZja7szxsNWKxZevMuzweEzjYYr5Dj4PSlUa1pafdDlpooc60AX7ysssU~BgvMlEWFouV~Ib9WgpW7BE07qfCNEivoG8eNzvv7Ikvk~ZaJ~JeRMapqSBLZAth762CMKx~QMwiUz~PAf7qzv5fofPkkwWg0ZmqN0YNxFMzs2RxxORzZvo67HC-4nnN~IX22g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div class="col-lg-5 col-md-6 col-sm-12 second ps-2">
            <div class="row d-flex justify-content-end pt-5 btn_div1">
              <div class="d-flex justify-content-end">
                <div class="col-lg-3 col-md-5 col-sm-12 p-2">
                  <button type="button" class="btn btn-danger btn_top1 px-4">
                    Login
                  </button>
                </div>
                <div class="col-lg-3 col-md-5 col-sm-12 p-2">
                  <button type="button" class="btn btn-light btn_top2 px-4">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center  mt-5">
                <h1 class="heading">Welcome Back :)</h1>
                <p class="sub-heading pt-2">
                  To keep connected with us, please login with your personal
                  information by email address and password
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 p-5 d-flex justify-content-center">
                <form>
                  <div class="form-group pb-2">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group pb-2">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div class="col-lg-12 col-md-12 mt-4">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />

                      <label class="form-check-label" for="exampleCheck1">
                        remember me
                      </label>

                      <a
                        class="float-end text-decoration-none ps-4"
                        href=""
                        style={{ color: "gray" }}
                      >
                        forgot password?
                      </a>
                    </div>
                  </div>
                  <div class="mt-5">
                    <button
                      type="submit"
                      class="btn btn-primary mt-3 float-start btn_bottom1 px-4"
                    >
                      Login
                    </button>
                    <button
                      type="submit"
                      class="btn btn-light mt-3 float-end btn_bottom2"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
