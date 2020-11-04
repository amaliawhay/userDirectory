import React from "react";
import { Button } from "react-bootstrap";

function ageButton({ onClick }) {
  return (
    <div>
      <Button type="submit" onClick={onClick}>
        Filter by age
      </Button>{" "}
    </div>
  );
}

export default ageButton;
