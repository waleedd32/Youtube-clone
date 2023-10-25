import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/avatar";
import { Link, useHistory } from "react-router-dom";
import avatar from "./avatar.jpg";
import Jebordoq from "./Jebordoq.png";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  console.log(inputSearch);

  const inputRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    inputRef.current.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        history.push(`/search/${inputSearch}`);
      }
    });
  }, [inputSearch]);

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/" onClick={() => setInputSearch("")}>
          <img className="header__logo" src={Jebordoq} alt="" />
        </Link>
      </div>
      <div className="header__input">
        <input
          ref={inputRef}
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`} title="Search">
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <span title="Create">
          <VideoCallIcon className="header__icon disable" />
        </span>

        <span title="Notifications">
          {" "}
          <NotificationsIcon className="header__icon disable" />
        </span>

        <Avatar alt="Remy Sharp" src={avatar} />
      </div>
    </div>
  );
}

export default Header;
