import "./WarehouseInventoryCard.scss";
import { NavLink } from "react-router-dom";

// Icons
import Delete_Icon from "../../assets/icons/delete_outline-24px.svg";
import Edit_Icon from "../../assets/icons/edit-24px.svg";
import RightArrow_Icon from "../../assets/icons/chevron_right-24px.svg";

function WarehouseInventoryCard(props) {
  return (
    <>
      <div className="WarehouseInventoryCard__container">
        <div className="WarehouseInventoryCard__info--container">
          <div className="WarehouseInventoryCard__info--subcontainer">
            <div className="WarehouseInventoryCard__info--subcomponent">
              <div className="WarehouseInventoryCard__info--title">
                INVENTORY ITEM
              </div>
              <NavLink to={`/inventory/${props.WarehouseInventoryInfo?.id}`}>
                <div className="WarehouseInventoryCard__info--subtitlelink">
                  {props.WarehouseInventoryInfo?.itemName}
                  <img src={RightArrow_Icon} alt="Right Arrow Icon" />
                </div>
              </NavLink>
            </div>
            <div className="WarehouseInventoryCard__info--subcomponent">
              <div className="WarehouseInventoryCard__info--title">
                CATEGORY
              </div>
              <div className="WarehouseInventoryCard__info--subtitle">
                {props.WarehouseInventoryInfo?.category}
              </div>
            </div>
          </div>
          <div className="WarehouseInventoryCard__info--subcontainer">
            <div className="WarehouseInventoryCard__info--subcomponent">
              <div className="WarehouseInventoryCard__info--title">STATUS</div>
              <div className="WarehouseInventoryCard__info--subtitle">
                {props.WarehouseInventoryInfo?.status}
              </div>
            </div>
            <div className="WarehouseInventoryCard__info--subcomponent">
              <div className="WarehouseInventoryCard__info--title">QTY</div>
              <div className="WarehouseInventoryCard__info--subtitle">
                {props.WarehouseInventoryInfo?.quantity}
              </div>
            </div>
          </div>
        </div>
        <div className="WarehouseInventoryCard____buttoncontainer">
          <img src={Delete_Icon} alt="Delete Icon" />
          <img src={Edit_Icon} alt="Edit Icon" />
        </div>
      </div>
    </>
  );
}

export default WarehouseInventoryCard;
