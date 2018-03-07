import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { client } from '../apollo';

import ToyList from './components/ToyList.js';

export default class Index extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <ToyList />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
