import React, { Component } from 'react';
import TodoListTemplate from './Components/TodoListComp/TodoListTemplate';
import Form from './Components/TodoListComp/Form';
import TodoItemList from './Components/TodoListComp/TodoItemList';
import Palette from './Components/TodoListComp/Palette';

class App extends Component {

    id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

    state = {
        input: '',
        todos: [
            { id: 0, text: ' Read Book', checked: false },
            { id: 1, text: ' Go Excercise', checked: true },
            { id: 2, text: ' Learn React', checked: false }
        ],
        color: '',
        selected: [false, false, false, false]

    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value // input 의 다음 바뀔 값
        });

    }

    handleCreate = () => {
        const { input, todos, color } = this.state;
        this.setState({
            input: '', // 인풋 비우고
            // concat 을 사용하여 배열에 추가

            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
                color: color,

            })
        });
    }

    handleKeyPress = (e) => {
        // 눌려진 키가 Enter 면 handleCreate 호출
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    }

    handleToggle = (id) => {
        const { todos } = this.state;

        // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index]; // 선택한 객체

        const nextTodos = [...todos]; // 배열을 복사

        // 기존의 값들을 복사하고, checked 값을 덮어쓰기
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        });
    }

    handleRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    }

    handleColor = (color, id) => {
        var { selected } = this.state;
        selected = new Array(4).fill(false);

        selected[id] = !selected[id] // 배열을 복사


        //console.log(color);
        this.setState({
            //input: e.target.value // input 의 다음 바뀔 값
            color: color,
            selected: selected

        });

    }


    render () {
        const { input, todos, color, selected } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            handleColor
        } = this;
        return (
            <TodoListTemplate form={<Form
                value={input}
                onKeyPress={handleKeyPress}
                onChange={handleChange}
                onCreate={handleCreate}
                color={color} />}

                palette={<Palette
                    color={['#343a40', '#f03e3e', '#12b886', '#228ae6']}
                    selected={selected}
                    onChange={handleColor} />}>

                <TodoItemList todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove} />

            </TodoListTemplate>
        );
    }
}

export default App;

