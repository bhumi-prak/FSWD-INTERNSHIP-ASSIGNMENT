import React from "react";

function MoodHistory({ history }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Mood History</h3>

      {history.length === 0 ? (
        <p>No moods selected yet</p>
      ) : (
        <div style={{ fontSize: "30px" }}>
          {history.map((mood, index) => (
            <span key={index} style={{ margin: "5px" }}>
              {mood}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default MoodHistory;