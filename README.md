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

Here I'll do something super basic, because It's been hard to me to understand.

Will be a counter. Explain my project

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

With this example every time, that I call my method with .dispatch in my console I can that it is working well.

But if my project is big, I can create multiples directories and I need to create another file, that will be where I'll save all of my reducers import togethers and 1 more thing i need to import combineReducers.

### `import { combineReducers } from 'redux'`

Now I create a function like:

```javascript
const allReducers = combineReducers({
	NameOfMyReducer: NameOfMyReducer,
	LoginReducer: LoginReducer,
	Etc: Etc
})
```

Now I back to mye index.js and import this new file and inside of my createStore() put my allReducers, exemple:

`import allReducer from './reducers';`

`const store = createStore(allReducer);`

And now I'll import my Provider from react-redux and wrape my app with the provider, and it will allow me to have access of my store in any part of my App.

`import { Provider } from 'react-redux'`

```javascript
ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root'));
```

===================================================================================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
