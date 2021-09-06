import React from "react";
import "./App.css";
import Button from "./Component/Button";
const App = () => {
  return (
    <div className="App">
      <h1 className="header">ButtonS</h1>
      <div className="flex-column">
        <div className="flex-row first-item">
          <Button
            size="btn--ExtraLarge"
            variant="btn--blue"
            label="Button"
          ></Button>
          <Button size="btn--large" variant="btn--blue" label="Button"></Button>
          <Button
            size="btn--medium"
            variant="btn--blue"
            label="Button"
          ></Button>
          <Button size="btn--small" variant="btn--blue" label="Button"></Button>
        </div>
        <div className="flex-row second-item">
          <Button
            size="btn--ExtraLarge"
            variant="btn--green"
            label="Button"
          ></Button>
          <Button
            size="btn--large"
            variant="btn--green"
            label="Button"
          ></Button>
          <Button
            size="btn--medium"
            variant="btn--green"
            label="Button"
          ></Button>
          <Button
            size="btn--small"
            variant="btn--green"
            label="Button"
          ></Button>
        </div>
        <div className="flex-row third-item">
          <Button
            size="btn--ExtraLarge"
            variant="btn--outlined"
            label="Button"
          ></Button>
          <Button
            size="btn--large"
            variant="btn--outlined"
            label="Button"
          ></Button>
          <Button
            size="btn--medium"
            variant="btn--outlined"
            label="Button"
          ></Button>
          <Button
            size="btn--small"
            variant="btn--outlined"
            label="Button"
          ></Button>
        </div>
        <div className="flex-row fourth-item">
          <Button
            size="btn--ExtraLarge"
            variant="btn--red"
            label="Button"
          ></Button>
          <Button size="btn--large" variant="btn--red" label="Button"></Button>
          <Button size="btn--medium" variant="btn--red" label="Button"></Button>
          <Button size="btn--small" variant="btn--red" label="Button"></Button>
        </div>
        <div className="flex-row fourth-item">
          <Button
            size="btn--ExtraLarge"
            variant="btn--grey"
            label="Button"
          ></Button>
          <Button size="btn--large" variant="btn--grey" label="Button"></Button>
          <Button
            size="btn--medium"
            variant="btn--grey"
            label="Button"
          ></Button>
          <Button size="btn--small" variant="btn--grey" label="Button"></Button>
        </div>
      </div>
    </div>
  );
};

export default App;
