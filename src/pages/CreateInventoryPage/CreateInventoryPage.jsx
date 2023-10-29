import "./CreateInventoryPage.scss";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { NavLink, useNavigate } from "react-router-dom";

// Icons
import LeftArrow_Icon from "../../assets/icons/arrow_back-24px.svg";

function CreateInventoryPage(props) {
  const navigate = useNavigate();

  const submitNewInventory = (event) => {
    event.preventDefault();
    let new_form = document.getElementById("add-inventory-form");
    let new_name = document.getElementById("add-inventory-name").value;
    let new_description = document.getElementById(
      "add-inventory-description"
    ).value;
    let new_category = document.getElementById("add-inventory-category").value;
    let input_stock_status = document.querySelector(
      `input[name='add-inventory-stock-status']:checked`
    ).value;
    let new_stock_status =
      input_stock_status === "in-stock" ? "In Stock" : "Out of Stock";
    let new_quantity = document.getElementById("add-inventory-quantity").value;
    let new_warehouse = document.getElementById(
      "add-inventory-warehouse"
    ).value;

    let newObjData = {
      id: uuidv4(),
      warehouseID: uuidv4(),
      warehouseName: new_warehouse,
      itemName: new_name,
      description: new_description,
      category: new_category,
      status: new_stock_status,
      quantity: new_quantity,
    };

    new_form.reset();
    axios.post("http://localhost:8000/inventory/all", newObjData).then(() => {
      props.setAllInventoryInfo([]);
      navigate("/inventory");
    });
  };

  return (
    <>
      <form
        className="CreateInventoryPage__container"
        id="add-inventory-form"
        onSubmit={submitNewInventory}
      >
        <div className="CreateInventoryPage__title--container">
          <NavLink to={"/inventory"}>
            <img src={LeftArrow_Icon} alt="Left Arrow Icon" />
          </NavLink>

          <div className="CreateInventoryPage__title">
            Add New Inventory Item
          </div>
        </div>

        <div className="CreateInventoryPage__form--container">
          <div className="CreateInventoryPage__form--subcontainer">
            <div className="CreateInventoryPage__form--title">Item Details</div>
            <div className="CreateInventoryPage__form--form">
              <div className="CreateInventoryPage__form--subform">
                <label
                  htmlFor="add-inventory-name"
                  className="CreateInventoryPage__form--label"
                >
                  Item Name
                </label>
                <input
                  id="add-inventory-name"
                  type="text"
                  placeholder="Item Name"
                  className="CreateInventoryPage__form--input"
                  required
                />
              </div>
              <div className="CreateInventoryPage__form--subform">
                <label
                  htmlFor="add-inventory-description"
                  className="CreateInventoryPage__form--label"
                >
                  Description
                </label>
                <textarea
                  id="add-inventory-description"
                  type="textarea"
                  placeholder="Please enter a brief item description..."
                  className="CreateInventoryPage__form--descriptioninput"
                  required
                />
              </div>
              <div className="CreateInventoryPage__form--subform">
                <label
                  htmlFor="add-inventory-category"
                  className="CreateInventoryPage__form--label"
                >
                  Category
                </label>
                <select
                  id="add-inventory-category"
                  className="CreateInventoryPage__form--input"
                  required
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Gear">Gear</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Health">Health</option>
                </select>
              </div>
            </div>
          </div>

          <div className="CreateInventoryPage__form--subcontainer">
            <div className="CreateInventoryPage__form--title">
              Item Availability
            </div>
            <div className="CreateInventoryPage__form--form">
              <div className="CreateInventoryPage__form--subform">
                <div className="CreateInventoryPage__form--label">Status</div>
                <div className="CreateInventoryPage__form--radioinput">
                  <div className="CreateInventoryPage__form--radiosubinput">
                    <input
                      type="radio"
                      name="add-inventory-stock-status"
                      id="create-in-stock"
                      value="in-stock"
                      className="CreateInventoryPage__form--radioinput"
                    />
                    <label
                      htmlFor="create-in-stock"
                      className="CreateInventoryPage__form--radiolabel"
                    >
                      In Stock
                    </label>
                  </div>
                  <div className="CreateInventoryPage__form--radiosubinput">
                    <input
                      type="radio"
                      name="add-inventory-stock-status"
                      id="create-out-of-stock"
                      value="out-of-stock"
                      className="CreateInventoryPage__form--radioinput"
                    />
                    <label
                      htmlFor="create-out-of-stock"
                      className="CreateInventoryPage__form--radiolabel"
                    >
                      Out of Stock
                    </label>
                  </div>
                </div>
              </div>
              <div className="CreateInventoryPage__form--subform">
                <label
                  htmlFor="add-inventory-quantity"
                  className="CreateInventoryPage__form--label"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  id="add-inventory-quantity"
                  placeholder="0"
                  className="CreateInventoryPage__form--input"
                  required
                />
              </div>

              <div className="CreateInventoryPage__form--subform">
                <label
                  htmlFor="add-inventory-warehouse"
                  className="CreateInventoryPage__form--label"
                >
                  Warehouse
                </label>
                <input
                  type="text"
                  id="add-inventory-warehouse"
                  placeholder="Warehouse Name"
                  className="CreateInventoryPage__form--input"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="CreateInventoryPage__button--container">
          <input
            className="CreateInventoryPage__button--cancel"
            type="button"
            value="Cancel"
            onClick={() => {
              navigate("/inventory");
            }}
          />
          <input
            type="submit"
            className="CreateInventoryPage__button--addinventory"
            value="+ Add Item"
          />
        </div>
      </form>
    </>
  );
}

export default CreateInventoryPage;
