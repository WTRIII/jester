import React from 'react';
import { Card, Col, Row} from 'react-bootstrap';
import TestPicture from "../imges/Hardcodedtestpic.jpg";

function CurrentJest() {
    return (
    <div>
        <Row className="justify-content-center"> <h1> See the current Jester challenge</h1> </Row>
       
        {/* <Row> */}
        <div md="auto">
            <Card md="auto" className="text-center">
                
            <h2> The Current Task</h2>

            <p>xxxxxxx</p>
                
            </Card>
            <div > 
               

                <Card >
                    <div className="row no-gutters">
                        <div className="col-md-6">

                            <Card.Img src= {TestPicture}  />
                        </div>
                        <div className="col-md-4">
                            <div className="card-body" >
                                <h1 className="card-title">createdBy</h1>
                                <p className="card-text"> Short jest description</p>
                                <br />
                                <p className="card-text">
                                    <a className="text-muted" href="https://github.com/Mitchell-est-Robbins/Project1-TheAppenders">  Repo</a>
                                    {/* this needs to be a button ^^^^^^ with redirect */}
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>

            </div>          
        {/* </Row> */}
        </div>
    </div>
    )
}

export default CurrentJest