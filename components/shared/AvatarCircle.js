import React from 'react';
import {  Image, View } from 'react-native';
import PropTypes from  'prop-types';





export default class AvatarCircle extends React.Component {
  static propTypes ={
    width: PropTypes.number.isRequired
  }
  constructor(props){
    super(props);

  }
  // state = {
  //   merchantData: this.props.navigation.getParam('initialMerchantData'),
  //   scrollY: new Animated.Value(0)
  // }
  setWidthHeight = ()=>{
    const styles = {
      width:this.props.width,
      height:this.props.width
    };

    //     const styles = {
    //   width:60,
    //   height:60
    // }
    return styles;
  }
  render(){
    const profilePlacholderImage = require('../../assets/images/profile-pic.png');
    // const img = {
    //   uri: this.state.merchantData.media[0]
    // };

    return(
      <View style={[this.setWidthHeight(),{borderRadius:50,backgroundColor:'blue',overflow:'hidden'}]}>
        <Image style={this.setWidthHeight()} source={profilePlacholderImage} />
      </View>
    );

  }
}

// const styles = StyleSheet.create({
//   container:{
    
//   }
 
// });