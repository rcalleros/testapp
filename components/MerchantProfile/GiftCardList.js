import React from 'react';
import {  FlatList, StyleSheet, Text } from 'react-native';
import PropTypes from  'prop-types';

export default class GiftCardList extends React.Component {
  
    constructor(props){
      super(props);
    }
    render(){
      // return(
      //   <FlatList 
      //     style={styles.container}
      //     data={this.props.coupons}
      //     renderItem={({item}) => <CouponItem onMerchantPress={this.props.onMerchantPress} deal={item} />}
      //   />
      // );
      return(<Text>Gift Card List</Text>);
    }
}
const styles = StyleSheet.create({
  container: {
    paddingTop:0,
    paddingLeft:5,
    paddingRight:5
  }});