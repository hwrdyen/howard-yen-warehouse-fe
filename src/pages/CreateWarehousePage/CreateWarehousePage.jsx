import "./CreateWarehousePage.scss";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { NavLink, useNavigate } from "react-router-dom";

// Icons
import LeftArrow_Icon from "../../assets/icons/arrow_back-24px.svg";

function CreateWarehousePage(props) {
  const navigate = useNavigate();

  const submitNewWarehouse = (event) => {
    event.preventDefault();
    let new_form = document.getElementById("add-warehouse-form");
    let new_name = document.getElementById("add-warehouse-name");
    let new_address = document.getElementById("add-warehouse-address");
    let new_city = document.getElementById("add-warehouse-city");
    let new_country = document.getElementById("add-warehouse-country");
    let new_contactname = document.getElementById("add-warehouse-contactname");
    let new_position = document.getElementById("add-warehouse-position");
    let new_phonenumber = document.getElementById("add-warehouse-phonenumber");
    let new_email = document.getElementById("add-warehouse-email");

    let newObjData = {
      id: uuidv4(),
      name: new_name.value,
      address: new_address.value,
      city: new_city.value,
      country: new_country.value,
      contact: {
        name: new_contactname.value,
        position: new_position.value,
        phone: new_phonenumber.value,
        email: new_email.value,
      },
    };

    new_form.reset();
    axios.post("http://localhost:8000/warehouse/all", newObjData).then(() => {
      props.setAllWarehouseInfo([]);
      navigate("/warehouse");
    });
  };

  return (
    <>
      <form
        className="CreateWarehousePage__container"
        id="add-warehouse-form"
        onSubmit={submitNewWarehouse}
      >
        <div className="CreateWarehousePage__title--container">
          <NavLink to={"/warehouse"}>
            <img src={LeftArrow_Icon} alt="Left Arrow Icon" />
          </NavLink>

          <div className="CreateWarehousePage__title">Add New Warehouse</div>
        </div>

        <div className="CreateWarehousePage__form--container">
          <div className="CreateWarehousePage__form--subcontainer">
            <div className="CreateWarehousePage__form--title">
              Warehouse Details
            </div>
            <div className="CreateWarehousePage__form--form">
              <div className="CreateWarehousePage__form--subform">
                <label
                  htmlFor="add-warehouse-name"
                  className="CreateWarehousePage__form--label"
                >
                  Warehouse Name
                </label>
                <input
                  id="add-warehouse-name"
                  type="text"
                  placeholder="Warehouse Name"
                  className="CreateWarehousePage__form--input"
                  required
                />
              </div>
              <div className="CreateWarehousePage__form--subform">
                <label
                  htmlFor="add-warehouse-address"
                  className="CreateWarehousePage__form--label"
                >
                  Street Address
                </label>
                <input
                  id="add-warehouse-address"
                  type="text"
                  placeholder="Street Address"
                  className="CreateWarehousePage__form--input"
                  required
                />
              </div>
              <div className="CreateWarehousePage__form--subform">
                <label
                  htmlFor="add-warehouse-city"
                  className="CreateWarehousePage__form--label"
                >
                  City
                </label>
                <input
                  id="add-warehouse-city"
                  type="text"
                  placeholder="City"
                  className="CreateWarehousePage__form--input"
                  required
                />
              </div>
              <div className="CreateWarehousePage__form--subform">
                <label
                  htmlFor="add-warehouse-country"
                  className="CreateWarehousePage__form--label"
                >
                  Country
                </label>
                <input
                  id="add-warehouse-country"
                  type="text"
                  placeholder="Country"
                  className="CreateWarehousePage__form--input"
                  required
                />
              </div>
            </div>
          </div>
          <div className="CreateWarehousePage__form--subcontainer">
            <div className="CreateWarehousePage__form--title">
              Contact Details
            </div>
            <div className="CreateWarehousePage__form--form">
              <div className="CreateWarehousePage__form--subform">
                <label
                  htmlFor="add-warehouse-contactname"
                  className="CreateWarehousePage__form--label"
                >
                  Contact Name
                </label>
                <input
                  id="add-warehouse-contactname"
                  type="text"
                  placeholder="Contact Name"
                  className="CreateWarehousePage__form--input"
                  required
                />
              </div>
              <div className="CreateWarehousePage__form--subform">
                <label
                  htmlFor="add-warehouse-position"
                  className="CreateWarehousePage__form--label"
                >
                  Position
                </label>
                <input
                  id="add-warehouse-position"
                  type="text"
                  placeholder="Position"
                  className="CreateWarehousePage__form--input"
                  required
                />
              </div>
              <div className="CreateWarehousePage__form--subform">
                <label
                  htmlFor="add-warehouse-phonenumber"
                  className="CreateWarehousePage__form--label"
                >
                  Phone Number
                </label>
                <input
                  id="add-warehouse-phonenumber"
                  type="text"
                  placeholder="Phone Number"
                  className="CreateWarehousePage__form--input"
                  required
                />
              </div>
              <div className="CreateWarehousePage__form--subform">
                <label
                  htmlFor="add-warehouse-email"
                  className="CreateWarehousePage__form--label"
                >
                  Email
                </label>
                <input
                  id="add-warehouse-email"
                  type="text"
                  placeholder="Email"
                  className="CreateWarehousePage__form--input"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="CreateWarehousePage__button--container">
          <input
            className="CreateWarehousePage__button--cancel"
            type="button"
            value="Cancel"
            onClick={() => {
              navigate("/warehouse");
            }}
          />
          <input
            type="submit"
            className="CreateWarehousePage__button--addwarehouse"
            value="+ Add Warehouse"
          />
        </div>
      </form>
    </>
  );
}

export default CreateWarehousePage;
