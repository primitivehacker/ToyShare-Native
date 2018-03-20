import React, { Component } from 'react';
import { View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ToyDetail from './ToyDetail.js';

class ToyList extends Component {

  renderToys() {
    return this.props.data.toys.map(toy =>
      <ToyDetail key={toy.id} toy={toy} />
    );
  }

  render() {
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
      id
      category
      sub_category
      price
    }
  }
`;

export default graphql(query)(ToysList);
