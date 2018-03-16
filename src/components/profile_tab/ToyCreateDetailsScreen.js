import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, DatePickerIOS } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ToysListedScreen from './ToysListedScreen.js';

export default class ToyCreateDetailsScreen extends Component {
  render() {
    return(
      <ScrollView style={{ paddingVertical: 20}}>
        <Text>Finish Details</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={(price) => this.props.setState({price})}
          value={this.state.price}
          placeholder={`price`}
        />
        <TextInput
          style={styles.textinput}
          onChangeText={(condition) => this.props.setState({condition})}
          value={this.state.condition}
          placeholder={`condition`}
        />
        <DatePickerIOS
          date={this.props.dateAvailable}
          onDateChange={this.setDate}
        />
        <Button
          onPress={() => this.props.onPress()}
          title="Create Toy"
          color="#841584"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
});
