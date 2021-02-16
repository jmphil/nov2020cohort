import React from "react";
import { Link } from "react-router-dom";

const BaseLayout = (props) => {
  return (
    <>
      <Link to="/">Home</Link><br/>
      <Link to="/count">View Count</Link><br/>
      <Link to="/count_hooks">Count Hooks</Link><br/>
      <Link to="/count_view_hooks">View Count Hooks </Link>
      <Link to="/forms">Forms</Link>

        <br /> <br />
      {props.children}
    </>
  );
};

export default BaseLayout;