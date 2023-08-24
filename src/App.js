import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HistoryPage from "./pages/HistoryPage";
import ListPage from "./pages/ListPage";
import EnterprisePage from "./pages/EnterprisePage";
import MypagePage from "./pages/MypagePage";
import "./App.css";
import CarouselTest from "../src/pages/CarouselTest";
import SelectCategoryPage from "./pages/SelectCategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/selectcategory" element={<SelectCategoryPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
        <Route path="/mypage" element={<MypagePage />} />
        <Route path="/jobseeker" element={<CarouselTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
