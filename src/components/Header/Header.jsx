import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <div className="left">
          <h1>Look it</h1>
        </div>
        <div className="right">
          <Link to={"https://sifedine.lol"}> more projects? </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
