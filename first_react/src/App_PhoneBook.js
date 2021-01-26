//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MyName from './PhoneBookComp/MyName';
//import Counter from './components/Counter';
//import Problematic from './components/Problematic';
import PhoneForm from './PhoneBookComp/PhoneFrom';
import PhoneInfoList from './PhoneBookComp/PhoneInfoList';
class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: '황윤성',
        phone: '010-1111-1111'
      }

    ],
    keyword: ''
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 유지(해당 id가 아닌 경우)
      )
    })
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }
  render () {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <MyName name="React" />
        {/* <Counter />
      <Problematic /> */}
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <p>
          <input className="default"
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr />
        <PhoneInfoList data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate} />
      </div>
    );
  }
}

export default App;