import React from "react";
import "./App.css";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <h1>This is going to become a Youtube Clone !</h1>
      {/* Header  -> <Header/> */}
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>

      {/* Sidebar -> <Sidebar/>*/}
      {/* RecommendedVideo */}
    </div>
  );
}

export default App;
