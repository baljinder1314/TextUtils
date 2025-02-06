import { useContext } from "react";
import { stored } from "../store/store";

function TextForm({ heading }) {
  const {
    handleUpperCase,
    text,
    handleOnChange,
    handleLowerCase,
    handleCopyText,
    handleToClearText,
    handleToCapitalize,
    handleToRemoveExtraSpaces,
  } = useContext(stored);

  return (
    <>
      <h1>{heading}</h1>
      <div className="form-floating ">
        <textarea
          className="form-control"
          style={{ height: "250px", padding: "5px" }}
          placeholder="Leave a comment here"
          id="floatingTextarea"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button
          className="btn btn-primary my-2 mx-1"
          disabled={text.length === 0}
          onClick={handleUpperCase}
        >
          Uppercase
        </button>
        <button
          className="btn btn-primary my-2 mx-1"
          disabled={text.length === 0}
          onClick={handleLowerCase}
        >
          Lowercase
        </button>
        <button
          className="btn btn-primary my-2 mx-1"
          disabled={text.length === 0}
          onClick={handleCopyText}
        >
          Copy to Clip Board
        </button>
        <button
          className="btn btn-primary my-2 mx-1"
          disabled={text.length === 0}
          onClick={handleToClearText}
        >
          Clear the Text Box
        </button>
        <button
          className="btn btn-primary my-2 mx-1"
          disabled={text.length === 0}
          onClick={handleToCapitalize}
        >
          Capitalize
        </button>
        <button
          className="btn btn-primary my-2 mx-1"
          disabled={text.length === 0}
          onClick={handleToRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-4">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").filter((text) => text !== "").length} Words and{" "}
          {text.length} Characters{" "}
        </p>
        <p>
          {0.008 * text.split(" ").filter((text) => text !== "").length} Minutes
          read
        </p>
        <h2>Preview</h2>
        <p>{text || "Preview!"}</p>
      </div>
    </>
  );
}

export default TextForm;
