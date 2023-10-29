import "./SingleInventoryPage.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";

// Icons
import LeftArrow_Icon from "../../assets/icons/arrow_back-24px.svg";
import Edit_Icon from "../../assets/icons/edit-24px.svg";

function SingleInventoryPage(props) {
  const navigate = useNavigate();
  let { inventoryID } = useParams();
  const [CurrentInventory, setCurrentInventory] = useState();

  useEffect(() => {
    let current_inventory = props.AllInventoryInfo.find(
      (inventory) => inventory.id === inventoryID
    );
    if (current_inventory === undefined) {
      navigate("/*");
    }
    setCurrentInventory(current_inventory);
  }, [inventoryID]);

  return (
    <>
      <div className="SingleInventoryPage__container">
        <div className="SingleInventoryPage__title--container">
          <NavLink to={`/inventory`}>
            <img src={LeftArrow_Icon} alt="Left Arrow Icon" />
          </NavLink>

          <div className="SingleInventoryPage__title">
            {CurrentInventory?.itemName}
          </div>
          <img src={Edit_Icon} alt="Edit Icon" />
        </div>

        <div className="SingleInventoryPage__info--container">
          <div className="SingleInventoryPage__info--subcontainer">
            <div className="SingleInventoryPage__info--subcomponent">
              <div>ITEM DESCRIPTION</div>
              <div>{CurrentInventory?.description}</div>
            </div>
            <div className="SingleInventoryPage__info--subcomponent">
              <div>CATEGORY</div>
              <div>{CurrentInventory?.category}</div>
            </div>
          </div>

          <div className="SingleInventoryPage__info--subcomponentcontainer">
            <div className="SingleInventoryPage__info--subcontainer">
              <div className="SingleInventoryPage__info--subcomponent">
                <div>STATUS</div>
                <div>{CurrentInventory?.status}</div>
              </div>
              <div className="SingleInventoryPage__info--subcomponent">
                <div>WAREHOUSE</div>
                <div>{CurrentInventory?.warehouseName}</div>
              </div>
            </div>
            <div className="SingleInventoryPage__info--subcontainer">
              <div className="SingleInventoryPage__info--subcomponent">
                <div>QUANTITY</div>
                <div>{CurrentInventory?.quantity}</div>
              </div>
              {/* <div className="SingleInventoryPage__info--subcomponent"> </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleInventoryPage;
