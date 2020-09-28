import React, { Component } from 'react';
import Cha from './Cha';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ border: 'solid 3px red', width: 500, height: 500 }} >
                <h1>Minh la Index</h1>
                <Cha />
            </div>
        );
    }
}

export default Index;