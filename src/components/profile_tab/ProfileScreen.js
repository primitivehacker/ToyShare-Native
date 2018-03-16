import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import ToyCreateState from './ToyCreateState.js';
import SubCategoryScreen from './SubCategoryScreen.js';
import ToyCreateDetailsScreen from './ToyCreateDetailsScreen';
import ToysListedScreen from './ToysListedScreen.js';
import CategoryScreen from './CategoryScreen.js';

export class ProfileScreen extends Component {
    render() {
      return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile Screen</Text>
          <Button
            title="List a toy"
            onPress={() => this.props.navigation.navigate('ToyCreate')}
          />
          <Button
            title='View my toys'
            onPress={() => this.props.navigation.navigate('ToysListed')}
          />
        </View>
      );
    }
}

export const ProfileStack = StackNavigator({
  Profile: { screen: ProfileScreen },
  Category: { screen: CategoryScreen },
  ToyCreate: { screen: ToyCreateState },
  SubCategory: { screen: SubCategoryScreen},
  ToyCreateDetails: { screen: ToyCreateDetailsScreen}, //final inputs to create toy (eg: price, location etc..)
  ToysListed: { screen: ToysListedScreen },
})
