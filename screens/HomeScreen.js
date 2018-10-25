import React from 'react';
import {Text} from 'react-native';

import CouponFeed from '../components/CouponFeed/CouponFeed';
import MerchantProfile from '../components/MerchantProfile/MerchantProfile';
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
    // if(this.state.currentMerchantId){
    //   return (
    //     <MerchantProfile onBack={this.unsetCurrentMerchant} initialMerchantData={this.getCurrentDeal()}/>
    //   );
    // }
    if(this.state.deals.length > 0){
      return (
        <CouponFeed coupons={this.state.deals} onMerchantPress={this.setCurrentMerchant} />
      );
    }
    return <Text>You have nothing to show</Text>;
    
  }

 

}

