import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter); // its just select the state from reducer
  const isLogged = useSelector(state => state.isLogged); // its just select the state from reducer
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello this is me, and started redux for you</h1>
      <h2>Counter value : {counter}</h2>
      {isLogged ? <h3>user is logged in the sytem</h3> : ''}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
