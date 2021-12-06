import React from 'react';
import {
    Jumbotron,
    Container,
    CardColumns,
    Card,
    Button,
  } from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_JEST } from '../utils/mutations';
import { removeJestId } from '../utils/localStorage';

import Auth from '../utils/auth';

const Profile = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const [removeJest, { error }] = useMutation(REMOVE_JEST);
  
    const userData = data?.me || {};
    console.log(userData)
  
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
  
    return (
      <>
        <Jumbotron fluid className="text-light bg-dark">
          <Container>
            <h1>Viewing {userData.username}'s Jests!</h1>
          </Container>
        </Jumbotron>
        <Container>
          <h2>
            {userData.jests?.length
              ? `Viewing ${userData.jests.length} saved ${
                  userData.jests.length === 1 ? 'Jest' : 'Jests'
                }:`
              : 'You have no saved Jests!'}
          </h2>
          <CardColumns>
            {userData.jests?.map((jest) => {
              return (
                <Card key={jest.jestId} border="dark">
                  {jest.image ? (
                    <Card.Img
                      src={jest.image}
                      alt={`The cover for ${jest.caption}`}
                      variant="top"
                    />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{jest.id}</Card.Title>
                    <p className="small">Jester: {jest.user}</p>
                    <Card.Text>{jest.caption}</Card.Text>
                    <Button
                      className="btn-block btn-danger"
                      onClick={() => handleDeleteJest(jest.jestId)}
                    >
                      Delete this Jest!
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </Container>
      </>
    );
  };

export default Profile