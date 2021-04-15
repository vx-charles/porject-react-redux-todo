import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/reducers/reducers'
import multi from 'redux-multi' // serve para q dentro de uma action creator retornar um array de várias actions na mesma function.
import thunk from 'redux-thunk'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // devtools redux para o plugin google chrome

const store = applyMiddleware(thunk, multi)(createStore)(reducers, devTools) // cria os estados que vai ser controlado pelo reducer

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);