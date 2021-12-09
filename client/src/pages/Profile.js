import React from 'react';
import {
    Jumbotron,
    Container,
    CardColumns,
    Card,
    Button,
  } from 'react-bootstrap';
  import "../App.css";
  import AddJest from '../components/AddJest';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PROFILEJESTS } from '../utils/queries';
import { REMOVE_JEST } from '../utils/mutations';


import Auth from '../utils/auth';


function Profile() {
  const { loading, data } = useQuery(QUERY_PROFILEJESTS);
  const [removeJest, { error }] = useMutation(REMOVE_JEST);

  const userData = data?.profile || {};




  const handleDeleteJest = async (jestId) => {

    // get token


    const token = Auth.loggedIn() ? Auth.getToken() : null;
    // console.log("====================",token)
    if (!token) {
      return false;
    }
    // console.log("REMOVE =============", removeJest)
    try {
      await removeJest({
        variables: { _id: jestId }
      });
      console.log("========================inside try")
      //refresh page when jest is deleted 
      window.location.reload(false);

    } catch (err) {
      console.log("==============================OUTSIDE TRY")
      console.error(err);
    }
  };
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div className="profile">

        <AddJest />
        <Jumbotron fluid className="jumbotron">
          <Container>
            <h3>Viewing your Jests!</h3>
          </Container>
        </Jumbotron>

        <Container className="profile">
          <h2 className="jestsTitle">

            {userData.jests?.length
              ? `${userData.jests.length} saved ${userData.jests.length === 1 ? 'Jest' : 'Jests'
              }:`
              : 'You have no saved Jests!'}
          </h2>
          <CardColumns>
            {userData.jests.map((jest, i) => {
             
              return (
                <Card key={jest._id} border="dark">
                  {jest ? (
                    <Card.Img
                      src={jest.image}
                      alt={`The cover for ${jest.caption}`}
                      variant="top"
                    />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{jest.caption}</Card.Title>
                    <Card.Text>{jest.likes}</Card.Text>
                    <Button
                      data-jestid={jest._id}
                      className="btn-block btn-danger"
                      onClick={() => handleDeleteJest(jest._id)}
                    >
                      Delete this Jest!
                    </Button>
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

export default Profile