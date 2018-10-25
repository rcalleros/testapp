import React from 'react';
import {  Image, View, Text, StyleSheet, Animated } from 'react-native';
import PropTypes from  'prop-types';
import Ajax from '../../services/Ajax';





export default class AvatarCircle extends React.Component {

  constructor(props){
    super(props);

  }
    // state = {
    //   merchantData: this.props.navigation.getParam('initialMerchantData'),
    //   scrollY: new Animated.Value(0)
    // }
  
    render(){
      const profilePlacholderImage = require('../../assets/images/profile-pic.png');
      // const img = {
      //   uri: this.state.merchantData.media[0]
      // };

      return(
        <Image style={{width:30,height:30}} source={profilePlacholderImage} />
        );

    }
}

// const styles = StyleSheet.create({
//   container:{
    
//   }
 
// });