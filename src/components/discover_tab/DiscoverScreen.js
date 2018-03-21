import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ToyList from '../common/ToyList.js';


export default class DiscoverScreen extends Component {
  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ToyList />
      </View>
    );
  }
}
