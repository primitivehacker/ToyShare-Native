import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ToyCard from './ToyCard.js';


export default class InboxScreen extends Component {
  render() {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <FlatList contentContainerStyles={styles.contentContainer}>
            <ToyCard />
          </FlatList>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  }
});
