import "./WarehouseCard.scss";
import { NavLink } from "react-router-dom";

// Icons
import Delete_Icon from "../../assets/icons/delete_outline-24px.svg";
import Edit_Icon from "../../assets/icons/edit-24px.svg";
import RightArrow_Icon from "../../assets/icons/chevron_right-24px.svg";

function WarehouseCard(props) {
  return (
    <>
      <div className="WarehouseCard__container">
        <div className="WarehouseCard__info--container">
          <div className="WarehouseCard__info--subcontainer">
            <div className="WarehouseCard__info--subcomponent">
              <div className="WarehouseCard__info--title">WAREHOUSE</div>
              <NavLink to={`/warehouse/${props.SingleWarehouseInfo?.id}`}>
                <div className="WarehouseCard__info--subtitlelink">
                  {props.SingleWarehouseInfo?.name}
                  <img src={RightArrow_Icon} alt="Right Arrow Icon" />
                </div>
              </NavLink>
            </div>

            <div className="WarehouseCard__info--subcomponent">
              <div className="WarehouseCard__info--title">ADDRESS</div>
              <div className="WarehouseCard__info--subtitle">
                {props.SingleWarehouseInfo?.address}
              </div>
            </div>
          </div>
          <div className="WarehouseCard__info--subcontainer">
            <div className="Warehouse__info--subcomponent">
              <div className="WarehouseCard__info--title">CONTACT NAME</div>
              <div className="WarehouseCard__info--subtitle">
                {props.SingleWarehouseInfo?.contact?.name}
              </div>
            </div>

            <div className="Warehouse__info--subcomponent">
              <div className="WarehouseCard__info--title">
                CONTACT INFORMATION
              </div>
              <div className="WarehouseCard__info--contactcontainer">
                <div className="WarehouseCard__info--subtitle">
                  {props.SingleWarehouseInfo?.contact?.phone}
                </div>
                <div className="WarehouseCard__info--subtitle">
                  {props.SingleWarehouseInfo?.contact?.email}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="WarehouseCard__buttoncontainer">
          <NavLink to={`/warehouse/delete/${props.SingleWarehouseInfo?.id}`}>
            <img src={Delete_Icon} alt="Delete Icon" />
          </NavLink>

          <img src={Edit_Icon} alt="Edit Icon" />
        </div>
      </div>
    </>
  );
}

export default WarehouseCard;
