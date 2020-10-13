import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: '',
            student: {
                name: '',
                status: true,
            },
        };
    }

    componentWillReceiveProps(nextProps) {
        const { student } = nextProps;
        let name = '';
        if (student) {
            name = student.name;
            this.setState({ valueInput: name, student: student });
        }
    }

    onKeyDown = (element) => {
        const { keyCode } = element;
        const { valueInput, student } = this.state;
        const { getStudent, onEditStudent } = this.props;
        if (keyCode == 13 && valueInput !== '') {
            const dataStudent = { name: valueInput, status: true };
            const dataEdit = {
                name: valueInput,
                status: true,
            };
            if (!student) {
                onEditStudent(dataEdit);
                this.setState({ student: { name: '', status: true } })
                this.setState({ valueInput: '' });
            } else {
                getStudent(dataStudent);
                this.setState({ valueInput: '' });
            }
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