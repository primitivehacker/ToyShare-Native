import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, ScrollView } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ToysListedScreen from './ToysListedScreen.js';

export default class CategoryScreen extends Component {
  render() {
    return(
      <ScrollView style={{ paddingVertical: 20}}>
        <Text>Select a Category</Text>
        <Picker
          selectedValue={this.props.selectedValue}
          onValueChange={this.props.onValueChange} >
          <Picker.Item label="Summer" value="1" />
          <Picker.Item label="Winter" value="2" />
        </Picker>
        <Button
          onPress={() => this.props.onPress()}
          title="Next"
          color="#841584"
        />
      </ScrollView>
    );
  }
}
