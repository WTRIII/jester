import React from "react";
import { Jumbotron, Container, CardColumns, Card } from "react-bootstrap";
import "../App.css";

function Rules() {
  return (
    <>
      <div className="rules">
        <Jumbotron className="jumbotron">
          <Container>
            <h1>How to play Jester</h1>
          </Container>
        </Jumbotron>
        <Container>
          <CardColumns>
            <Card className="rulecard">
              <Card.Title>Rule 1:</Card.Title>. Don't talk about Jester.
            </Card>
            <Card className="rulecard">
              <Card.Title>Rule 2:</Card.Title>
              Just kidding on rule 1. Tell everyone about Jester.
            </Card>
            <Card className="rulecard">
              <Card.Title>Rule 3: Read the challenge.</Card.Title>
            </Card>
            <Card className="rulecard">
              <Card.Title>Rule 4</Card.Title>
            </Card>
            <Card className="rulecard">
              <Card.Title>Rule 5</Card.Title>
            </Card>
          </CardColumns>
        </Container>
        {/* 4 cards of blah blah blah */}
      </div>
    </>
  );
}

export default Rules;
