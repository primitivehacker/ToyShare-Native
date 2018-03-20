import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


export default class InboxScreen extends Component {
  render() {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Inbox</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  }
});
