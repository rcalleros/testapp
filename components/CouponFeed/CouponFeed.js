import React from 'react';
import {  FlatList, StyleSheet } from 'react-native';
import CouponItem from './CouponItem';
import PropTypes from  'prop-types';

export default class CouponFeed extends React.Component {
    static propTypes ={
      coupons: PropTypes.array.isRequired,
      onMerchantPress: PropTypes.func.isRequired
    }
    constructor(props){
      super(props);
    }
    render(){
      return(
        <FlatList 
          style={styles.container}
          data={this.props.coupons}
          renderItem={({item}) => <CouponItem onMerchantPress={this.props.onMerchantPress} deal={item} />}
        />
      );

    }
}
const styles = StyleSheet.create({
  container: {
    paddingTop:0,
    paddingLeft:5,
    paddingRight:5
  }});