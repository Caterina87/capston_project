import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../redux/action";
// import { toast } from "react-toastify";

const Login = () => {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");
  //const [validated, setValidated] = useState(false);
  //const dispatch = useDispatch();
  const [valid, setValid] = useState(true);

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("https://my-api-epicode-ebc661be151d.herokuapp.com/users?username=" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length >= 1 && resp[0].password === password) {
            sessionStorage.setItem("username", username);
            usenavigate("/articoliAdmin");
          } else {
            console.log("sono  qui");
            setValid(false);
          }
        })
        .catch((err) => {
          //toast.error("Login Failed due to :" + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      setValid(false);
    }
    if (password === "" || password === null) {
      result = false;
      setValid(false);
    }
    return result;
  };
  return (
    <Container>
      <div className="row">
        <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
          <form onSubmit={ProceedLogin} className="container mb-5">
            <div className="card">
              <div className="card-header">
                <h2 className="fw-semibold">Accesso Area Privata </h2>
              </div>
              <div className="card-body">
                <div className="form-group mb-2">
                  <label className="mb-1">
                    User Name <span className="errmsg">*</span>
                  </label>
                  <input
                    value={username}
                    onChange={(e) => usernameupdate(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="mb-1">
                    Password <span className="errmsg">*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => passwordupdate(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-outline-primary mx-3">
                  Login
                </button>
                <Link className="btn btn-outline-success" to={"/register"}>
                  Nuovo Utente
                </Link>
                {!valid && (
                  <Alert className="text-center mx-5 my-2 " key="success" variant="danger">
                    Username e/o Password errati!
                  </Alert>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
