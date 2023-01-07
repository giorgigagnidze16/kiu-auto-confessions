import React, { useCallback, useState } from "react";
import "./App.css";
import Cover from "./imgs/conf-form.jpg";
import TextInputWithTypewriterAnimation from "./input";
import { Button } from "@mui/material";

function App() {
  const [confession, setConfession] = useState<string>();

  const handleSubmit = useCallback(() => {
    console.log("Hello ", confession);
  }, [confession]);

  return (
    <div className={"app"}>
      <img src={Cover} alt={"conf-form.jpg"} className={"cover"} />

      <h1 className={"header"}>Your confession:</h1>

      <TextInputWithTypewriterAnimation
        value={confession}
        onChange={setConfession}
      />

      <div className={"actionButtons"}>
        <input
          accept="image/png, image/jpeg, image/jpg"
          style={{ display: "none" }}
          id="raised-button-file"
          multiple
          type="file"
        />
        <label htmlFor="raised-button-file">
          <Button variant="outlined" component="span">
            Add an attachment
          </Button>
        </label>
        <br />
        <br />
        <Button
          onClick={handleSubmit}
          variant="contained"
          style={{ textTransform: "none" }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
