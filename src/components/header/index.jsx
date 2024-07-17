import { Link } from "react-router-dom";
import {
  CloseOutlined,
  SearchOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { useState } from "react";
function Header() {
  const [isShowSearch, setIsShowSearch] = useState(false);
  return (
    <header className="header">
      <div className="header_logo">
        <Link to="/">
          <img
            src="https://movie-eta-sage.vercel.app/assets/movix-logo-d720c325.svg"
            width={200}
            alt=""
          />
        </Link>
      </div>
      <nav className="header_nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link to="/movie-management">Movie Management</Link>
          </li>
          <li>
            <SearchOutlined onClick={() => setIsShowSearch(true)} />
          </li>
          <li>
            <Link to="/login">
              <UserSwitchOutlined />
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`header_search ${isShowSearch ? "active" : ""}`}>
        <input type="text" placeholder="Search ...." />
        <CloseOutlined onClick={() => setIsShowSearch(false)} />
      </div>
    </header>
  );
}

export default Header;
