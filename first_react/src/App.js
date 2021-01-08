//import logo from './logo.svg';
import './App.css';
import MyName from './components/MyName';
import Counter from './components/Counter';
import Problematic from './components/Problematic';
function App () {

  return (
    <div>
      <MyName name="React" />
      <Counter />
      <Problematic />

    </div>

  );
}

export default App;
