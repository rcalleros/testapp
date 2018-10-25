import React from 'react';
import {Platform, ScrollView, TouchableOpacity, Image, View, Text, StyleSheet, Animated } from 'react-native';
import PropTypes from  'prop-types';
import Ajax from '../../services/Ajax';


const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
export default class MerchantProfile extends React.Component {
  //   static propTypes ={
  //  //  initialMerchantData: PropTypes.object.isRequired,
  //    // onBack: PropTypes.func.isRequired
  //   }
  
 
    static navigationOptions = {
      header: null,
    };
    constructor(props){
      super(props);

     
    }
    state = {
      merchantData: this.props.navigation.getParam('initialMerchantData'),
      scrollY: new Animated.Value(0)
    }
    async componentDidMount(){
      const merchantData = await Ajax.fetchMerchantProfile(this.state.merchantData.key);
      this.setState({merchantData});
    }
    render(){
      const { merchantData } = this.state;
      const img = {
        uri: merchantData.media[0]
      };
      const profileImage = require('../../assets/images/profile-pic.png');
      const followUserImg = require('../../assets/images/user_follow_add.imageset/follow_add.png');
      const merchantIcon = require('../../assets/images/feed_merchant.imageset/feed_merchant.png');
      const addIcon = require('../../assets/images/feed_add_promo.imageset/feed_add_promo.png');
      const shareIcon = require('../../assets/images/feed_share.imageset/feed_share.png');
      const likeIcon = require('../../assets/images/feed_like.imageset/feed_like.png');
      const date = 'October 18, 2018';

      const scrollY = Animated.add(
        this.state.scrollY,
        Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
      );
      const headerTranslate = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -HEADER_SCROLL_DISTANCE],
        extrapolate: 'clamp',
      });

      return(
        <View style={styles.container}>
          <Animated.View  
            pointerEvents="none"
            style={[
              styles.header,
              { transform: [{ translateY: headerTranslate }] },
            ]}>
            <Image style={styles.headerBackgroundImage} source={img} />
          </Animated.View>
          <ScrollView 
            styles={styles.fill}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
            )}
            contentInset={{
              top: HEADER_MAX_HEIGHT,
            }}
            contentOffset={{
              y: -HEADER_MAX_HEIGHT,
            }}
          >
            <View style={styles.itemTitleBar}>
              <View style={styles.profileImgTitle}>
                <Image style={styles.profileImg} source={profileImage} />
                <View>
                  <Text style={styles.text}>{merchantData.title}</Text>
                  <Text style={styles.textDate}>{date}</Text>
                </View>
              </View>
              <Image style={styles.followUserImg} source={followUserImg} />
                    
            </View>
            <Image style={styles.itemImage} source={img} />
            <View style={styles.descIconBar}>
              <View style={styles.desc}>
                <Text>{merchantData.title}</Text>
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
            <View style={styles.itemTitleBar}>
              <View style={styles.profileImgTitle}>
                <Image style={styles.profileImg} source={profileImage} />
                <View>
                  <Text style={styles.text}>{merchantData.title}</Text>
                  <Text style={styles.textDate}>{date}</Text>
                </View>
              </View>
              <Image style={styles.followUserImg} source={followUserImg} />
                    
            </View>
            <Image style={styles.itemImage} source={img} />
            <View style={styles.descIconBar}>
              <View style={styles.desc}>
                <Text>{merchantData.title}</Text>
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
            <View style={styles.itemTitleBar}>
              <View style={styles.profileImgTitle}>
                <Image style={styles.profileImg} source={profileImage} />
                <View>
                  <Text style={styles.text}>{merchantData.title}</Text>
                  <Text style={styles.textDate}>{date}</Text>
                </View>
              </View>
              <Image style={styles.followUserImg} source={followUserImg} />
                    
            </View>
            <Image style={styles.itemImage} source={img} />
            <View style={styles.descIconBar}>
              <View style={styles.desc}>
                <Text>{merchantData.title}</Text>
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
            <View style={styles.itemTitleBar}>
              <View style={styles.profileImgTitle}>
                <Image style={styles.profileImg} source={profileImage} />
                <View>
                  <Text style={styles.text}>{merchantData.title}</Text>
                  <Text style={styles.textDate}>{date}</Text>
                </View>
              </View>
              <Image style={styles.followUserImg} source={followUserImg} />
                    
            </View>
            <Image style={styles.itemImage} source={img} />
            <View style={styles.descIconBar}>
              <View style={styles.desc}>
                <Text>{merchantData.title}</Text>
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
          </ScrollView>
     
        </View>
      );

    }
}

const styles = StyleSheet.create({
  fill:{
    flex:1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:30,
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
    height:HEADER_MAX_HEIGHT,
    backgroundColor:'fuchsia',
  },
  headerBackgroundImage:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
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
  },
  header:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  }
});