import React, { Component } from 'react';
// import Con from './Con';
import Chau from './Chau';

class Cha extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderCon() {
        return (
            <div style={{ border: 'solid 3px orange', width: 300, height: 300, margin: 20 }} >
                <h1>Minh la Con</h1>
                <Chau />
            </div>
        );
    }

    render() {
        return (
            <div style={{ border: 'solid 3px blue', width: 400, height: 400, margin: 20 }} >
                <h1>Minh la Cha</h1>
                {/* <div style={{ border: 'solid 3px orange', width: 300, height: 300, margin: 20 }} >
                    <h1>Minh la Con</h1>
                    <Chau />
                </div> */}
                {this.renderCon()}
            </div>
        );
    }
}

export default Cha;