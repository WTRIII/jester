import React from "react";
import { Row, Header, Card } from "react-bootstrap";
import Icon from "../images/testheader1.jpg";


function appHeader() {
  return (
    <div>
      <div className="header">
        <Card  className="headercard">
          <img  className="fluid" src={Icon} alt="jester icon" ></img>
        </Card>
      </div>
    </div>
  );
}

export default appHeader;
