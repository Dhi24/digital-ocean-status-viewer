import React from "react";

import "./../footer/Footer.css";

function Footer(props) {
  return (
    <footer>
      <div className="d-flex justify-content-around">
        <span>Digital Ocean Status Viewer@{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;
