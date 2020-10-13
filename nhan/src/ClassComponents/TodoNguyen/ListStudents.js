import React from 'react';

class ListStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: '',
            valueEdit: '',
            indexEdit: null,
        };
    }

    deleteStudent(index) {
        const { callBackdeleteStudent } = this.props;
        callBackdeleteStudent(index);
    }

    editStudent(index) {
        const { getIndexEdit } = this.props;
        getIndexEdit(index);
    }

    onClick(status, index) {
        const { getIndexComplete } = this.props;
        getIndexComplete(status, index);
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
                        onClick={() => this.onClick(status, index)}
                    />
                </div>
            </div>
        );

    }

    render() {
        const { students, statusView } = this.props;
        let checkComplete = false;
        if (!students.length) {
            return null;
        }

        return (
            <center>
                {students.map((item, index) => {
                    const { status } = item;
                    if (!status) {
                        checkComplete = true;
                    }

                    if (statusView === 'all') {
                        return this.renderStudent(item, status, index)
                    }

                    else if (statusView === 'complete' && !status) {
                        return this.renderStudent(item, status, index)
                    }

                    else if (statusView === 'active' && status) {
                        return this.renderStudent(item, status, index)
                    }
                })}
            </center>
        );
    }
}

export default ListStudents;