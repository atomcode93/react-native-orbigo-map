import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistCombineReducers } from 'redux-persist'
import reducers from './reducers'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import storage from 'redux-persist/lib/storage'

const middlewareNav = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
  blackList: ['nav', 'search']
}

const combinedReducer = persistCombineReducers(persistConfig, reducers)

const middleware = [thunk, middlewareNav]

const store = createStore(
  combinedReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
)

const persistor = persistStore(store, () => store.getState())

export default {store, persistor}
