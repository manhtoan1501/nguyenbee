import React from 'react';

const styleButton = {
    color: 'white',
    marginTop: 20,
    backgroundColor: '#2196f3',
    width: 160,
    height: 30,
    border: '2px solid white',
    fontSize: 16,
    padding: '4px 12px',
    alignItems: "center",
    textAlign: 'center'
}
const button_1 = {
    padding: '4px 12px',
    borderRadius: 6,
    backgroundColor: '#2196f3',
    color: 'white',
    margin: '0 2px',
    border: '2px solid white',
}

class ClassName extends React.Component {
    constructor(props) {
        super(props);
        const indexTest = null;
        this.state = {
            students: [
                { name: 'Nguyen van teo 0', status: true },
                { name: 'Nguyen van teo 1', status: true },
                { name: 'Nguyen van teo 2', status: true },
                { name: 'Nguyen van teo 3', status: true },
                { name: 'Nguyen van teo 4', status: true },
                // { name: 'Nguyen van teo 5' },

            ],
            studentDel: [],
            statusComplete: 'all',
            valueInput: '',
            valueEdit: '',
            indexEdit: null,
            checkInput: false,
            changeStudent: false,
            changeDel: false,
        }
    }

    addStudent = () => {
        // const themSV = this.state.students;
        const { valueInput, students, valueEdit, indexEdit } = this.state;
        if (valueInput !== '' && !valueEdit) { // Them SV
            students.push({ name: valueInput, status: true });
            this.setState({ students, valueInput: '', valueEdit: '' });
        } else if (valueEdit) { // Sua SV
            students.splice(indexEdit, 1, { name: valueInput, status: true });
            this.setState({ students, valueEdit: '', valueInput: '' });
        }
    }

    onChange = (element) => {
        const { value } = element.target;
        this.setState({ valueInput: value, checkInput: true });
    }

    onKeyDown = (element) => {
        const { keyCode } = element;
        if (keyCode == 13) {
            this.addStudent();
        }
    }

    onDeleteStudent(index) {
        const { students } = this.state;
        students.splice(index, 1);
        this.setState({ students });
    }

    editStudent(index) {
        let { valueEdit, students } = this.state;
        valueEdit = students[index].name;
        this.setState({ valueEdit: valueEdit, valueInput: valueEdit, indexEdit: index, checkInput: false });
    }

    onClickDel(status, index) {
        const { students } = this.state;
        students[index].status = !status;
        this.setState({ students });

    }

    onChangeStudent(status) {
        this.setState({ changeStudent: status });
    }

    onDelAll(status) {
        console.log('kkkkkkkkkk ', status);
        this.setState({ changeDel: status });
    }

    onAll = () => {
        this.setState({ statusComplete: 'all' })
    }

    onActive = () => {
        this.setState({ statusComplete: 'active' })
    }

    onComplete = () => {
        this.setState({ statusComplete: 'complete' })
    }

    renderStudent(item, status, index) {
        return (
            <div
                key={index}
                style={{
                    color: 'white',
                    fontSize: 16,
                    backgroundColor: status ? '#43a047' : '#aaa',
                    maxWidth: 400,
                    height: 25,
                    padding: 4,
                    margin: 10,
                    textAlign: 'left',
                    alignItems: 'left',
                }}
            >
                <div style={{}}>
                    {index + 1}, {item.name} <br />
                </div>
                <div style={{ marginTop: -15, textAlign: 'right' }}>
                    <button onClick={() => this.onDeleteStudent(index)}>
                        Xóa
                    </button>
                </div>
                <div style={{ marginTop: -22, marginRight: 50, textAlign: 'right' }}>
                    <button onClick={() => this.editStudent(index)}>
                        Sửa
                    </button>
                </div>
                <div style={{ marginTop: -22, marginLeft: -30 }}>
                    <input
                        type="checkbox"
                        checked={!status}
                        onClick={() => this.onClickDel(status, index)}
                    />
                </div>
            </div>
        );
    }

    onClearComplete = () => {
        // students: [
        //     { name: 'Nguyen van teo 0', status: true },
        //     { name: 'Nguyen van teo 1', status: true },
        //     { name: 'Nguyen van teo 2', status: true },
        //     { name: 'Nguyen van teo 3', status: true },
        //     { name: 'Nguyen van teo 4', status: true, code },
        //     // { name: 'Nguyen van teo 5' },

        // ],
        const _students = this.state.students;
        const keepStudents = [];
        _students.map((item, index) => {
            const { status } = item;
            if (status) {
                keepStudents.push(item);
            }
        })

        this.setState({ students: keepStudents });
    }

    renderStatusComplete(students, checkComplete) {
        return (
            <div style={{ padding: 10, border: 'solid 2px #aaa', width: 400 }} >
                <p style={{ display: 'inline', padding: 8 }}>
                    {students.length} items
                </p>
                <button style={button_1} onClick={this.onAll}>
                    All
                </button>
                <button style={button_1} onClick={this.onActive}>
                    Active
                </button>
                <button style={button_1} onClick={this.onComplete}>
                    Complete
                </button>
                {checkComplete &&
                    <button style={button_1} onClick={this.onClearComplete} >
                        Clear Complete
                    </button>
                }
            </div>
        );
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
                    height: 30,
                }}
            />
        );
    }

    render() {

        const { students, valueInput, changeStudent, changeDel, valueEdit } = this.state;
        let checkComplete = false;
        return (
            <div style={{ textAlign: 'center', margin: '0 auto' }}>
                <center>
                    <h1>So luong SV: {students.length}</h1>
                    {this.renderInput()}
                    <br />
                    <div style={{ marginTop: 20 }} >
                        {students.map((item, index) => {
                            const { status } = item;
                            const { statusComplete } = this.state;
                            // this.renderStudent(item, status, index)
                            if (!status) {
                                checkComplete = true;
                            }
                            if (statusComplete === 'all') {
                                return this.renderStudent(item, status, index)
                            } else if (statusComplete === 'complete' && !status) {
                                return this.renderStudent(item, status, index)

                            } else if (statusComplete === 'active' && status) {

                                return this.renderStudent(item, status, index)
                            }
                        })}
                    </div>
                    {this.renderStatusComplete(students, checkComplete)}
                </center >
            </div >
        );
    }
};

export default ClassName;