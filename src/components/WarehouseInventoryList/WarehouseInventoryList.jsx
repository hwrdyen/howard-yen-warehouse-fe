import "./WarehouseInventoryList.scss";

// Components
import WarehouseInventoryCard from "../WarehouseInventoryCard/WarehouseInventoryCard";

function WarehouseInventoryList(props) {
  return (
    <>
      <div>
        {props.CurrentWarehouseInventory.map((inventory) => (
          <WarehouseInventoryCard WarehouseInventoryInfo={inventory} />
        ))}
      </div>
    </>
  );
}

export default WarehouseInventoryList;
