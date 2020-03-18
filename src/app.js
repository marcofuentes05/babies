import React from 'react';
import { Provider } from 'react-redux';
import {configureState} from './store.js';
// import Babies from './components/babyForm';
import EventsPage  from './components/EventsPage';
import * as actions from './actions/index.js'

const store = configureState();

store.subscribe(() => console.log(store.getState()))

store.dispatch(actions.addBaby('Marre', 'Rendon'))
store.dispatch(actions.addEvent(0, 'pecho','nada mal', new Date() ))
store.dispatch(actions.addEvent(0, 'pecho', 'nada mal', new Date()))

store.dispatch(actions.addEvent(0, 'siesta', 'nada mal', new Date()))
store.dispatch(actions.addEvent(0, 'popo', 'nada mal', new Date()))

store.dispatch(actions.selectBaby(0))

const App = () => (
    <Provider store = {store}>
        <EventsPage />
    </Provider>
)

export default App