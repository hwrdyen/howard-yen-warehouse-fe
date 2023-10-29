import "./InventoryPage.scss";

// Components
import InventoryList from "../../components/InventoryList/InventoryList";

function InventoryPage(props) {
  return (
    <>
      <InventoryList AllInventoryInfo={props.AllInventoryInfo} />
    </>
  );
}

export default InventoryPage;
