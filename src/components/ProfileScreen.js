import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import ToyCreateScreen from './ToyCreateScreen';
import ToysListedScreen from './ToysListedScreen';

export class ProfileScreen extends Component {
    render() {
      return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile Screen</Text>
          <Button
            title="List a Toy"
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
  ToyCreate: { screen: ToyCreateScreen },
  ToysListed: { screen: ToysListedScreen },
})
