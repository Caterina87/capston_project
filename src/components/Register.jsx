import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [address, addresschange] = useState("");
  const [isproceed, setIsproceed] = useState(true);
  const [errormessage, setErrormessage] = useState("");
  const [saveOk, setSaveOk] = useState(false);

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Inserisci un valore in ";
    if (username === null || username === "") {
      isproceed = false;
      errormessage += " Username";
    }
    if (name === null || name === "") {
      isproceed = false;
      errormessage += " Nome";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }

    if (!isproceed) {
      //toast.warning(errormessage);
      setIsproceed(false);
      setErrormessage(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        setErrormessage("Inserisci una mail valida");
        //toast.warning("Please enter the valid email");
      }
    }
    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { username, name, password, email, phone, address };
    if (IsValidate()) {
      //console.log(regobj);
      fetch("https://my-api-epicode-ebc661be151d.herokuapp.com/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          //setSaveOk(true);
          //regobj.name = "";

          navigate("/login");
        })
        .catch((err) => {
          //toast.error("Failed :" + err.message);
        });
    }
  };
  return (
    <Container>
      <div>
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card">
              <div className="card-header">
                <h1>Registrazione nuovo utente</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        User Name <span className="errmsg">*</span>
                      </label>
                      <input
                        value={username}
                        onChange={(e) => idchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Password <span className="errmsg">*</span>
                      </label>
                      <input
                        value={password}
                        onChange={(e) => passwordchange(e.target.value)}
                        type="password"
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Nome <span className="errmsg">*</span>
                      </label>
                      <input value={name} onChange={(e) => namechange(e.target.value)} className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Email <span className="errmsg">*</span>
                      </label>
                      <input
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Telefono <span className="errmsg"></span>
                      </label>
                      <input
                        value={phone}
                        onChange={(e) => phonechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  {/* <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Country <span className="errmsg">*</span>
                      </label>
                      <select value={country} onChange={(e) => countrychange(e.target.value)} className="form-control">
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="singapore">Singapore</option>
                      </select>
                    </div>
                  </div> */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Indirizzo</label>
                      <textarea
                        value={address}
                        onChange={(e) => addresschange(e.target.value)}
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary mx-3">
                  Salva
                </button>
                <Link to={"/login"} className="btn btn-danger">
                  Login
                </Link>{" "}
                {!isproceed && (
                  <Alert className="text-center mx-5 my-2 " key="success" variant="danger">
                    {errormessage}
                  </Alert>
                )}
                {saveOk && (
                  <Alert className="text-center mx-5 my-2 " key="success" variant="success">
                    Salvataggio avvenuto con successo.
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

export default Register;
