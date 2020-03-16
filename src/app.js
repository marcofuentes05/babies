import React from 'react';
import { Provider } from 'react-redux';
import {configureState} from './store.js'
// import * as actions from './actions/index.js'
import Babies from './components/babyForm'
const store = configureState();

store.subscribe(() => console.log(store.getState()))

const date = new Date()


const App = () => (
    <Provider store = {store}>
    <Babies/>
    </Provider>
)

export default App