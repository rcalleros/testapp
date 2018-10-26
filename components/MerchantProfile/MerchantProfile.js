import React from 'react';
import { Button,StatusBar, Platform, ScrollView, TouchableOpacity, Image, View, Text, StyleSheet, Animated } from 'react-native';
import PropTypes from  'prop-types';
import Ajax from '../../services/Ajax';
import AvatarCircle from '../../components/shared/AvatarCircle';


const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73; 
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const BackBtn = ({navigate})=><TouchableOpacity style={{zIndex:2}} onPress={()=>{navigate.goBack();}}><Text> &#60; BACK</Text></TouchableOpacity>;

const Filler = ({merchantData}) =>{
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
  return(
    <View style={styles.fillerContainer}>
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
    </View>
  );

};



export default class MerchantProfile extends React.Component {
 
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
      // console.log(merchantData);
      // console.log(merchantData.user.avatar);
      this.setState({merchantData});
    }
    _renderFiller = () => {
      const data = Array.from({length: 30});
      const Fillers = data.map((_,i)=><Filler merchantData={this.state.merchantData} key={i}/>);
      return Fillers;
    }
    render(){
      const img = {
        uri: this.state.merchantData.media[0]
      };

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
          <StatusBar  translucent={false}  />
          <BackBtn navigate={this.props.navigation} />
      
          <Animated.ScrollView 
            styles={styles.fill}
            scrollEventThrottle={1}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
            )}
            contentInset={{
              top: HEADER_MAX_HEIGHT,
            }}
          
          >
            <View style={styles.scrollViewContent}>
              {this._renderFiller()}
            </View>
          </Animated.ScrollView>
          <Animated.View  
            style={[
              styles.header,
              { transform: [{ translateY: headerTranslate }] },
            ]}>
            {/* <Image style={styles.profileImg} source={{uri:this.state.merchantData.user.avatar}} /> */}
      
            <Image style={styles.headerBackgroundImage} source={img} />
            <View style={styles.avatarRow}>
              <AvatarCircle 
              width={75}/>
            </View>
            <View style={styles.headerBtnsContainer}>
              <Button title="button"  onPress={(e)=>{console.log(e);}}>
                <Text>Button 1</Text>
              </Button >
              <Button title="button"  >
                <Text>Button 2</Text>
              </Button >
              <Button title="button" >
                <Text>Button 3</Text>
              </Button >
            </View>
          </Animated.View>
        </View>
      );

    }
}

const styles = StyleSheet.create({
  avatarRow:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
    zIndex:2
  },
  headerBtnsContainer:{
    width:'100%',
    position:'absolute',
    backgroundColor:'yellow',
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
    bottom:0
  },
  scrollViewContent:{
    marginTop: HEADER_MAX_HEIGHT,
    zIndex:0
  },
  fill:{
    flex:1
  },
  container: {
    position:'relative',
    flex: 1,
    backgroundColor: '#2f1b3e',
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
    height:150,
  },
  headerBackgroundImage:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height:'50%',
    resizeMode: 'cover',
    zIndex:0
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
    position:"absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
    zIndex:2
  }
});