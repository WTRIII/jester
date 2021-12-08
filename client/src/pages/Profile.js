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
import { QUERY_USER, QUERY_ALLJESTS, QUERY_PROFILEJESTS } from '../utils/queries';
import { REMOVE_JEST } from '../utils/mutations';
import { removeJestId } from '../utils/localStorage';

import Auth from '../utils/auth';
// import image from '../jester2.jpg';

function Profile() {
    const { loading, data } = useQuery(QUERY_PROFILEJESTS);
    // const [removeJest, { error }] = useMutation(REMOVE_JEST);
  
    const userData = data?.profile || {};
    console.log("hello user world");
    console.log(userData)
  
    // create function that accepts the book's mongo _id value as param and deletes the book from the database
    
    const handleDeleteJest = async (jestId) => {
       // get token
      const token = Auth.loggedIn() ? Auth.getToken() : null;
  
      if (!token) {
        return false;
      }
  
      //  try {
      //    const { data } = await removeJest({
      //      variables: { jestId },
      //    });
  
      //    // upon success, remove book's id from localStorage
      //    removeJestId(jestId);
      //  } catch (err) {
      //    console.error(err);
      //  }
    };
  
    // if (loading) {
    //   return <h2>LOADING...</h2>;
    // }

    //  const dataUser = useQuery(QUERY_USER);
    //  const users = data?.tasks || [];


    //NEW CODE START
    //  const getUser = async () => {
    //   //  const { loading, data } = useQuery(QUERY_TASKS);
    //   //  const [getCheckout, { data }] = useQuery(QUERY_USER);
    //    console.log("BIG TEST")
    //    console.log(data)
    //    // const [removeJest, { error }] = useMutation(REMOVE_JEST);
    
    //    const userData = data?.users || {};
    //    console.log(userData)
    //  };
    
  
    // create function that accepts the book's mongo _id value as param and deletes the book from the database
    
    //  const handleTasks = async (jestId) => {
    //    // get token
    //    const token = Auth.loggedIn() ? Auth.getToken() : null;
  
    //    if (!token) {
    //      return false;
    //    }
  
    //    try {
    //      const { data } = await removeJest({
    //        variables: { jestId },
    //      });
  
    //      // upon success, remove book's id from localStorage
    //      removeJestId(jestId);
    //    } catch (err) {
    //      console.error(err);
    //    }
    //  };
  
     if (loading) {
       return <h2>LOADING...</h2>;
     }
  
    return (
      <>
        <div className="profile">

       
        <Jumbotron fluid className="jumbotron">
          <Container>
            <h3>Viewing your Jests!</h3>
          </Container>
        </Jumbotron>

        <Container className="profile">
          <h2>

            {userData.savedJests?.length
              ? `Viewing ${userData.savedJests.length} saved ${
                  userData.savedJests.length === 1 ? 'Jest' : 'Jests'
                }:`
              : 'You have no saved Jests!'}
           </h2>
          <CardColumns>
            {userData.jests.map((jest, i) => {
              console.log(jest, i)
                return (
                  <Card key={jest._id} border="dark">
                    {jest.jests ? (
                      <Card.Img
                        src={ jest.image }
                        alt={`The cover for ${jest.caption}`}
                        variant="top"
                      />
                    ) : null}
                    <Card.Body>
                      <Card.Title>{jest._id}</Card.Title>
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
        </div>
      </>
    );
  };

export default Profile