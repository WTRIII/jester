import React from 'react';
import logo from '../images/jesterHeader.jpg';
import { Card } from "react-bootstrap";
import '../App.css';

function Main() {
    return (
        <div className="main">
        <Card>

        <img src={logo}/>


        </Card>
        </div>
    )
}

export default Main