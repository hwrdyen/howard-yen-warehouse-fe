import "./InventoryCard.scss";
import { NavLink } from "react-router-dom";

// Icons
import Delete_Icon from "../../assets/icons/delete_outline-24px.svg";
import Edit_Icon from "../../assets/icons/edit-24px.svg";
import RightArrow_Icon from "../../assets/icons/chevron_right-24px.svg";

function InventoryCard(props) {
  return (
    <>
      <div className="InventoryCard__container">
        <div className="InventoryCard__info--container">
          <div className="InventoryCard__info--subcontainer">
            <div className="InventoryCard__info--subcomponent">
              <div className="InventoryCard__info--title">INVENTORY ITEM</div>
              <NavLink to={`/inventory/${props.InventoryData?.id}`}>
                <div className="InventoryCard__info--subtitlelink">
                  {props.InventoryData?.itemName}
                  <img src={RightArrow_Icon} alt="Right Arrow Icon" />
                </div>
              </NavLink>
            </div>
            <div className="InventoryCard__info--subcomponent">
              <div className="InventoryCard__info--title">CATEGORY</div>
              <div className="InventoryCard__info--subtitle">
                {props.InventoryData?.category}
              </div>
            </div>
          </div>

          <div className="InventoryCard__info--subcontainer">
            <div className="InventoryCard__info--subcomponent">
              <div className="InventoryCard__info--title">STATUS</div>
              <div className="InventoryCard__info--subtitle">
                {props.InventoryData?.status}
              </div>
            </div>
            <div className="InventoryCard__info--subcomponent">
              <div className="InventoryCard__info--title">QTY</div>
              <div className="InventoryCard__info--subtitle">
                {props.InventoryData?.quantity}
              </div>
            </div>
            <div className="InventoryCard__info--subcomponent">
              <div className="InventoryCard__info--title">WAREHOUSE</div>
              <div className="InventoryCard__info--subtitle">
                {props.InventoryData?.warehouseName}
              </div>
            </div>
          </div>
        </div>
        <div className="InventoryCard__buttoncontainer">
          <img src={Delete_Icon} alt="Delete Icon" />
          <img src={Edit_Icon} alt="Edit Icon" />
        </div>
      </div>
    </>
  );
}

export default InventoryCard;
