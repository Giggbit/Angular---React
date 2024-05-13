import { useDispatch, useSelector } from 'react-redux'
import { ICounter } from './redux/reducers/IState'
import './App.css'

function App() {
  const counter = useSelector(
    (state: ICounter) => state.counterReducer.counter
  );

  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <p>Counter: {counter}</p>
        <button onClick={() => {dispatch({type: "DOWN"})}}>-</button>
        <button onClick={() => {dispatch({type: "UP"})}}>+</button>
      </div>
    </>
  )
}

export default App
