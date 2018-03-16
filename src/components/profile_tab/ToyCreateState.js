import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, ScrollView } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { StackNavigator, TabNavigator } from 'react-navigation';

import ToysListedScreen from './ToysListedScreen.js';
import CategoryScreen from './CategoryScreen.js';
import SubCategoryScreen from './SubCategoryScreen.js';
import ToyCreateDetailsScreen from './ToyCreateDetailsScreen.js';

//Parent component that holds children such as Category, SubCategory etc..
class ToyCreateState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      subCategory: '',
      price: '',
      condition: '',
      dateAvailable: new Date(),
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({dateAvailable: newDate})
  }

  handlePress() {
    this.props.mutate({
      variables: {
        category_id: this.state.category,
        sub_category_id: this.state.subCategory,
        price: this.state.price,
        condition: this.state.condition,
      }
    })
  }
  render() {
    return(
      <View>
        <CategoryScreen
          selectedValue={this.state.category}
          onValueChange={(itemValue, itemIndex) => this.props.setState({category: itemValue})}
          category={this.state.category}
          onPress={this.handlPress}
        />
        <SubCategoryScreen subCategory={this.state.subCategory} onPress={this.handlePress} />
        <ToyCreateDetailsScreen
          price={this.state.price}
          condition={this.state.condition}
          onPress={this.handlePress}
          setDate={this.setDate()}
          dateAvailable={this.state.dateAvailable}
        />
      </View>
    );
  }
}

const mutation = gql`
  mutation ToyCreate(
    $category_id: String,
    $sub_category_id: String,
    $price: Double,
    $condition: String,
  ){
    toyCreate(
      category_id: $category_id,
      sub_category_id: $sub_category_id,
      price: $price,
      condition: $condition,
    ){
      category_id,
      sub_category_id,
      price,
      condition,
    }
  }
`;

export default graphql(mutation)(ToyCreateState);
