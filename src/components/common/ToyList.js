import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ToyDetail from './ToyDetail.js';

class ToyList extends Component {

  renderToys() {
    return this.props.data.toys.map(toy => {
      <ToyDetail key={toy.id} toy={toy} />
    });
  }

  render() {
    if (this.props.data.loading) {
      return null
    }
    return (
      <ScrollView>
        {this.renderToys()}
      </ScrollView>
    );
  }
}

const query = gql`
  {
    toys {
      id
      category_id
      sub_category_id
      price
    }
  }
`;

export default graphql(query)(ToyList);
