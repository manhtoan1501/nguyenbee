import React from 'react';

class TodoNguyen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            valueInput: '',
            valueEdit: '',
            indexEdit: null,
        };
    }

    addStudents = () => {

        const { valueInput, students, valueEdit, indexEdit } = this.state;
        if (valueInput !== '' && !valueEdit) { // Them moi SV
            console.log('114  114 THem SV');
            students.push({ name: valueInput, status: true });
            this.setState({ students, valueInput: '' });
        } else if (valueEdit) { // Sua SV
            console.log('114  114  Sua Sv');
            students.splice(indexEdit, 1, { name: valueInput, status: true });
            this.setState({ students, valueEdit: '', valueInput: '' });
        }
    }

    onKeyDown = (element) => {
        const { keyCode } = element;
        if (keyCode == 13) {

            this.addStudents();
        }
    }

    onChange = (element) => {
        const { value } = element.target;
        this.setState({ valueInput: value });
    }

    deleteStudent(index) {
        const { students } = this.state;
        students.splice(index, 1);
        this.setState({ students });
    }

    editStudent(index) {
        let { students, valueEdit } = this.state;
        valueEdit = students[index].name;
        this.setState({ valueEdit: valueEdit, valueInput: valueEdit, indexEdit: index })
    }

    renderInput() {
        const { valueInput } = this.state;
        return (
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
        );
    }

    renderStudent(item, status, index) {

        return (
            <div
                key={index}
                style={{
                    color: 'white',
                    fontSize: 16,
                    backgroundColor: '#43a047',
                    maxWidth: 400,
                    height: 25,
                    padding: 4,
                    margin: 10,
                    textAlign: 'left',
                    alignItems: 'left'
                }}
            >
                {index + 1}, {item.name} <br />

                <div style={{ marginTop: -15, textAlign: 'right' }}>
                    <button onClick={() => this.deleteStudent(index)}>
                        Xóa
                    </button>
                </div>

                <div style={{ margin: '-22px 50px ', textAlign: 'right' }}>
                    <button onClick={() => this.editStudent(index)}>
                        Sửa
                    </button>
                </div>
            </div>
        );

    }

    render() {
        const { valueInput, students, valueEdit } = this.state;
        // console.log(">>>>>> ", valueInput, ' + ', valueEdit);
        console.log(' nguyen SV', students);
        return (
            <div>
                <center>
                    <h1>So luong SV: {students.length}</h1>
                    {this.renderInput()}
                    <br />
                    {students.map((item, index) => {
                        const { status } = item;
                        return this.renderStudent(item, status, index)
                    })}
                </center>
            </div >
        );
    }
}

export default TodoNguyen;