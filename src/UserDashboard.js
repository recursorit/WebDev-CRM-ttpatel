import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const UserDashboard = () => {
  const currentUserSelector = useSelector((state) => state.loguser);
  return (
    <h1>
      Hi,
      {currentUserSelector.currentuser}
    </h1>
  );
};

export default UserDashboard;
