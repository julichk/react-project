import classNames from "classnames";
import { useState, useEffect } from "react";

function List({ checkboxes, setCheckboxes, className }) {
  const formClassName = classNames(className);

  const [inputText, setInputText] = useState("");
  //додати
  const handleClick = (event) => {
    event.preventDefault();
    if (inputText !== "") {
      const newCheckbox = {
        className: "conteiner_checkbox_check",
        label: inputText,
      };
      const updatedCheckboxes = [...checkboxes, newCheckbox];
      setCheckboxes(updatedCheckboxes);
      saveCheckboxesToLocalStorage(updatedCheckboxes);
      setInputText("");
    }
  };

  const saveCheckboxesToLocalStorage = (updatedCheckboxes) => {
    localStorage.setItem("checkboxes", JSON.stringify(updatedCheckboxes));
  };

  //з локального
  useEffect(() => {
    const storedCheckboxes = localStorage.getItem("checkboxes");
    if (storedCheckboxes) {
      setCheckboxes(JSON.parse(storedCheckboxes));
    }
  }, [setCheckboxes]);
  
  const handleInput = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="note-box">
      <form action="#" className={formClassName}>
        <input
          type="text"
          name="newItem"
          value={inputText}
          onChange={handleInput}
          className="conteiner_form_input"
          placeholder="Create a new todo..."
          autoComplete="off"
        />
        <button
          type="submit"
          className="conteiner_form_button add-todo"
          onClick={handleClick}
          aria-label="add-new-todo"
        >
          Add
        </button>
      </form>

      <div className="block">
        {checkboxes.map((checkbox) => (
          <div key={checkbox.className} className="block_conteiner-checkbox">
            <input type="checkbox" className={checkbox.className} />
            <label
              htmlFor={checkbox.className}
              className="conteiner_checkbox_text"
            >
              {checkbox.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
