import React from 'react';
import { Animated } from 'react-native';
import PropTypes from  'prop-types';





export default class AnimateWithProps extends React.Component {
  static propTypes ={
    children: PropTypes.object.isRequired,
  }
  constructor(props){
    super(props);

  }
  render(){
    return(
      <Animated.View style={this.props.style} >
        {this.props.children}
      </Animated.View>
    );

  }
}
