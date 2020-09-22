import React from 'react';

class Chuyendoinhietdo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nhietdo: 0,
        }
    }

    onChange = (e) => {
        const value = e.target.value;
        this.setState({ nhietdo: value });
    }
    render() {
        const { nhietdo } = this.state;
        return (
            <div>
                <h1>Nhiet do C</h1>
                <input value={Number(nhietdo)} onChange={this.onChange} />
                <h1>Nhiet do F</h1>
                <input value={Number(nhietdo) + 32} onChange={this.onChange} />
            </div>
        );
    }
}

export default Chuyendoinhietdo;