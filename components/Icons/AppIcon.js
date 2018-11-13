import React from 'react';
import {Image,StyleSheet} from 'react-native';

import PropTypes from  'prop-types';

export default class AppIcon extends React.Component {
    static propTypes ={
      isActive: PropTypes.bool.isRequired //is current page active
    }
    render() {
      const image = require('../../assets/images/AppIcon.appiconset/Icon-76.png');

      return (
        <Image style={[styles.icon]} source={image}/>
      );
    }
}
const styles = StyleSheet.create({
  height: 20,
  width:20,
});