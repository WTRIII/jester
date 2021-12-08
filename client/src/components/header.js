import React from "react";
import { Row, Header, Card } from "react-bootstrap";
import Icon from "../images/jesterHeader.jpg";

function appHeader() {
  return (
    <div>
      <div className="header">
        <Card className="">
          <img className="img-responsive" src={Icon} alt="jester icon" fluid></img>
        </Card>
      </div>
    </div>
  );
}

export default appHeader;
