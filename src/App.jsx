import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyFooter />
    </div>
  );
}

export default App;
