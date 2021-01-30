import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App_immutable';
import reportWebVitals from './reportWebVitals';
//import { Map, List } from 'immutable';
//import './styles/base.scss';

// immutable.js 기본 사용법
// // 1. 객체는 Map
// const obj = Map({
//   foo: 1,
//   inner: Map({
//     bar: 10
//   })
// });

// console.log(obj.toJS());

// // 2. 배열은 List
// const arr = List([
//   Map({ foo: 1 }),
//   Map({ bar: 2 }),
// ]);

// console.log(arr.toJS());

// // 3. 설정할땐 set
// let nextObj = obj.set('foo', 5);
// console.log(nextObj.toJS());
// console.log(nextObj !== obj); // true

// // 4. 값을 읽을땐 get
// console.log(nextObj.get('foo'));
// console.log(arr.get(0)); // List 에는 index 를 설정하여 읽음

// // 5. 읽은다음에 설정 할 때는 update
// // 두번째 파라미터로는 updater 함수가 들어감 
// nextObj = nextObj.update('foo', value => value + 1);
// console.log(nextObj.toJS());

// // 6. 내부에 있는걸 ~ 할땐 In 을 붙인다
// nextObj = obj.setIn(['inner', 'bar'], 20);
// console.log(nextObj.getIn(['inner', 'bar']));

// let nextArr = arr.setIn([0, 'foo'], 10);
// console.log(nextArr.getIn([0, 'foo']));

// // 8. List 내장함수는 배열이랑 비슷하다
// nextArr = arr.push(Map({ qaz: 3 }));
// console.log(nextArr.toJS());
// nextArr = arr.filter(item => item.get('foo') === 1);
// console.log(nextArr.toJS());

// // 9. delete 로 key 를 지울 수 있음
// nextObj = nextObj.delete('foo');
// console.log(nextObj.toJS());

// nextArr = nextArr.delete(0);
// console.log(nextArr.toJS());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
