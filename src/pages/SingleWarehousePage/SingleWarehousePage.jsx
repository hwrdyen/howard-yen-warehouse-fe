import "./SingleWarehousePage.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Icons
import LeftArrow_Icon from "../../assets/icons/arrow_back-24px.svg";
import Edit_Icon from "../../assets/icons/edit-24px.svg";

// Components
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";

function SingleWarehousePage(props) {
  const navigate = useNavigate();
  let { warehouseID } = useParams();
  const [CurrentWarehouse, setCurrentWarehouse] = useState();
  const [CurrentWarehouseInventory, setCurrentWarehouseInventory] = useState(
    []
  );
  useEffect(() => {
    let current_warehouse = props.AllWarehouseInfo.find(
      (warehouse) => warehouse.id === warehouseID
    );

    if (current_warehouse === undefined) {
      navigate("/*");
    }

    setCurrentWarehouse(current_warehouse);
  }, [warehouseID]);

  useEffect(() => {
    let current_warehouseinventory = props.AllInventoryInfo.filter(
      (inventory) => inventory?.warehouseID === warehouseID
    );

    // if (current_warehouseinventory.length < 1) {
    //   navigate("/*");
    // }
    setCurrentWarehouseInventory(current_warehouseinventory);
  }, [warehouseID]);

  return (
    <>
      <div className="SingleWarehousePage__container">
        <div className="SingleWarehousePage__title--container">
          <img src={LeftArrow_Icon} alt="Left Arrow Icon" />
          <div className="SingleWarehousePage__title">
            {CurrentWarehouse?.name}
          </div>
          <img src={Edit_Icon} alt="Edit Arrow Icon" />
        </div>

        <div className="SingleWarehousePage__info--container">
          <div className="SingleWarehousePage__info--subcontainer">
            <div className="SingleWarehousePage__info--title">
              WAREHOUSE ADDRESS:
            </div>
            <div className="SingleWarehousePage__info--subtitle">
              {`${CurrentWarehouse?.address}, ${CurrentWarehouse?.city}, ${CurrentWarehouse?.country}`}
            </div>
          </div>

          <div className="SingleWarehousePage__info--subcomponent">
            <div className="SingleWarehousePage__info--subcontainer">
              <div className="SingleWarehousePage__info--title">
                CONTACT NAME:
              </div>
              <div className="SingleWarehousePage__info--subtitle">
                {CurrentWarehouse?.contact?.name}
              </div>
              <div className="SingleWarehousePage__info--subtitle">
                {CurrentWarehouse?.contact?.position}
              </div>
            </div>
            <div className="SingleWarehousePage__info--subcontainer">
              <div className="SingleWarehousePage__info--title">
                CONTACT INFORMATION:
              </div>
              <div className="SingleWarehousePage__info--subtitle">
                {CurrentWarehouse?.contact?.phone}
              </div>
              <div className="SingleWarehousePage__info--subtitle">
                {CurrentWarehouse?.contact?.email}
              </div>
            </div>
          </div>
        </div>

        <WarehouseInventoryList
          CurrentWarehouseInventory={CurrentWarehouseInventory}
        />
      </div>
    </>
  );
}

export default SingleWarehousePage;
