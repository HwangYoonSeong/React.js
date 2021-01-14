import React, { Component } from 'react';
import TodoListTemplate from './TodoListComp/TodoListTemplate';
import Form from './TodoListComp/Form';
class App extends Component {
    render () {
        return (
            <TodoListTemplate form={<Form />}>
                템플릿 완성
            </TodoListTemplate>
        );
    }
}

export default App;