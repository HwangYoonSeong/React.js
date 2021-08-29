import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './Components/vlptcontextAPItodoComp/TodoTemplate';
import TodoHead from './Components/vlptcontextAPItodoComp/TodoHead';
import TodoList from './Components/vlptcontextAPItodoComp/TodoList';
import TodoCreate from './Components/vlptcontextAPItodoComp/TodoCreate';
import { TodoProvider } from './Components/vlptcontextAPItodoComp/TodoContext';
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App () {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;