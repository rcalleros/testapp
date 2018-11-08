import React from 'react';
import { Button,StatusBar, Platform, ScrollView, TouchableOpacity, Image, View, Text, StyleSheet, Animated } from 'react-native';
import PropTypes from  'prop-types';
import Ajax from '../../services/Ajax';
import AvatarCircle from '../../components/shared/AvatarCircle';
import TabsContainer from './TabsContainer';


const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73; 
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const BackBtn = ({navigate})=><TouchableOpacity style={styles.backBtn} onPress={()=>{navigate.goBack();}}><Text> &#60; BACK</Text></TouchableOpacity>;

//DEFINE TOUCHABLE BUTTONS WITH STAT COUNTER
const StatBtnsConfig = [
  {
    text:'Followers',
    route:'FollowersList',
    className:'followers'
  },
  {
    text:'Reviews',
    route:'FollowersList',
    className:'reviewBtn'
  },
  {
    text:'Locations',
    route:'FollowersList',
    className:'reviews'
  }
];
//DEFINE TABS FOR THE BOTTOM TAB CONTAINER
const TabsConfig = [{name:'Gift Cards'},{name:'Promos'},{name:'Punch Cards'}];



export default class MerchantProfile extends React.Component {
 
    static navigationOptions = {
      header: null,
    };
    constructor(props){
      super(props);
      this.state = {
        merchantData: this.props.navigation.getParam('initialMerchantData'),
        scrollY: new Animated.Value(0),
        activeContent: 'Gift Cards',
        isLoaded:false
      };
     
    }
 
    async componentDidMount(){
      await this.fetchData().done();
    }

    async fetchData(){
      const merchantData = await Ajax.fetchMerchantProfile(this.state.merchantData.key);
      await this.promisedSetState({merchantData: merchantData, isLoaded:true});
    }

    promisedSetState = (newState) => {
      return new Promise((resolve) => {
        this.setState(newState, () => {
          resolve();
        });
      });
    }

    _renderNav=()=>{
      const NavBtns = TabsConfig.map((item, i)=>{
        return <TouchableOpacity onPress={()=>{this.onClickSetActiveContent(item.name)}} style={styles.navBtn} key={i} ><Text>{item.name}</Text></TouchableOpacity>;
      });
      return <View style={styles.navRow}>{NavBtns}</View>;
    }
    _renderStatBtns=()=>{
      const StatBtns = StatBtnsConfig.map((item, i)=>{
        return (
          <TouchableOpacity onPress={()=>{this.onTouchRouteTo(item.route)}} style={[styles.statBtn,styles[item.className]]} key={i} >
            <Text style={{textAlign:'center'}}>999</Text>
            <Text>{item.text}</Text>
          </TouchableOpacity>
        );
      });
      return <View style={styles.statBtnsContainer}>{StatBtns}</View>;
    }
    onClickSetActiveContent = (activeContent)=>{
      this.setState({activeContent:activeContent});
    }
    onTouchRouteTo = (route)=>{
      const { navigate } = this.props.navigation;
      navigate(route);
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
      const imageOpacity = scrollY.interpolate({
        inputRange: [0, 50,50],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp',
      });

      return(
        <View style={styles.container}>
          <StatusBar  translucent={false}  />
          <BackBtn navigate={this.props.navigation} />

          <Animated.View 
            pointerEvents="box-none" 
            style={[
              styles.header,
              { transform: [{ translateY: headerTranslate }] },
            ]}>
            <View style={styles.avatarRow}>
              <Image
                style={styles.headerBackgroundImage}
                source={img} 
              />
              <AvatarCircle
                imageOpacity={imageOpacity}
                avatarUri={this.state.isLoaded ? this.state.merchantData.user.avatar : ''} 
                width={75}/>
              <Text style={styles.nameText}>{this.state.isLoaded ? this.state.merchantData.user.name : 'Some User'} </Text>
            </View>
            <View style={styles.headerBtnsContainer}>
              {this._renderStatBtns()}
              {this._renderNav()}
            </View>

          </Animated.View>
      
          <Animated.ScrollView 
            styles={styles.fill}
            scrollEventThrottle={1}
            onScroll={Animated.event(
              [{ nativeEvent: { 
                contentOffset: { 
                  y: this.state.scrollY 
                },
              } }],
              {useNativeDriver: true}
            )}
            contentInset={{
              top: HEADER_MAX_HEIGHT,
            }}
          
          >
            <View style={styles.scrollViewContent}>
              <TabsContainer activeContent={this.state.activeContent} />
            </View>

          </Animated.ScrollView>
         
        </View>
      );

    }
}

const styles = StyleSheet.create({
  avatarRow:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    // width:'100%',
    height:150,
    zIndex:2,
  },
  nameText:{
    position:'absolute',
    bottom:10,
    right:0,
    left:0,
    backgroundColor:'white',
    width:'100%',
    textAlign:'center',
  },
  headerBtnsContainer:{
    width:'100%',
    position:'relative',
    bottom:0,
    zIndex:3,
  },
  statBtnsContainer:{
    width:'100%',
    justifyContent:'center',
    flexDirection:'row',
    zIndex:3,
    paddingTop:15,
    paddingBottom:15,
  },
  statBtn:{
    padding:20,
    paddingBottom:10,
    paddingTop:10,
  },
  reviewBtn:{
    borderRightWidth:2,
    borderRightColor:'#2f1b3e',
    borderLeftWidth:2,
    borderLeftColor:'#2f1b3e'
  },
  scrollViewContent:{
    backgroundColor:'fuchsia',
    marginTop: HEADER_MAX_HEIGHT,
    // zIndex:0
  },
  fill:{
    flex:1
  },
  container: {
    position:'relative',
    flex: 1,
    backgroundColor: '#2f1b3e',
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
  header:{
    position:'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'yellow',
    height: HEADER_MAX_HEIGHT,
    zIndex:2,
    borderWidth:2,
    borderColor:'purple'
  },
  backBtn:{
    padding:10,
    position:'absolute',
    zIndex:4,
    top:0,
    backgroundColor:'green'}
});