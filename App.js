import React from 'react';
import AppNavigator from './screens/AppNavigator'
import {Provider} from 'react-redux'
import getStore from './redux/store'

const store = getStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}