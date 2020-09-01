import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers'
import reduxThunk from 'redux-thunk';

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(reduxThunk),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
)

export default store;