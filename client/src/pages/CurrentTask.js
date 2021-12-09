import React from 'react';
import {
    Jumbotron,
    Container,
    CardColumns,
    Card,
    Button,

} from 'react-bootstrap';
import "../App.css";


import { useQuery, useMutation } from '@apollo/client';
import { QUERY_JESTS } from '../utils/queries';
import { REMOVE_JEST } from '../utils/mutations';
import { removeJestId } from '../utils/localStorage';

import Auth from '../utils/auth';
import image from '../jester2.jpg';

function CurrentTask() {
    const { loading, data } = useQuery(QUERY_JESTS);
    const [removeJest, { error }] = useMutation(REMOVE_JEST);


    const userData = data?.allJests || {};
    // console.log("hello past world");
    // console.log(userData)

    // create function that accepts the book's mongo _id value as param and deletes the book from the database

    const handleDeleteJest = async (jestId) => {
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeJest({
                variables: { jestId },
            });

            // upon success, remove book's id from localStorage
            removeJestId(jestId);
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    //  const { jestData } = useQuery(QUERY_JESTS);
    // const jests = data?.jests || [];


    // NEW CODE START
    // const getTasks = async () => {
    //     //  const { loading, data } = useQuery(QUERY_JESTS);
    //     //  const [getCheckout, { data }] = useQuery(QUERY_JESTS);
    //     console.log("BIG TEST")
    //     console.log(data)
    //     // const [removeJest, { error }] = useMutation(REMOVE_JEST);

    //     const jestData = data?.jests || {};
    //     console.log(jestData)
    // };


    // create function that accepts the book's mongo _id value as param and deletes the book from the database

    const handleTasks = async (jestId) => {
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeJest({
                variables: { jestId },
            });

            // upon success, remove book's id from localStorage
            removeJestId(jestId);
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <>
        <div className="currenttask">
            <Jumbotron fluid className="jumbotron">
                <Container>
                    <h3 className>The task, should you choose to accept it: A ridiculous Christmas sweater</h3>
                </Container>
            </Jumbotron>
            <Container >
                <h3>
                    {userData.savedJests?.length
                        ? `Viewing ${userData.savedJests.length} saved ${userData.savedJests.length === 1 ? 'Jest' : 'Jests'
                        }:`
                        : 'You have no saved Jests!'}
                </h3>
                
                <CardColumns>
                    {userData.map((jest, i) => {
                        console.log(jest, i)
                        return (
                            <Card key={jest._id} border="dark">
                                {jest.image ? (
                                    <Card.Img
                                        src={jest.image}
                                        alt={`The cover for ${jest.caption}`}
                                        variant="top"
                                    />
                                ) : null}
                                <Card.Body>
                                    <Card.Title>{jest.jestTaskDescription}</Card.Title>
                                    <Card.Text>{jest.caption}</Card.Text>
                                    <p>likes: {jest.likes}</p>
                                   
                                </Card.Body>
                            </Card>
                        );

                    })}
                </CardColumns>
            </Container>
            </div>
        </>
    );
};

export default CurrentTask