import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

import CouponFeed from '../components/CouponFeed/CouponFeed';
import Ajax from '../services/Ajax';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    deals:[],
    currentMerchantId: null,
    
  }
  async componentDidMount(){
    const deals = await Ajax.fetchInitialDeals();
    this.setState({deals});
  }
  setCurrentMerchant = (merchantId) =>{
    this.setState({
      currentMerchantId: merchantId
    },()=>{
      const { navigate } = this.props.navigation;
      navigate('MerchantProfile',{initialMerchantData:this.getCurrentDeal()});
    });
   
  }
  unsetCurrentMerchant = () =>{
    this.setState({
      currentMerchantId: null
    });
  }
  getCurrentDeal = () =>{
    return this.state.deals.find((deal)=> deal.key == this.state.currentMerchantId);
  }
  render() {
    if(this.state.deals.length > 0){
      return (
        <View style={styles.container}>
          <CouponFeed coupons={this.state.deals} onMerchantPress={this.setCurrentMerchant} />
        </View>
      );
    }
    return <Text>You have nothing to show</Text>;
    
  }

 

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2f1b3e',
    paddingTop:0,
    paddingLeft:5,
    paddingRight:5
  }});