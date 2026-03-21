import React, { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import MoodHistory from "./components/MoodHistory";

function App() {
  const [mood, setMood] = useState("😊");
  const [history, setHistory] = useState([]);

  const handleMoodChange = (newMood) => {
    setMood(newMood);
    setHistory([...history, newMood]);
  };

  const moodColors = {
    "😊": "#fff9c4",
    "😢": "#bbdefb",
    "😡": "#ffcdd2",
    "😴": "#e1bee7"
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: moodColors[mood],
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h1>Mood Tracker</h1>

      <h2>Your Current Mood</h2>

      <div style={{ fontSize: "70px" }}>{mood}</div>

      <MoodSelector changeMood={handleMoodChange} />

      <MoodHistory history={history} />
    </div>
  );
}

export default App;