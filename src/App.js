import "./App.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import SingleWarehousePage from "./pages/SingleWarehousePage/SingleWarehousePage";
import DeleteWarehousePage from "./pages/DeleteWarehousePage/DeleteWarehousePage";
import CreateWarehousePage from "./pages/CreateWarehousePage/CreateWarehousePage";

import InventoryPage from "./pages/InventoryPage/InventoryPage";
import SingleInventoryPage from "./pages/SingleInventoryPage/SingleInventoryPage";
import CreateInventoryPage from "./pages/CreateInventoryPage/CreateInventoryPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [AllWarehouseInfo, setAllWarehouseInfo] = useState([]);
  const [AllInventoryInfo, setAllInventoryInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/warehouse/all").then((element) => {
      let allWarehouseInfoData = element.data;
      setAllWarehouseInfo(allWarehouseInfoData);
    });
  }, [AllWarehouseInfo]);

  useEffect(() => {
    axios.get("http://localhost:8000/inventory/all").then((element) => {
      let allInventoryInfoData = element.data;
      setAllInventoryInfo(allInventoryInfoData);
    });
  }, [AllInventoryInfo]);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/warehouse"
            element={<WarehousePage AllWarehouseInfo={AllWarehouseInfo} />}
          />

          <Route
            path="/warehouse/:warehouseID"
            element={
              <SingleWarehousePage
                AllWarehouseInfo={AllWarehouseInfo}
                AllInventoryInfo={AllInventoryInfo}
              />
            }
          />

          <Route
            path="/warehouse/delete/:warehouseID"
            element={
              <DeleteWarehousePage
                AllWarehouseInfo={AllWarehouseInfo}
                AllInventoryInfo={AllInventoryInfo}
                setAllWarehouseInfo={setAllWarehouseInfo}
                setAllInventoryInfo={setAllInventoryInfo}
              />
            }
          />

          <Route
            path="/warehouse/create"
            element={
              <CreateWarehousePage setAllWarehouseInfo={setAllWarehouseInfo} />
            }
          />

          <Route
            path="/inventory"
            element={<InventoryPage AllInventoryInfo={AllInventoryInfo} />}
          />

          <Route
            path="/inventory/:inventoryID"
            element={
              <SingleInventoryPage AllInventoryInfo={AllInventoryInfo} />
            }
          />

          <Route
            path="/inventory/create"
            element={
              <CreateInventoryPage
                AllWarehouseInfo={AllWarehouseInfo}
                AllInventoryInfo={AllInventoryInfo}
                setAllWarehouseInfo={setAllWarehouseInfo}
                setAllInventoryInfo={setAllInventoryInfo}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
