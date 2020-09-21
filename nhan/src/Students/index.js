import React, { Component } from 'react';

class StudentComponent extends Component {


    render() {
        const { students, hshuhong } = this.props;
        const name = 'Hung trau bo';
        const number = [1, 2, 3];
        const stringText = ['fff', 'ffffff', 'ggggg'];

        const _students = [
            { name: 'a', age: 12 },
            { name: 'b', age: 22 },
            { name: 'c', age: 52 },
            { name: 'd', age: 99 },
        ]

        // const viewStudents = _students.map((item, index) => {
        //     return (
        //         <div>
        //             <p>Ten SV: {item.name}, Tuoi: {item.age} </p>
        //         </div>
        //     );
        // })

        return (
            <div>
                <h1>Danh sach sinh vien</h1>
                <p>{name}</p>
                {/* <p>{viewStudents}</p> */}
                <p>{hshuhong}</p>
                {
                    students.map((item, index) => {
                        return (
                            <div key={index} >
                                <p>Ten SV: {item.name}</p>
                            </div>
                        );
                    })


                }

            </div>
        );
    }
}

export default StudentComponent;