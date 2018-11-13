import React from 'react';
import {View, Text} from 'react-native';

export default class NewTradeScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
    render() {
      return (
        <View>
          <Text>New trade like a mug</Text>
        </View>
      );
    }
}
// const styles = StyleSheet.create({
//   height: 20,
//   width:20,
// });