import React from "react";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>

      <StudentCard
        name="Sumana"
        course="Computer Science"
        year="3rd Year"
        image="dog.jpg"
      />

      <StudentCard
        name="Rahul"
        course="Electronics"
        year="2nd Year"
        image="panda.jpg"
      />

      <StudentCard
        name="Anjali"
        course="Information Science"
        year="4th Year"
        image="cat.jpg"
      />

    </div>
  );
}

export default App;