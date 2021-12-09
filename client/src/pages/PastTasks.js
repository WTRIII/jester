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

function PastTasks() {
  
    const { loading, data } = useQuery(QUERY_JESTS);
    const [removeJest, { error }] = useMutation(REMOVE_JEST);
  
    const userData = data?.tasks || {};
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
     const jests = data?.jests || [];


    // NEW CODE START
    //  const getTasks = async () => {
    //   //  const { loading, data } = useQuery(QUERY_JESTS);
    //   //  const [getCheckout, { data }] = useQuery(QUERY_JESTS);
    //    console.log("BIG TEST")
    //    console.log(data)
    //    // const [removeJest, { error }] = useMutation(REMOVE_JEST);
    
    //    const jestData = data?.jests || {};
    //    console.log(jestData)
    //  };
    
  
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
        <Jumbotron fluid className="text-light bg-dark">
          <Container>
            <h1>Viewing {}'s Jests!</h1>
          </Container>
        </Jumbotron>
        <Container> 
          <h2>
            {userData.savedJests?.length
              ? `Viewing ${userData.savedJests.length} saved ${
                  userData.savedJests.length === 1 ? 'Jest' : 'Jests'
                }:`
              : 'You have no saved Jests!'}
          </h2>  
          <CardColumns>
            {userData.map((jest, i) => {
              // console.log(jest, i)
                return (
                  <Card key={jest._id} border="dark">
                    {jest.jestsArray ? (
                      <Card.Img
                        src={ image }
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
      </>
    );
  };

export default PastTasks