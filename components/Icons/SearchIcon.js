import React from 'react';
import {Image,StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

import PropTypes from  'prop-types';

export default class SearchIcon extends React.Component {
    static propTypes ={
      isActive: PropTypes.bool.isRequired //is current page active
    }
    render() {
      const image = require('../../assets/images/Tabs/tab_search.imageset/tab_search.png');

      return (
        <Image style={[styles.icon,{tintColor:this.props.isActive ? Colors.tabIconSelected : Colors.tabIconDefault}]} source={image}/>
      );
    }
}
const styles = StyleSheet.create({
  height: 20,
  width:20,
});