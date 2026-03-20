import React from "react";

function StudentCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        width: "220px",
        padding: "15px",
        margin: "10px",
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      <img
        src={props.image}
        alt="profile"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          marginBottom: "10px"
        }}
      />

      <h3>{props.name}</h3>
      <p><b>Course:</b> {props.course}</p>
      <p><b>Year:</b> {props.year}</p>
    </div>
  );
}

export default StudentCard;