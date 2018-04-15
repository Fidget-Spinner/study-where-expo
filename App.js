import React, { Component } from 'react';
import firebase from 'firebase';
import Entry from './src/Entry';

import config from './src/firebaseConfig';

//DO NOT REMOVE OR RENAME THIS COMPONENT, ACTS AS ENTRY POINT FOR EXPO
export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }
  render() {
    return <Entry />;
  }
}
