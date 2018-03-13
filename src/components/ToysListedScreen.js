import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { StackNavigator } from 'react-navigation';




class ToysListedScreen extends Component {

  renderPrice() {
    return this.props.data.toys.map(toy => {
      return (
        <View key={toy.id}>
          <Text>
            {toy.price}
          </Text>
        </View>
      );
    });
  }

  renderCondition() {
    return this.props.data.toys.map(toy => {
      return (
        <View key={toy.id}>
          <Text>
            {toy.condition}
          </Text>
        </View>
      );
    });
  }

  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>My Listed Toys</Text>
        //ToyCard
        <Text style={{paddingVertical: 30}}>Price</Text>
          <View>
            {this.renderPrice()}
          </View>
      </View>
    );
  }
}


const query = gql`
  {
    toys {
      id
      category
      sub_category
    }
  }
`;

export default graphql(query)(ToysListedScreen);
