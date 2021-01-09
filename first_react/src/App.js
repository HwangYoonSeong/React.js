//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MyName from './components/MyName';
//import Counter from './components/Counter';
//import Problematic from './components/Problematic';
import PhoneForm from './components/PhoneFrom';


class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: '황윤성',
        phone: '010-1111-1111'
      }

    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  render () {
    const { information } = this.state;
    return (
      <div>
        <MyName name="React" />
        {/* <Counter />
      <Problematic /> */}
        <PhoneForm
          onCreate={this.handleCreate}
        />
        {JSON.stringify(information)}
      </div>
    );
  }
}

export default App;
