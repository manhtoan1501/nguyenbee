import React from 'react';

function Con(props) {
    return (
        <div>
            <h2>Minh la con nho nhat</h2>
            {props.children}
        </div>
    );
}

function Cha(props) {
    return (
        <Con color="blue" >
            <h1 className="Dialog-title">TITLE</h1>
            <p className="Dialog-message">MESSAGE</p>
            {props.children}
        </Con>
        // <div>
        //     <Con />
        //     <h1 className="Dialog-title">TITLE</h1>
        //     <p className="Dialog-message">MESSAGE</p>
        //     {props.children}
        // </div>
    );
}

class Ongnoi extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: '' };
    }

    handleChange = (e) => {
        this.setState({ login: e.target.value });
    }

    handleSignUp = () => {
        alert('Welcome aboard, ' + this.state.login);
    }

    render() {
        const { login } = this.state;
        return (
            <Cha>
                <input value={login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>Sign Me Up!</button>
            </Cha>
            // <div>
            //     <Cha />
            //     <input value={login} onChange={this.handleChange} />
            //     <button onClick={this.handleSignUp}>Sign Me Up!</button>
            // </div>
        );
    }
}

export default Ongnoi;

