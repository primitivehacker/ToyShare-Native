import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ToysListedScreen from './ToysListedScreen.js';

class ToyCreateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      condition: '',
    };
  }

  handlePress() {
    this.props.mutate({
      variables: {
        price: this.state.price,
        condition: this.state.condition
      }
    }).then(() => this.props.navigation.navigate('ToysListed'))
  }

  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center'}}>
        <Text>Create a toy!</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={(price) => this.setState({price})}
          value={this.state.price}
          placeholder={`price`}
        />
        <TextInput
          style={styles.textinput}
          onChangeText={condition => this.setState({condition})}
          value={this.state.condition}
          placeholder={`condition`}
        />
        <Button
          onPress={() => this.handlePress()}
          title="Create Toy"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
});

const mutation = gql`
  mutation ToyCreate($price: Float, $condition: String){
    toyCreate(price: $price, condition: $condition) {
      price
      condition
    }
  }
`;

export default graphql(mutation)(ToyCreateScreen);
