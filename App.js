import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { client } from './apollo';

import NavBar from './src/components/TabNavigator.js';
import ProfileScreen from './src/components/ProfileScreen.js';
import DiscoverScreen from './src/components/DiscoverScreen.js';
import InboxScreen from './src/components/InboxScreen.js';
import SavedScreen from './src/components/SavedScreen.js';
import ToysScreen from './src/components/ToysScreen.js';


export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <NavBar />
      </ApolloProvider>
    );
  }
}
