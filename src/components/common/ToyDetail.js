import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//do we have to import graphql here to access the query in 'props'?
const ToyDetail = ({ toy }) => {
  const { images, sub_category, price } = toy;

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={styles.imageStyle}
            source={{uri: images}}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{sub_category}</Text>
          <Text>{price}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageStyle: {
    height: 50,
    width: 50
  }
};

export default ToyDetail;
