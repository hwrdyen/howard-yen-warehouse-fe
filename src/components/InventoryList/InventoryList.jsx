import "./InventoryList.scss";
import { useNavigate } from "react-router-dom";

// Components
import InventoryCard from "../InventoryCard/InventoryCard";

function InventoryList(props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="InventoryList__container">
        <div className="InventoryList__title">Inventory</div>
        <div className="InventoryList__funcbar">
          <input
            className="InventoryList__funcbar--searchinput"
            type="text"
            name="search"
            placeholder="Search..."
          />
          <button
            className="InventoryList__funcbar--addmore"
            onClick={() => navigate("/inventory/create")}
          >
            + Add New Item
          </button>
        </div>

        <div>
          {props.AllInventoryInfo.map((inventory) => (
            <InventoryCard InventoryData={inventory} />
          ))}
        </div>
      </div>
    </>
  );
}

export default InventoryList;
