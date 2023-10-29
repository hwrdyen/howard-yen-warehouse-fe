import "./WarehouseList.scss";
import { useNavigate } from "react-router-dom";

// Components
import WarehouseCard from "../WarehouseCard/WarehouseCard";

function WarehouseList(props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="WarehouseList__container">
        <div className="WarehouseList__title">Warehouses</div>
        <div className="WarehouseList__funcbar">
          <input
            className="WarehouseList__funcbar--searchinput"
            type="text"
            name="search"
            placeholder="Search..."
          />
          <button
            className="WarehouseList__funcbar--addmore"
            onClick={() => navigate("/warehouse/create")}
          >
            + Add New Warehouse
          </button>
        </div>

        <div>
          {props.AllWarehouseInfo.map((warehouse) => (
            <WarehouseCard SingleWarehouseInfo={warehouse} />
          ))}
        </div>
      </div>
    </>
  );
}

export default WarehouseList;
