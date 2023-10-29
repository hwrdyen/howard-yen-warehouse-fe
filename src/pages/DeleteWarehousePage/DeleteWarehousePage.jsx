import "./DeleteWarehousePage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Icons
import Close_Icon from "../../assets/icons/close-24px.svg";

function DeleteWarehousePage(props) {
  const navigate = useNavigate();
  let { warehouseID } = useParams();
  const [DeleteWarehouse, setDeleteWarehouse] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/warehouse/${warehouseID}`)
      .then((element) => {
        let return_warehouse = element.data;
        let delete_warehouse = return_warehouse.find(
          (warehouse) => warehouse.id === warehouseID
        );
        setDeleteWarehouse(delete_warehouse);
      })
      .catch((error) => {
        // if (error.response.status === 404) {
        //   navigate("/*");
        // }
        navigate("/*");
      });
    // console.log("useEffect triggered with warehouseID: ", DeleteWarehouse);
  }, [warehouseID]);

  const ClickonDelete = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:8000/warehouse/${warehouseID}`)
      .then(() => {
        props.setAllWarehouseInfo([]);
        props.setAllInventoryInfo([]);
        navigate("/warehouse");
      })
      .catch((error) => {
        navigate("/*");
      });
  };

  return (
    <>
      <div className="DeleteWarehousePage__container">
        <div className="DeleteWarehousePage__closeicon--container">
          <img
            className="DeleteWarehousePage__closeicon"
            src={Close_Icon}
            alt="Close Icon"
            onClick={() => navigate(-1)}
          />
        </div>

        <div className="DeleteWarehousePage__title--container">
          <div className="DeleteWarehousePage__title">
            Delete {DeleteWarehouse?.name} warehouse?
          </div>
          <div className="DeleteWarehousePage__subtitle">
            Please confirm that you'd like to delete the {DeleteWarehouse?.name}{" "}
            from the list of warehouses. You won't be able to undo this action.
          </div>
        </div>

        <div className="DeleteWarehousePage__button--container">
          <button
            className="DeleteWarehousePage__button--cancel"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            className="DeleteWarehousePage__button--delete"
            onClick={ClickonDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteWarehousePage;
