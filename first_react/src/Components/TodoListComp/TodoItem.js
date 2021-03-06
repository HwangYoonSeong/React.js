import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    shouldComponentUpdate (nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    render () {
        const { text, checked, id, onToggle, onRemove, color } = this.props;
        //console.log(color);
        //console.log(id);
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onRemove(id)
                }
                }>&times;</div>
                {/* css를 유동적으로 사용하기 위한 방법 */}
                <div className={`todo-text ${checked && 'checked'}`}
                >
                    <div style={{ color: color }}>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;