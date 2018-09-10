import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation';

// import the different screens
import Loading from './src/components/Loading.js'
import SignUp from './src/components/SignUp.js'
import Login from './src/components/Login.js'
import Main from './src/components/Main.js'

// create our app's navigation stack
const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)
export default App