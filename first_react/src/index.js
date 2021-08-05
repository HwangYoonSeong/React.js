import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App_velopert';
//import Root from './Root';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);


//Redux tutorial
//ReactDOM.render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



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


// Immutable.js의 .get 이나 .getIn 대신 Record 사용

// import { Record } from 'immutable';
// const Person = Record({
//   name: 'YoonCastle',
//   age: 17
// });

// let person = Person();
// console.log(person);
// console.log(person.name, person.age);
// person = person.set('name', 'Chaewon');
// console.log(person.name);
// // 이건 오류 납니다: person.name = '철수';

// // Record 에서 사전 준비해주지 않은 값을 넣어도 오류납니다.
// // person = person.set('job', 5);

// // 값을 따로 지정해줄수도 있습니다.
// person = Person({
//   name: 'Yena',
//   age: 10
// });

// const { name, age } = person; // 비구조화 할당도 문제없죠.
// console.log(name, age); // "영희" 10

// // 재생성 할 일이 없다면 이렇게 해도 됩니다.
// const dog = Record({
//   name: '멍멍이',
//   age: 1
// })()

// console.log(dog.name); // 멍멍이

// // 이런것도 가능하죠.
// const nested = Record({
//   foo: Record({
//     bar: true
//   })()
// })();

// // Map 다루듯이 똑같이 쓰면 됩니다.
// const nextNested = nested.setIn(['foo', 'bar'], false);
// console.log(nextNested);
// console.log(nested.foo.bar); // true

