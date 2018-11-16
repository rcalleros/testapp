import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import PropTypes from  'prop-types';
//CUSTOM TAB BAR FOR UNIQUE DESIGN

export default class CustomTabButton extends React.Component {
  constructor(props){
    super(props);
  }
  onPress = () =>{
  }
  render() {
    return (
      <View>
          <Text style={styles.text}>Button 3</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text:{
    backgroundColor:'blue',
  },
  customButton:{
    width:100,
    height:100,
    backgroundColor:'red',
  }
});