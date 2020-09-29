import React from 'react';

const button_1 = {
    padding: '4px 12px',
    boderRadius: 8,
    backgroundColor: '#2196f3',
    color: 'white',
    margin: '0px 2px',
    boder: '2px solid white'
}
class TodoNguyen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                { name: 'Nguyen van Tí 0', status: true },
                { name: 'Nguyen van Tí 1', status: true },
                { name: 'Nguyen van Tí 2', status: true },
            ],
            valueInput: '',
            valueEdit: '',
            indexEdit: null,
            statusComplete: 'all'
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

    onClickDel(status, index) {
        const { students } = this.state;
        students[index].status = !status;
        this.setState({ students });
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
                    backgroundColor: status ? '#43a047' : '#aaa',
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
                <div style={{ marginTop: -22, marginLeft: -30 }}>
                    <input
                        type='checkbox'
                        checked={!status}
                        onClick={() => this.onClickDel(status, index)}
                    />
                </div>
            </div>
        );

    }

    renderStatusComplete(students, checkComplete) {
        return (
            <div style={{ padding: 10, boder: 'solid 2px #aaa', width: 400 }}>
                <p style={{ display: 'inline', padding: 8 }}>
                    {students.length} items
                </p>
                <button style={button_1} onClick={this.onAll}>All</button>
                <button style={button_1} onClick={this.onActive}>Active</button>
                <button style={button_1} onClick={this.onComplete}>Complete</button>
                {checkComplete &&
                    <button style={button_1}>
                        ClearComplete
                    </button>
                }
            </div >
        );
    }

    render() {
        const { valueInput, students, valueEdit } = this.state;
        // console.log(">>>>>> ", valueInput, ' + ', valueEdit);
        let checkComplete = false;
        console.log(' nguyen SV', students);
        return (
            <div>
                <center>
                    <h1>So luong SV: {students.length}</h1>
                    {this.renderInput()}
                    <br />
                    {students.map((item, index) => {
                        const { status } = item;
                        const { statusComplete } = this.state;
                        // return this.renderStudent(item, status, index)
                        if (!status) {
                            checkComplete = true;
                        }

                        if (statusComplete === 'all') {

                            return this.renderStudent(item, status, index)
                        }

                        else if (statusComplete === 'complete' && !status) {

                            return this.renderStudent(item, status, index)
                        }

                        else if (statusComplete === 'active' && status) {

                            return this.renderStudent(item, status, index)
                        }
                    })}

                    {this.renderStatusComplete(students, checkComplete)}
                </center>
            </div >
        );
    }
}

export default TodoNguyen;