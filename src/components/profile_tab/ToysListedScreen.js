import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { StackNavigator } from 'react-navigation';




class ToysListedScreen extends Component {

  renderPrice() {
    return (
      <View>
        {this.props.data.toys.map((toy, index) => (
          <View key={index}>
            <Text>
              {toy.price}
            </Text>
          </View>
        ))}
      </View>
    )
  }

  renderCondition() {
    return (
      <View>
        {this.props.data.toys.map((toy, index) => (
          <View key={index}>
            <Text>
              {toy.condition}
            </Text>
          </View>
        ))}
      </View>
    )
  }

  render() {
    if (this.props.data.loading) {
      return null
    }
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>My Listed Toys</Text>
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
      price
      condition
      category_id
      sub_category_id
      images
    }
  }
`;

export default graphql(query)(ToysListedScreen);
