import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { students } = this.props;
        return (
            <center>
                <h1> Todos: {students.length} </h1>
            </center>
        );
    }
}

export default Header;