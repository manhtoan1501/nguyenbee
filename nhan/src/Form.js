import React from 'react';


const xx = 2222;
const fd = 44;

function FuncComponent(props) {
    const { name, style } = props;
    return (
        <h1>Minh la Func Component: {name}, {style}</h1>
    );
}

class FlavorForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log('handleSubmit', event);
        alert('An essay was submitted: ' + this.state.value, event);
    }

    render() {
        const cdc = 45;
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    <FuncComponent name={"Minh la nguyen"} />
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Lime"> Lime </option>
                        <option value="Coconut"> Coconut </option>
                        <option value="Mango"> Mango </option>
                        <option value="Apple"> Apple </option>
                    </select>
                </label>
                <textarea value="lllllllll" name='textInput' style={{ width: 500, height: 200 }} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FlavorForm;