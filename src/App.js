import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CarouselTest from "../src/pages/CarouselTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/jobSeeker" element={<CarouselTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
