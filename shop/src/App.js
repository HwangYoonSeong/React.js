import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom';

// const SubTitle = styled.h3`
//     font-size: 3rem;
//     font-weight:600;
//     position:relative;
//     display: inline-block;
//     height: 80px;
//     width:850px; 
//     overflow: hidden;
//     animation: ${typingAni} 4s steps(30, end) 1;

//     &:after{
//         position:absolute; 
//         display:block;
//         content:""; 
//         width: 30px; 
//         height: 50px;
//         top : 15px;
//         right:0; 
//         border-right: 5px solid #fff;
//         animation: ${cursor} 0.5s infinite;
//     }

//     @media(min-width:540px) and (max-width: 994px){
//         font-size: 2rem;   
//     }
//     @media(max-width:540px){
//         font-size: 1.3rem;
//     }

// `;
const Card = (props) => {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.idx + 1) + ".jpg"} width='100%' />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}&{props.shoes.price}</p>
    </div>
  )
}


function App () {

  let [shoes, setShoes] = useState(Data);
  let [stock, setStock] = useState([10, 11, 12]);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">ShoesShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home </Nav.Link>
            <Nav.Link as={Link} to="/detail/0">Detail </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Navbar>


      <Switch>

        <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% Season OFF</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
  </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>

          <div className="container">
            <div className="row">
              {
                shoes.map((el, idx) => {
                  return (
                    <Card shoes={el} idx={idx}></Card>
                  )

                })
              }

            </div>
            <button className="btn btn-primary" onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  // console.log(result.data)
                  // let newArray = [...shoes];
                  // result.data.forEach(el => {
                  //   newArray.push(el);
                  // })

                  // setShoes(newArray);
                  setShoes([...shoes, ...result.data])
                }).catch(() => {
                  console.log('fail')
                })
            }}>More</button>
          </div>
        </Route>


        <Route path="/detail/:id">
          <Detail shoes={shoes} stock={stock} setStock={setStock} />
        </Route>




      </Switch>



    </div >


  );
}

export default App;
