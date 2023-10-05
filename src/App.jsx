import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyHeroSection from "./components/MyHerosection";
import SearchLawyer from "./components/SearchLawyer";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f7f2ed" }}>
      <MyNavbar />
      <MyHeroSection />
      <SearchLawyer />
      <MyFooter />
    </div>
  );
}

export default App;
