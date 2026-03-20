import React from "react";

function MoodSelector({ changeMood }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={() => changeMood("😊")}>Happy</button>
      <button onClick={() => changeMood("😢")}>Sad</button>
      <button onClick={() => changeMood("😡")}>Angry</button>
      <button onClick={() => changeMood("😴")}>Tired</button>
    </div>
  );
}

export default MoodSelector;