import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageComp from "./components/HomePageComp";
import CardComp from "./components/CardComp";
import FormComp from "./components/FormComp";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f7f2ed" }}>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePageComp />} />
          <Route path="/avvocati" element={<CardComp />} />
          {/* <Route path="/detail/:id" element={<ProfileMain />} /> */}
          <Route path="/consulenza" element={<FormComp />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
