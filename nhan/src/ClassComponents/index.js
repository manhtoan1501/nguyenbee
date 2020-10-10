import React from 'react';
import Header from './TodoNguyen/Header';
import Input from './TodoNguyen/Input';
import ListStudents from './TodoNguyen/ListStudents';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                { name: 'Nguyen van teo 1', status: true },
                { name: 'Nguyen van teo 2', status: true }
            ],
            indexEdit: null,
        }
    }

    callBackdeleteStudent = (index) => {
        const { students } = this.state;
        students.splice(index, 1);
        this.setState({ students });
    }

    getStudent = (dataStudent) => {
        const { students } = this.state;
        students.push(dataStudent);
        this.setState({ students });
    }

    getIndexEdit = (index) => {
        this.setState({ indexEdit: index });
    }

    onEditStudent = (dataEdit) => {
        const { students, indexEdit } = this.state;
        students[indexEdit] = dataEdit;
        this.setState({ students: students });
        this.setState({ indexEdit: null });
    }

    render() {
        const { students, indexEdit } = this.state;
        const student = students[indexEdit];
        return (
            <div>
                <Header students={students} />
                <Input
                    getStudent={this.getStudent}
                    student={student}
                    onEditStudent={this.onEditStudent}
                />
                <ListStudents
                    students={students}
                    callBackdeleteStudent={this.callBackdeleteStudent}
                    getIndexEdit={this.getIndexEdit}
                />
            </div>
        );
    }
}

export default Index;