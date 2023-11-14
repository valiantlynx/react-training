import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <Detail detailInfo={props.id} />
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Detail detailInfo={props.tel} />
          <Detail detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
