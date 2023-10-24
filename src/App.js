import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/warehouse" element={<WarehousePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
