import classNames from "classnames";
import ButtonReset from "../elements/ButtonReset";

function Total({ checkboxes, setCheckboxes, className }) {
  const totalClassName = classNames(className);

  const renderCounterText = () => {
    const itemCount = checkboxes.length;
    if (itemCount === 0) {
      return <p>There is no item yet</p>;
    } else if (itemCount === 1) {
      return <p>{itemCount} Item</p>;
    } else {
      return <p>{itemCount} Items</p>;
    }
  };

  const handleReset = () => {
    setCheckboxes([]);
    localStorage.removeItem("checkboxes");
  };

  return (
    <div className="red">
      <p className={`${totalClassName}`}>{renderCounterText()}</p>
      <ButtonReset onClick={handleReset} aria-label="clear-todo" />
    </div>
  );
}

export default Total;
