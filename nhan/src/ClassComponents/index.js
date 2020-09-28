import React from 'react';
import Todo from './Todo';
import TodoNguyen from './TodoNguyen';

class Index extends React.Component {
    render() {
        return (
            <div style={{ maxWidth: 1900, maxHeight: 1600 }}>
                <div style={{ width: 700, height: 500, margin: 10 }}>
                    <Todo />
                </div>
                <div style={{ width: 'calc(100% - 700px)', height: 500, float: 'right', margin: '-514px 0 0 0' }}>
                    <TodoNguyen />
                </div>
            </div>
        );
    }
}

export default Index;