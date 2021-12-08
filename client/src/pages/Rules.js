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
                  Rule 1: Don't talk about Jester. 
              </Card>
              <Card>
                  Rule 2: Just kidding on rule 1. Tell everyone about Jester. 
              </Card>
              <Card>
                  Rule 3: Read the challenge. 
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
