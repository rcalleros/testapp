import React from 'react';
import {  View, Animated } from 'react-native';
import PropTypes from  'prop-types';





export default class AvatarCircle extends React.Component {
  static propTypes ={
    width: PropTypes.number.isRequired,
    avatarUri: PropTypes.string
  }
  constructor(props){
    super(props);

  }
  // state = {
  //   opacity: new Animated.Value(0)
  // }
  setWidthHeight = ()=>{
    const styles = {
      width:this.props.width,
      height:this.props.width
    };
    console.log(this.props.imageOpacity);
    return styles;
  }
  render(){
    const profilePlacholderImage = require('../../assets/images/profile-pic.png');
    const img = {
      uri: this.props.avatarUri
    };

    return(
      <View style={[
        this.setWidthHeight(),
        {borderRadius:50,overflow:'hidden'},
        
        ]}>
        <Animated.Image style={[
          this.setWidthHeight(),
        {opacity: this.props.imageOpacity}
      ]} 
        source={this.props.avatarUri != '' ? img : profilePlacholderImage } />
      </View>
    );

  }
}

// const styles = StyleSheet.create({
//   container:{
    
//   }
 
// });