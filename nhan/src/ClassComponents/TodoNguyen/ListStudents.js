import React from 'react';

class ListStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: '',
            valueEdit: '',
            indexEdit: null,
            statusComplete: 'all'
        };
    }

    deleteStudent(index) {
        const { callBackdeleteStudent } = this.props;
        callBackdeleteStudent(index);
    }

    editStudent(index) {
        const { getIndexEdit } = this.props;
        console.log('fdfdfdgggg');
        getIndexEdit(index);

    }

    onClickDel(status, index) {
        // const { students } = this.state;
        // students[index].status = !status;
        // this.setState({ students });
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

    onClearComplete = () => {
        // const { students } = this.state;
        // const keepStudents = [];
        // students.map((item, index) => {
        //     const { status } = item;
        //     if (status) {
        //         keepStudents.push(item);
        //     }
        //     this.setState({ students: keepStudents });
        // })
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

    render() {
        const { valueInput, valueEdit } = this.state;
        const { students } = this.props;
        let checkComplete = false;
        if (!students.length) {
            return null;
        }

        return (
            <center>
                {students.map((item, index) => {
                    const { status } = item;
                    const { statusComplete } = this.state;
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
            </center>
        );
    }
}

export default ListStudents;