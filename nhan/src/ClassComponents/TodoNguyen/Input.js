import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: '',
        };
    }

    componentWillReceiveProps(nextProps) {
        const { student } = nextProps;
        let name = '';
        if (student) {
            name = student.name;
        }
        // this.setState({ valueInput: name });
    }

    onKeyDown = (element) => {
        const { keyCode } = element;
        const { valueInput } = this.state;
        const { getStudent, onEditStudent, student } = this.props;
        if (keyCode == 13 && valueInput !== '') {
            const student = { name: valueInput, status: true };
            getStudent(student);
            this.setState({ valueInput: '' });
            const dataEdit = {
                name: valueInput,
                status: true,
            };
            onEditStudent(dataEdit);
            this.setState({ valueInput: '' });
        }
    }

    onChange = (element) => {
        const { value } = element.target;
        this.setState({ valueInput: value });
    }

    render() {
        const { valueInput } = this.state;
        return (
            <div>
                <center>
                    <input
                        onKeyDown={this.onKeyDown}
                        onChange={this.onChange}
                        name="name"
                        type="text"
                        placeholder='Nhap ten sinh vien'
                        value={valueInput}
                        style={{
                            backgroundColor: 'white',
                            fontSize: 14,
                            width: 350,
                            height: 30
                        }}
                    />
                </center>
            </div>
        );
    }
}

export default Input;