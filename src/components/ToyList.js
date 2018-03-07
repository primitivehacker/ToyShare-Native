import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ToyList extends Component {
  renderToys() {
    return this.props.data.toys.map(toy => {
      return (
        <View>
          <Text>
            {toy.sub_category}
          </Text>
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
      <View>
        {this.renderToys()}
      </View>
    );
  }
}

const query = gql`
  {
    toys {
      category
      sub_category
    }
  }

`;

export default graphql(query)(ToyList);
