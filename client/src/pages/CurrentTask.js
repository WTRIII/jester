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
import AddJest from '../components/AddJest';

import Auth from '../utils/auth';
import image from '../jester2.jpg';

function CurrentTask() {
    const { loading, data } = useQuery(QUERY_JESTS);
    const [removeJest, { error }] = useMutation(REMOVE_JEST);


    const userData = data?.allJests || {};
    console.log("================myuserdata=========", userData);

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

            removeJestId(jestId);
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return <h2>LOADING...</h2>;
    }



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
            <AddJest/>
            <Jumbotron fluid className="jumbotron">
                <Container>
                    <h3>The task, should you choose to accept it: A ridiculous Christmas sweater</h3>
                </Container>
            </Jumbotron>
            <Container >
                <h3>
                    {userData.length?
                         `Viewing ${userData.length}  ${userData.length === 1 ? 'submission' : 'submissions'
                        }:`
                        : 'You have no saved submissions!'}
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