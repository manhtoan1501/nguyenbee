import React from 'react';

const button_1 = {
    padding: '4px 12px',
    boderRadius: 8,
    backgroundColor: '#2196f3',
    color: 'white',
    margin: '0px 2px',
    boder: '2px solid white'
}

const button_2 = {
    padding: '4px 12px',
    boderRadius: 8,
    backgroundColor: '#aaa',
    color: 'white',
    margin: '0px 2px',
    boder: '2px solid white'
}

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    onAll = () => {
        const { getStatusView } = this.props;
        getStatusView('all');
    }

    onActive = () => {
        const { getStatusView } = this.props;
        getStatusView('active');
    }

    onComplete = () => {
        const { getStatusView } = this.props;
        getStatusView('complete');

    }

    onClearComplete = () => {
        const { onClearStudentsComplete, getStatusView } = this.props;
        getStatusView('ClearComplete');
        onClearStudentsComplete('onClearComplete')
    }

    render() {
        const { numberStudent, statusView } = this.props;
        return (
            <center>
                <div style={{ padding: 10, boder: 'solid 2px #aaa', width: 400 }}>
                    <p style={{ display: 'inline', padding: 8 }}>
                        {numberStudent} items
                    </p>
                    <button style={statusView === 'all' ? button_1 : button_2} onClick={this.onAll}>All</button>
                    <button style={statusView === 'active' ? button_1 : button_2} onClick={this.onActive}>Active</button>
                    <button style={statusView === 'complete' ? button_1 : button_2} onClick={this.onComplete}>Complete</button>
                    <button style={statusView === 'ClearComplete' ? button_1 : button_2} onClick={this.onClearComplete}>
                        ClearComplete
                    </button>
                </div >
            </center>
        );
    }
}

export default Footer;