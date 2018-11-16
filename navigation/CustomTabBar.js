import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';


//CUSTOM TAB BAR FOR UNIQUE DESIGN
const routeConfig =[
  {
    route:'Home',
    label:'Home'
  },
  {
    route:'NewTrade',
    label:'New Trade'
  },
  {
    route: 'SyncMerchants',
    label:'Find Mercs'
  }
];

export default class CustomTabBar extends React.Component {
  constructor(props){
    super(props);
  }
  onPress = (route) =>{
    this.props.navigation.navigate(route);
  }
  _renderTouchables = () =>{
    const Touchables = routeConfig.map((item,i)=>{
      return <TouchableOpacity onPress={()=>{this.onPress(item.route);}} key={i}><Text style={styles.label}>{item.label}</Text></TouchableOpacity>;
    });
    return Touchables;    
  }
  render() {
    return (
      <View style={styles.bar}>
        {this._renderTouchables()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bar:{
    height: 50,
    padding:0,
    flexDirection:'row',
    backgroundColor:'blue',
    justifyContent:'space-between'
  },
  label:{
    color:'red'
  }
});