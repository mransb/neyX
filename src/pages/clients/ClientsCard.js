import React from "react";
import { BsFillTelephoneFill, BsChatLeftTextFill } from "react-icons/bs";

const ClientsCard = (props) => {
  return (
    <div className="card card-client" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title mb-4">Client Name</h5>
        <button type="button" className="btn btn-light btn-sm card-btn">
          #1
        </button>
        <button type="button" className="btn btn-primary btn-sm card-btn">
          {props.btn2}
        </button>
        <button type="button" className="btn btn-warning btn-sm card-btn">
          {props.btn3}
        </button>
        <h5 className="mt-4">Account Manager</h5>
        <div className="d-flex justify-content-center">
          <div className="p-2">
            <BsFillTelephoneFill />
            <span className="ms-2">5</span>
          </div>
          <div className="p-2">
            <BsChatLeftTextFill />
            <span className="ms-2">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsCard;
