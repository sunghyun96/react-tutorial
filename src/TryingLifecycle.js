import React from 'react';

class TryingLifecycle extends React.Component {
    constructor(props) {
        // Always call super and pass in props.
        super(props);
        console.log('I am inside of the constructor.')
    }
    componentDidMount() {
        console.log('I am inside of the component did mount.')
    }
    render() {
        // Make sure to return some HTML in the render method.
        console.log('I am inside of the render');
        return <h1>Hello from TryingLifecycle.</h1>
    }
}

// Export to use in App.js
export default TryingLifecycle;