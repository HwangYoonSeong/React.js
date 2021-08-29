import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './Components/vlptcontextAPItodoComp/TodoTemplate';
import TodoHead from './Components/vlptcontextAPItodoComp/TodoHead';
import TodoList from './Components/vlptcontextAPItodoComp/TodoList';
import TodoCreate from './Components/vlptcontextAPItodoComp/TodoCreate';
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App () {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;