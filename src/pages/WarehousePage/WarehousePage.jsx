import "./WarehousePage.scss";

// Components
import WarehouseList from "../../components/WarehouseList/WarehouseList";

function WarehousePage(props) {
  return (
    <>
      <div className="WarehousePage__container">
        <WarehouseList AllWarehouseInfo={props.AllWarehouseInfo} />
      </div>
    </>
  );
}

export default WarehousePage;
