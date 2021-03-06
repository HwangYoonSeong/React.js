import { setIn } from 'immutable';
import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';


function App () {

    //state는 변경되면 HTML이 자동 재렌더링 
    //변수의 경우 새로고침을 해야 HTML에 렌더링됨
    let [title, setTitle] = useState(['바꿀 수 있는 것을 바꾸는 용기', '바꿀 수 없는 걸 받아들일 수 있는 평온', '이 둘을 분별하는 지혜']);
    let [count, setCount] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [clickedIdx, setClickedIdx] = useState(0);
    let [input, setInput] = useState('');

    let posts = 'Hello World'


    function upCount (idx) {
        var newArray = [...count];
        newArray[idx]++;
        setCount(newArray);
    }


    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 Blog</div>
            </div>


            {
                title.map(function (el, idx) {
                    return (
                        <div className="list" key={idx}>
                            <h3 onClick={() => {
                                setClickedIdx(idx);

                            }} >{el} <button onClick={() => { upCount(idx) }} style={{ cursor: 'pointer' }}>👍</button>{count[idx]}</h3>
                            <p>3월 6일 발행</p>
                            <hr />
                        </div>)
                })
            }

            <div className="publish">
                <input onChange={(e) => { setInput(e.target.value) }} />
                <button onClick={() => {
                    let newArray = [...title];
                    newArray.unshift(input);
                    setTitle(newArray);
                    setInput('');
                }}>Upload</button>
            </div>


            <Modal title={title} idx={clickedIdx}></Modal>
            {/* {
                modal === true
                    ? <Modal title={title} idx={clickedIdx}></Modal>
                    : null
            } */}


        </div >

    );
}

function Modal (props) {
    return (
        <div className="modal">
            <h2>{props.title[props.idx]}</h2>
            <p>Date</p>
            <p>Content</p>
        </div>)
}

export default App;