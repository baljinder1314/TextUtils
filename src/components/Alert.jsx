import { useContext } from "react";
import { stored } from "../store/store";

function Alert() {
  const { alert } = useContext(stored);
  const capitalize = (word) => {
    let newWord = word.charAt(0).toUpperCase() + word.slice(1);
    return newWord;
  };
  return (
    alert && (
      <div className="alert alert-success" role="alert">
        {alert.msg}:<strong>{capitalize(alert.type)}</strong>
      </div>
    )
  );
}

export default Alert;
