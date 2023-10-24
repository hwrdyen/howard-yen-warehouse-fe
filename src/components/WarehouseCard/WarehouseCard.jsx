import "./WarehouseCard.scss";
import { NavLink } from "react-router-dom";

// Icons
import Delete_Icon from "../../assets/icons/delete_outline-24px.svg";
import Edit_Icon from "../../assets/icons/edit-24px.svg";

function WarehouseCard(props) {
  return (
    <>
      <div className="WarehouseCard__container">
        <div className="WarehouseCard__info--container">
          <div className="WarehouseCard__info--subcontainer">
            <div className="WarehouseCard__title">WAREHOUSE</div>
            <NavLink to={`/warehouse/${props.SingleWarehouseInfo?.id}`}>
              {props.SingleWarehouseInfo?.name}
            </NavLink>

            <div className="WarehouseCard__title">ADDRESS</div>
            <div className="WarehouseCard__subtitle">
              {props.SingleWarehouseInfo?.address}
            </div>
          </div>

          <div className="WarehouseCard__info--subcontainer">
            <div className="WarehouseCard__title">CONTACT NAME</div>
            <div className="WarehouseCard__subtitle">
              {props.SingleWarehouseInfo?.contact?.name}
            </div>

            <div className="WarehouseCard__title">CONTACT INFORMATION</div>
            <div className="">
              <div className="WarehouseCard__subtitle">
                {props.SingleWarehouseInfo?.contact?.phone}
              </div>
              <div className="WarehouseCard__subtitle">
                {props.SingleWarehouseInfo?.contact?.email}
              </div>
            </div>
          </div>
        </div>

        <div className="WarehouseCard__buttoncontainer">
          <img src={Delete_Icon} alt="Delete Icon" />
          <img src={Edit_Icon} alt="Edit Icon" />
        </div>
      </div>
    </>
  );
}

export default WarehouseCard;
