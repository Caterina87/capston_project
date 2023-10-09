import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageComp from "./components/HomePageComp";
import CardComp from "./components/CardComp";
import FormComp from "./components/FormComp";
import CardDetails from "./components/CardDetails";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f7f2ed" }}>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePageComp />} />
          <Route path="/avvocati" element={<CardComp />} />
          <Route path="/detail/:id" element={<CardDetails />} />
          <Route path="/consulenza" element={<FormComp />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
