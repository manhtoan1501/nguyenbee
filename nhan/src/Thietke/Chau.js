import React, { Component } from 'react';

class Con extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderChat() {
        return (
            <div style={{ border: 'solid 3px grey', width: 100, height: 100, margin: 20 }} >
                <h1>Chat</h1>
            </div>
        );
    }


    render() {
        return (
            <div style={{ border: 'solid 3px grey', width: 200, height: 200, margin: 20 }} >
                <h1>Minh la Chau</h1>
                {this.renderChat()}
            </div>
        );
    }
}

export default Con;