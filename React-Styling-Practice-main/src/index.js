//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

var today = new Date();
//Show a single h1 that says "Good morning" if between midnight and 12PM.
const greeting = {
  respond: "",
  color: ""
};

if (today.getHours() < 12) {
  greeting.respond = "Good morning";
  greeting.color = "red";
} else if (today.getHours() > 12 && today.getHours() < 18) {
  greeting.respond = "Good Afternoon";
  greeting.color = "green";
} else {
  greeting.respond = "Good evening";
  greeting.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={greeting}>
      {greeting.respond}
    </h1>
  </div>,
  document.getElementById("root")
);
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
