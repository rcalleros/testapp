import React from 'react';
import { StatusBar, Platform, ScrollView, TouchableOpacity, Image, View, Text, StyleSheet, Animated } from 'react-native';
import PropTypes from  'prop-types';
import Ajax from '../../services/Ajax';
import AvatarCircle from '../../components/shared/AvatarCircle';



export default class AnimatedHeader extends React.Component {
  static propTypes ={
    headerMaxheight: PropTypes.array.isRequired,
    onMerchantPress: PropTypes.func.isRequired
  }
  constructor(props){
    super(props);

     
  }

    state = {
    }
    render(){
      
      return(
        <Animated.View  
          style={[
            styles.header,
            { transform: [{ height:this.props.headerMaxheight,translateY: this.props.headerTranslate }] },
          ]}>
          {this.props.children}
        </Animated.View>
      );

    }
}

const styles = StyleSheet.create({
  header:{
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
    zIndex:2
  }
});