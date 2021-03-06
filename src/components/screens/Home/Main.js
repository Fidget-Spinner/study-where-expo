import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
//  Button,
} from 'react-native';
//import firebase from 'firebase';
import { Card } from '../../common/Card';
//Main Page Component

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { testValue: 0 };
    
    // this.readTestData = this.readTestData.bind(this);
  }

    // test method for reading data from firebase DB
    // readTestData() {
    //   firebase.database().ref('/locations/').once('value')
    //   .then(snapshot => {
    //       const testValue = snapshot.val() || 'no value present';
    //       console.log('FIREBASEDEBUG1');
    //       console.log(snapshot.val().toString, snapshot.val().test.lat);
    //       console.log(testValue.key, testValue.value);
    //       this.setState({ testValue: snapshot.val().test.lat });
    //     })
    //   .catch(error => console.log('FIREBASEDEBUGERROR', error.toSTring));
    // }

  render() {
    return (
      <View style={styles.container}>
        <Card>  
          <Text style={styles.welcome}>
            Hi this is me
          </Text>
        </Card>
        {/* <Button
          onPress={this.readTestData}
          title='Press this to test for read from firebase db' 
        />
        <Text style={styles.instructions} >
          Firebase Debug: {this.state.testValue}
        </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
  },
});

export default Main;

