import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const AlertDismissible = ({ children }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        {children}
      </Alert>
    );
  }
  return null;
};

export default AlertDismissible;
