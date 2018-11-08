import React from 'react';
import { View,Text } from 'react-native';
import PropTypes from  'prop-types';





export default class FollowersList extends React.Component {
  // static propTypes ={
  //   width: PropTypes.number.isRequired
  // }
  constructor(props){
    super(props);

  }
  // state = {
  //   merchantData: this.props.navigation.getParam('initialMerchantData'),
  //   scrollY: new Animated.Value(0)
  // }

  render(){
  
    return(
      <View >
        <Text>Followers List</Text>
      </View>
    );

  }
}

// const styles = StyleSheet.create({
//   container:{
    
//   }
 
// });