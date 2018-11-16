import React from 'react';
import {Image,StyleSheet,View} from 'react-native';

import PropTypes from  'prop-types';

export default class AppIcon extends React.Component {
    static propTypes ={
      isActive: PropTypes.bool.isRequired //is current page active
    }
    render() {
      const image = require('../../assets/images/AppIcon.appiconset/Icon-76.png');

      return (
        <Image style={styles.icon} source={image}/>
      );
    }
}
const styles = StyleSheet.create({
  icon:{
    height: 50,
    width:50,
    zIndex:5
  }
});