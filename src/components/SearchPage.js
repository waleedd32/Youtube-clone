import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
// import TuneOutlined from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>filter</h2>
      </div>
      <hr />
    </div>
  );
}

export default SearchPage;
