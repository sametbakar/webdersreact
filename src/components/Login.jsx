import { NavLink } from "react-router-dom";
import Header from "./Header";
NavLink
function Login(){
return(
    <div className="">
        <Header 
            headerText="Giriş Yap"
        />
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <form
              className="form-horizontal"
              id="girisYap"
              onSubmit={(evt) => onSubmit(evt)}
            >
              <div className="form-group">
                <label className="col-xs-10 col-sm-2 control-label">
                  E-Posta:  
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input 
                  className="review form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-10 col-sm-2 control-label">
                  Şifre:  
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input 
                  className="review form-control"
                    type="password"
                  />
                </div>
              </div>
              <button className="btn btn-default pull-right">Giriş Yap</button>
              <NavLink className={"pull-right"} to={"/register"}>Kayıt Ol</NavLink>
            </form>
          </div>
        </div>
    </div>
);
}
export default Login;