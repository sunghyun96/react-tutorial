import React from 'react';
import {Button} from 'reactstrap' // Import the reactstrap button

function OurButton() {
    return <Button color="success">Click me</Button> // The Button must be capitalized to match import
    // Changed the color to "success" to make it green.
    // All of the available customizations are in the reactstrap documentation.
    // There is code available to copy to use like navbar.
}

// Make OurButton available to other components.
export default OurButton;