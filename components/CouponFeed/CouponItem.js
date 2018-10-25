import React from 'react';
import {TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import PropTypes from  'prop-types';

export default class CouponItem extends React.Component {
    static propTypes ={
      deal: PropTypes.object.isRequired,
      onMerchantPress: PropTypes.func.isRequired
    }
    constructor(props){
      super(props);
    }
    showMerchantProfile = () =>{
      this.props.onMerchantPress(this.props.deal.key);
    }
    render(){
      const {deal} = this.props;
      const img = {
        uri: deal.media[0]
      };
      const profileImage = require('../../assets/images/profile-pic.png');
      const followUserImg = require('../../assets/images/user_follow_add.imageset/follow_add.png');
      const merchantIcon = require('../../assets/images/feed_merchant.imageset/feed_merchant.png');
      const addIcon = require('../../assets/images/feed_add_promo.imageset/feed_add_promo.png');
      const shareIcon = require('../../assets/images/feed_share.imageset/feed_share.png');
      const likeIcon = require('../../assets/images/feed_like.imageset/feed_like.png');
      const date = 'October 18, 2018';
      
      return(
        <View style={styles.container}>
          <View style={styles.itemTitleBar}>
            <TouchableOpacity onPress={this.showMerchantProfile} style={styles.profileImgTitle}>
              <Image style={styles.profileImg} source={profileImage} />
              <View>
                <Text style={styles.text}>{deal.title}</Text>
                <Text style={styles.textDate}>{date}</Text>
              </View>
            </TouchableOpacity>
            <Image style={styles.followUserImg} source={followUserImg} />
                    
          </View>
          <Image style={styles.itemImage} source={img} />
          <View style={styles.descIconBar}>
            <View style={styles.desc}>
              <Text>{deal.title}</Text>
              <Text style={styles.textClaimed}>1 out of 10</Text>
            </View>
            <View style={styles.iconBar}>
              <Image style={styles.iconBarImg} source={merchantIcon} />
              <Image style={styles.iconBarImg} source={addIcon} />
              <Image style={styles.iconBarImg} source={shareIcon} />
              <Image style={styles.iconBarImg} source={likeIcon} />
              <Text>1</Text>
            </View>
          </View>
        </View>
      );

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom:20
  },
  itemTitleBar:{
    flexDirection:'row',
    alignItems:'center',
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:5,
    paddingRight:5,
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderBottomColor:'#999999'
  },
  profileImgTitle:{
    flexDirection:'row',
    alignItems:'center',
  },
  textDate:{
    color:'#999999'
  },
  itemImage:{
    width:'100%',
    height:150
  },
  profileImg:{
    width:30,
    height:30,
    borderRadius:50,
    marginRight:5
  },
  followUserImg:{
    width:20,
    height:20
  },
  descIconBar:{
    paddingLeft:5,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  iconBar:{
    width:'50%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  iconBarImg:{
    width:20,
    height:20,
    marginLeft:10
  },
  textClaimed:{
    color:'#999999',
       
    paddingTop:10,
    paddingBottom:10,
  },
  desc:{
    paddingTop:20,
    width:'50%'
  }
});