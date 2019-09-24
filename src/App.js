import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementFive, login } from './actions';

function App() {
  const counterReducer = useSelector(state => state.counterReducer);
  const loggedReducer = useSelector(state => state.loggedReducer);

  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div>
        <h1>Learning React Redux</h1>
        <h2>Counter: {counterReducer}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementFive(5))}>5+</button>
        <hr></hr>
        {loggedReducer ? (
          <button onClick={() => dispatch(login())}>Login</button>
        ) : (
          <button onClick={() => dispatch(login())}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default App;
