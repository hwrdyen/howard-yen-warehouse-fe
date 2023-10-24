import "./WarehouseList.scss";
import axios from "axios";
import { useState, useEffect } from "react";

// Components
import WarehouseCard from "../WarehouseCard/WarehouseCard";

function WarehouseList() {
  const [allWarehouseInfo, setallWarehouseInfo] = useState([]);

  useEffect(() => {
    function GetallWarehouseInfo() {
      return axios
        .get("http://localhost:8000/warehouse/all")
        .then((element) => {
          let allWarehouseInfoData = element.data;
          setallWarehouseInfo(allWarehouseInfoData);
        });
    }
    GetallWarehouseInfo();
  }, [allWarehouseInfo]);

  return (
    <>
      {/* <div>This is Warehouse List</div> */}
      <div className="WarehouseList__container">
        <div className="WarehouseList__title">Warehouses</div>
        <div className="WarehouseList__funcbar">
          <input className="WarehouseList__funcbar--searchinput" type="text" />
          <button className="WarehouseList__funcbar--addmore">
            +Add New Warehouse
          </button>
        </div>

        <div>
          {allWarehouseInfo.map((warehouse) => (
            <WarehouseCard id={warehouse?.id} SingleWarehouseInfo={warehouse} />
          ))}
        </div>
      </div>
    </>
  );
}

export default WarehouseList;
