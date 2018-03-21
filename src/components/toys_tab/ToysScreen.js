import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ToysScreen extends Component {
  renderSubCategories() {
    return this.props.data.toys.map(toy => {
      return (
        <View key={toy.id}>
          <Text>
            {toy.sub_category}
          </Text>
        </View>
      );
    });
  }

  renderCategories() {
    return this.props.data.toys.map(toy => {
      return (
        <View key={toy.id}>
          <Text>
            {toy.category}
          </Text>
        </View>
      );
    });
  }

  render() {
    if (this.props.data.loading) { return <Text>Loading.... </Text>; }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Sub-Categories</Text>
          <View>
            {this.renderSubCategories()}
            </View>
        <Text style={{paddingVertical: 30}}>Categories</Text>
          <View>
            {this.renderCategories()}
          </View>
      </View>
    );
  }
}

const query = gql`
  {
    toys {
      id
      category_id
      sub_category_id
      images
    }
  }
`;

export default graphql(query)(ToysScreen);
