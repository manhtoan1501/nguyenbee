import React from 'react';
import Header from './TodoNguyen/Header';
import Input from './TodoNguyen/Input';
import ListStudents from './TodoNguyen/ListStudents';
import Footer from './TodoNguyen/Footer';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                { name: 'Nguyen van teo 1', status: true },
                { name: 'Nguyen van teo 2', status: true }
            ],
            indexEdit: null,
            statusView: 'all',
        }
    }

    callBackdeleteStudent = (index) => {
        const { students } = this.state;
        students.splice(index, 1);
        this.setState({ students });
    }

    getStudent = (dataStudent) => {
        this.addStudent(dataStudent);
    }

    addStudent = (dataStudent) => {
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

    getStatusComplete = (statusComplete) => {
        this.setState({ statusComplete });
    }

    getIndexComplete = (statusComplete, indexComplete) => {
        const { students } = this.state;
        students[indexComplete].status = !statusComplete;
        this.setState({ students: students });
    }

    getStatusView = (status) => {
        this.setState({ statusView: status });
    }

    onClearStudentsComplete = () => {
        const { students } = this.state;
        const keepStudents = [];
        students.map(item => {
            const { status } = item;
            if (status) {
                keepStudents.push(item);
            }
            this.setState({ students: keepStudents });
        })
    }

    render() {
        const { students, indexEdit, statusView } = this.state;
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
                    statusView={statusView}
                    getIndexComplete={this.getIndexComplete}
                    callBackdeleteStudent={this.callBackdeleteStudent}
                    getIndexEdit={this.getIndexEdit}
                />
                <Footer
                    numberStudent={students.length}
                    getStatusComplete={this.getStatusComplete}
                    getStatusView={this.getStatusView}
                    statusView={statusView}
                    onClearStudentsComplete={this.onClearStudentsComplete}
                />

            </div>
        );
    }
}

export default Index;