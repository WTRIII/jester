import React from "react";
import { Jumbotron, Container, CardColumns, Card } from "react-bootstrap";
import "../App.css";

function Rules() {
  return (
    <>
    <div className="rules">

   
      <Jumbotron className="jumbotron">
        <Container>
          <h1 >Jester Rules</h1>
        </Container>
      </Jumbotron>
      <Container>
          <CardColumns>
              <Card>
                  Rule 1
              </Card>
              <Card>
                  Rule 2
              </Card>
              <Card>
                  Rule 3
              </Card>
              <Card>
                  Rule 4
              </Card>
              <Card>
                  Rule 5
              </Card>
          </CardColumns>
      </Container>
      {/* 4 cards of blah blah blah */}
      </div>
    </>
  );
}

export default Rules;
