import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ToyDetail from './ToyDetail.js';

class ToyList extends Component {
  state = { toys: [] };

  componentWillMount() {
    this.props.data.toys
    .then(response => this.setState({ toys: response.data }));
  }

  renderToys() {
    return this.state.toys.map(toy => {
      <ToyDetail key={toy.id} toy={toy} />
    });
  }

  render() {
    console.log(this.props.data);
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
      category
      sub_category
      price
    }
  }
`;

export default graphql(query)(ToyList);
