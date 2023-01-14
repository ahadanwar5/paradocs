import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loader(props) {
  return (
    <div
      class="container-fluid mx-auto"
      style={{ width: "500px", height: "500px" }}
    >
      <Spinner
        animation="border"
        style={{ marginTop: "200px" }}
        variant="info"
      />
    </div>
  );
}

export default Loader;
