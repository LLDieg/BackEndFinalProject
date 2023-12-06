import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <ul className="footer">
      <li> <a href="https://github.com/BarbaraPapa" target="_blank"> ©️ Copyright - Barbara Papa</a></li>
      <li> <a href="https://github.com/SureLife" target="_blank"> ©️ Copyright - Daniel Lavin</a></li>
      <li>
        {" "}
        <div className="imageHolder">
          {" "}
          <a href="https://github.com/LLDieg/Deliverando-Project" target="_blank">   <img src="pubblic/logo.png" style={{ width: 100 }} alt="logo" /> </a>
          {/* <div className="thanks"> Thanks for Ordering</div> */}
        </div>
      </li>
      <li> <a href="https://github.com/LLDieg" target="_blank"> ©️ Copyright - Diego LLerena</a></li>
      <li> <a href="https://github.com/Julz1997" target="_blank"> ©️ Copyright - Julian Hentzen</a></li>
    </ul>
  );
}

export default Footer;
