# React

Studying React

### Learning the basics of Redux.

First I need to install Redux:

### `npm install --save react-redux`

### `npm install --save redux`

Now I need to understand, 4 things:

- STORE: will that blogalized my state.

- ACTION: disbribe what we wanna do. Always will be a function that return a object.

- REDUCER: will discribe how my actions transform state in the next state.

- DISPATCH: this is how I can execute my action.

Here I'll do something super basic, because It's been hard to me,understand react-redux.

This project will be a counter. Every time I click in my button will call a action that will speak with my reducer and then will send to my dispatch and then It will show in my screen.

In my index.js I need to import my store:

### `import { createStore } from 'redux';`

STORE

```javascript
let store = createStore(counter);
```

ACTION

```javascript
const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};
```

REDUCER

```javascript
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};
```

How I can display at console

```javascript
store.subscribe(() => console.log(store.getState()));
```

DISPATCH

```
store.dispatch(increment());
```

With this example every time, that I call my method with '.dispatch' in my console I can see that it's working well.

But if my project is big, I can create multiples directories and I need to create another file, that will be where I'll save all of my reducers import togethers and 1 more thing i need to import combineReducers.

In this example I created 2 directories.

- reducers and actions (self explanatory).

Now I have 3 files in my reducers folder:

- counter.js :

```javascript
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};

export default counterReducer;
```

- isLogged.js

```javascript
const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return !state;
  }
};

export default loggedReducer;
```

- index.js

```javascript
import { combineReducers } from 'redux';
import loggedReducer from './isLogged';
import counterReducer from './counter';
```

Now I create a function like:

```javascript
const allReducers = combineReducers({
  counterReducer: counterReducer,
  loggedReducer: loggedReducer
});

export default allReducers;
```

Now I back to mye index.js in my main root and import this new file and inside of my createStore() put my allReducers, exemple:

`import allReducer from './reducers';`

`const store = createStore(allReducer);`

And now I'll import my Provider from react-redux and wrape my app with the provider, and it will allow me to have access of my store in any part of my App.

`import { Provider } from 'react-redux'`

```javascript
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

To see everything working well, I need to install one dev-tool from [React Redux Dev Tool](https://addons.mozilla.org/pt-BR/firefox/addon/reduxdevtools/), and `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`
now this piece of code i need to put inside my createStore, like this:

```javascript
const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

When I press F12 in Redux, in Tree I can see the actual state of my reducers and check if everything is working well.

Now It's time to display my counter in my screen!!

Open the file App.js

`import { useSelector } from 'react-redux'`

I need to create a variable to save use my counter or my login reducers here:

```javascript
const counterReducer = useSelector(state => state.counterReducer);
const loggedReducer = useSelector(state => state.loggedReducer);
```

Then I can only display the state:

`<h2>Counter: {counterReducer}</h2>`

Or I can do some validations like:

#### Important: (?) is my if and (:) is my else

```javascript
{
  loggedReducer ? (
    <h4>I'm logged / state = true</h4>
  ) : (
    <h4>I'm not logged / state = false</h4>
  );
}
```

Here is my full function:

```javascript
function App() {
  const counterReducer = useSelector(state => state.counterReducer);
  const loggedReducer = useSelector(state => state.loggedReducer);
  return (
    <div className='App'>
      <div>
        <h1>Learning React Redux</h1>
        <h2>Counter: {counterReducer}</h2>
        {loggedReducer ? (
          <h4>I'm logged / state = true</h4>
        ) : (
          <h4>I'm not logged / state = false</h4>
        )}
      </div>
    </div>
  );
}

export default App;
```

Now I wanna to put some buttons to click and change the state of my reducers.

- Create a button on App.js
- In my action folder, create a file index.js

Now I will create some actions, to change the state of my reducers and send a new value to my dispatch and then change the value in my screen. Simple like that:

```javascript
export const incremente = () => {
  return {
    type: 'INCREMENT'
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};
```

Back to App.js and import my actions and useDispatch self explanatory:

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
```

Now create a variable inside mey function App, like:

`const dispatch = useDispatch();`

Then I can use it with a call back onClick:
`<button onClick={() => dispatch(increment())}>+</button>`

But if a wanna increment by 5 in 5 or do some calc, how can i do?

Easy, just back to actions folder and open the file, index.js

```javascript
export const incrementFive = number => {
  return {
    type: 'INCREMENTFIVE',
    payload: number
  };
};
```

Now in my reducer add a new case:

```javascript
case 'INCREMENTFIVE':
      return state + action.payload;
```

Back to my App.js and create a new button and pass 5 in the paramenter:

`<button onClick={() => dispatch(incrementFive(5))}>5+</button>`

If I need to implement something BOOLEAN no needs to create 2 actions like return true and return false, I simply can use return !state, that means the reverse of the original state, example:

My reducer:

```javascript
const loggedReducer = (state = true, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
```

My action:

```javascript
export const login = () => {
  return {
    type: 'SIGN_IN'
  };
};
```
