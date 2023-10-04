import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyHeroSection from "./components/MyHerosection";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyHeroSection />
      <MyFooter />
    </div>
  );
}

export default App;
