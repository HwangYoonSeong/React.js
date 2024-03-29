import React, { Component } from 'react';
import Problematic from './Problematic';
import '../App.css'
class Counter extends Component {
    state = {
        number: 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount () {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount () {
        console.log('componentDidMount');
    }

    shouldComponentUpdate (nextProps, nextState) { 
        // 5 의 배수라면 리렌더링 하지 않음
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate (nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate (prevProps, prevState) {
        console.log('componentDidUpdate');
    }


    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );
    }

    render () {
        console.log('render');
        return (
            <div className="default">
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                { this.state.number === 4 && <Problematic />}
                {/* import React, { Component} from 'react';
                    import '../App.css'
                    const Problematic = () => {
                        throw (new Error('There is Bug!'));
                        return (<div></div>); //Unreachable Code
                    };

                    export default Counter; */}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;