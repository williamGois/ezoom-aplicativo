import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './src/screens/Reducers';
import Cursos from './src/screens/Cursos';
import CursoInternal from './src/screens/CursoInternal';


let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const AppNavigator = createAppContainer(

  createStackNavigator({
    Cursos: {
      screen: Cursos,
      navigationOptions: {
        headerShown: false
      }
    },
    CursoInternal: {
      screen: CursoInternal,
      navigationOptions: {
        headerShown: false
      }
    },

  })
);

export default class App extends Component {

  async componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}