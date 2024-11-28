import { NavLink} from "react-router-dom";
function NavBar() {
  return (
    <div className="navbar-default navbar navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <NavLink className="navbar-brand" to="/">Mekanbul</NavLink>
          <button
            className="navbar-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-main"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div id="navbar-main" className="navbar-collapse collapse">
          <ul className="nav navbar-nav list-unstyled">
            <li>
            <NavLink to={"about"}>Hakkında</NavLink>
            <NavLink to={"login"}>Giriş Yap</NavLink>
            <NavLink to={"register"}>Kayıt Ol</NavLink>
            </li>
        
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
