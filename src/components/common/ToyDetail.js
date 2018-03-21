import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button.js';


//do we have to import graphql here to access the query in 'props'?
const ToyDetail = ({ toy }) => {
  const { images, sub_category, price } = toy;
  const {
    imageStyle,
    headerContentStyle,
    imageContainerStyle,
    headerTextStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={imageContainerStyle}>
          <Image
            style={imageStyle}
            source={{uri: images}}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{sub_category}</Text>
          <Text>{price}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: images }}
        />
      </CardSection>
      <CardSection>
        <Button />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

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

export default graphql(query)(ToyDetail);
