import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, ScrollView } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ToysListedScreen from './ToysListedScreen.js';

export default class SubCategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sub_category: '',
    };
  }

  handlePress() {
    this.props.mutate({
      variables: {
        sub_category_id: this.state.sub_category,
      }
    }).then(() => this.props.navigation.navigate('ToyCreateDetails'))
  }

  render() {
    return(
      <ScrollView style={{ paddingVertical: 20}}>
        <Text>Select a Sub-Category</Text>
        <Picker
          selectedValue={this.state.category}
          onValueChange={(itemValue, itemIndex) => this.setState({sub_category: itemValue})}>
          <Picker.Item label="Surfboard" value="1" />
          <Picker.Item label="Mountain Bike" value="2" />
          <Picker.Item label="Puppy" value="3" />
          <Picker.Item label="Skateboard" value="4" />
          <Picker.Item label="BBQ grill" value="5" />
          <Picker.Item label="Outdoor theator" value="6" />
          <Picker.Item label="Dirtbike" value="7" />
          <Picker.Item label="Camping Tent" value="8" />
          <Picker.Item label="River raft" value="9" />
          <Picker.Item label="Splitboard" value="10" />
          <Picker.Item label="Hang glider" value="11" />
          <Picker.Item label="Hotair Balloon" value="12" />
          <Picker.Item label="ATV" value="13" />
          <Picker.Item label="Boat" value="14" />
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
