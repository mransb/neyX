import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SmallCards = (props) => {
  return (
    <>
      <div className="card card-sm">
        <div className="card-body">
          <p className="p-card-sm">
            {props.name} &nbsp;
            {props.icon}
          </p>
          <h5>{props.number}</h5>
        </div>
      </div>
    </>
  );
};

export default SmallCards;
