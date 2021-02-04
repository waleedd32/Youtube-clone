import React from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <h1>This is going to become a Youtube Clone !</h1>
      {/* Header  -> <Header/> */}
      <Header />
      {/* Sidebar -> <Sidebar/>*/}
      {/* RecommendedVideo */}
    </div>
  );
}

export default App;
