import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ArticlesAdmin = () => {
  const [displayusername, displayusernameupdate] = useState("");
  const [showmenu, showmenuupdateupdate] = useState(false);
  const usenavigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      showmenuupdateupdate(false);
    } else {
      showmenuupdateupdate(true);
      let username = sessionStorage.getItem("username");
      if (username === "" || username === null) {
        //usenavigate("/login");
        displayusernameupdate(username);
      } else {
        displayusernameupdate(username);
      }
    }
  }, [location]);
  return (
    <div>
      {showmenu && (
        <Container>
          <div>
            <h1>Lista di articoli da modificare</h1>
            <h2>
              <Link to={"/login"}>Logout</Link>
            </h2>
          </div>
        </Container>
      )}
    </div>
  );
};

export default ArticlesAdmin;
