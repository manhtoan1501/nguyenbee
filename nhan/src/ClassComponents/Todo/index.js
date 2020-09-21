import React from 'react';


class ClassName extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        const indexTest = null;
        this.state = {
            students: [
                { name: 'Nguyen van teo 0' },
                { name: 'Nguyen van teo 1' },
                { name: 'Nguyen van teo 2' },
                { name: 'Nguyen van teo 3' },
                { name: 'Nguyen van teo 4' },
                { name: 'Nguyen van teo 5' },
            ],
            studentDel: [],
            valueInput: '',
            valueEdit: '',
            indexEdit: null,
            checkInput: false,
            changeStudent: false,
            changeDel: false,

        }
    }

    addStudent = () => {
        const themSV = this.state.students;
        const { valueInput, students, array, valueEdit, indexEdit } = this.state;
        if (valueInput !== '' && !valueEdit) {
            themSV.push({ name: valueInput });
            this.setState({ students: themSV, valueInput: '', valueEdit: '' });
        } else if (valueEdit) {
            themSV.splice(indexEdit, 1, { name: valueInput });
            this.setState({ students: students, valueEdit: '', valueInput: '' });
        }
    }

    onChange = (element) => {
        const value = element.target.value;
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
        this.setState({ students: students });
    }

    editStudent(index) {
        let { valueEdit, students } = this.state;
        valueEdit = students[index].name;
        this.setState({ valueEdit: valueEdit, valueInput: valueEdit, indexEdit: index, checkInput: false });
    }

    onClickDel(index) {
        console.log('hhhhhhhhhhh');
    }

    onChangeStudent(status) {
        this.setState({ changeStudent: status });
    }

    onDelAll(status) {
        console.log('kkkkkkkkkk ', status);
        this.setState({ changeDel: status });
    }

    render() {
        const { students, valueInput, changeStudent, changeDel } = this.state;
        // console.log('checkInput', checkInput, ' valueInput: ', valueInput, '  valueEdit: ', valueEdit);
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
            alignItems: 'center',
            textAlign: 'center'
        }
        return (
            <div style={{ textAlign: 'center', margin: '0 auto' }}>
                <center>
                    <h1>So luong SV: {students.length}</h1>
                    {
                        changeStudent ?
                            <button onClick={() => this.onChangeStudent(false)} style={styleButton}>
                                Huy chon SV
                            </button> :
                            <button onClick={() => this.onChangeStudent(true)} style={styleButton}>
                                Chon SV
                            </button>
                    }
                    {
                        changeDel ?
                            <button onClick={() => this.onDelAll(false)} style={styleButton}>
                                Huy SV
                            </button> :
                            <button onClick={() => this.onDelAll(true)} style={styleButton}>
                                Xoa SV
                            </button>
                    }

                    {students.map((item, index) => {
                        console.log('item', item);
                        return (
                            <div
                                key={index}
                                style={{
                                    color: 'white',
                                    fontSize: 16,
                                    backgroundColor: '#43a047',
                                    maxWidth: 300,
                                    height: 25,
                                    padding: 4,
                                    margin: 10,
                                    textAlign: 'left',
                                    alignItems: 'left',
                                }}
                            >
                                <div>
                                    {index + 1}, Ten: {item.name} <br />
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
                                {
                                    changeDel ?
                                        <div style={{ marginTop: -22, marginLeft: -30 }}>
                                            <input type="checkbox" onClick={() => this.onClickDel(index)} />
                                        </div> : null
                                }

                            </div>
                        );
                    })}
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
                            width: 200,
                            height: 30,
                        }}
                    />

                    <br />
                    <button onClick={this.addStudent} style={styleButton}>
                        Them Sinh Vien
                    </button>
                </center >
            </div >
        );
    }
};



export default ClassName;