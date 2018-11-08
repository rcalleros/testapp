import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from  'prop-types';
import GiftCardList from './GiftCardList';
import PromoList from './PromoList';
import PunchCardList from './PunchCardList';

export default class TabsContainer extends React.Component {
  static propTypes ={
    activeContent: PropTypes.string.isRequired,
  }
  constructor(props){
    super(props);
  }
  
  //RENDERS TAB CONTENT FROM PROPS STRING
  _renderTabContent = () => {
    switch(this.props.activeContent){
      case 'Gift Cards' :
        return <GiftCardList/>;
      case 'Promos' :
        return <PromoList/>;
      case 'Punch Cards' :
        return <PunchCardList/>;
    }
  }
  render(){
  
    return(
      <View>
        {this._renderTabContent()}
      </View>
    );
  }
}

