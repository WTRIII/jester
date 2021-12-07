import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { SAVE_JEST } from '../utils/mutations';
// ========^^^^ add jest?===============================

import Auth from '../utils/auth';

//SignupForm to AddJestForm
// username=caption
//  email=image

// caption, image, (user id from me?) (task=true?)

const AddJestForm = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({
        caption: '',
        image: '',
        
    });
    console.log(userFormData)
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const [addUser, { error }] = useMutation(SAVE_JEST);
    // =======^^what does this do=======add jest?^^^^=============
    console.log(addUser)
    useEffect(() => {
        if (error) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [error]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        //======^^^ name is what
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addUser({
                variables: { ...userFormData },
            });
            console.log(data);
            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            caption: '',
            image: '',
        });


        // window.location.replace('/CurrentTask');   ============
        // =====================do we want to redirect=========

    };

    return (
        <>
            {/* This is needed for the validation functionality above */}
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                {/* show alert if server response is bad */}
                <Alert
                    dismissible
                    onClose={() => setShowAlert(false)}
                    show={showAlert}
                    variant="danger"
                >
                    There was a problem with your submission. Please try again.
                </Alert>

                <Form.Group>
                    <Form.Label htmlFor="caption">Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Be Witty"
                        name="caption"
                        onChange={handleInputChange}
                        value={userFormData.caption}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        A description is required.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="image">Your Jest Image</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Just the link"
                        name="image"
                        onChange={handleInputChange}
                        value={userFormData.image}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        A valid Jest link is required.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button
                    disabled={
                        !(
                            userFormData.caption &&
                            userFormData.image 
                            
                        )
                    }
                    type="submit"
                    variant="success"
                >
                    Submit Jest!
                </Button>
            </Form>
        </>
    );
};

export default AddJestForm;