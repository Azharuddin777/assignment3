import React from 'react';
import {StyleSheet, Text, View, Button,Image} from 'react-native';

export default class App extends React.Component {
  state = {
    count: 0
  }
  incrementValue = () => {
    this.setState({count: this.state.count + 1})
  }
  decrementValue = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
    return (
     
      <View style={styles.container}>
       <Image style={styles.lion} source={require('./images/ima.png')} />
        <Text style={styles.welcome}>Azhar's counter app</Text>
        <Text style={styles.count}>{this.state.count}</Text>
        <Button 
        style={styles.increasebutton}
        title="+"
        onPress={this.incrementValue}
        />
        <View style={{padding: 30}} />
        <Button 
        style={styles.decreasebutton}
        title="-"
        onPress={this.decrementValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
  },
  welcome:{
    fontSize:40,
    padding:30,
    fontWeight: 'bold',
  },

  count : {
    fontSize: 40,
    marginBottom:30
  },

  lion:{
    height:200,
    width:150
  }
});