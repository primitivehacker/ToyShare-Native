import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { client } from './apollo';

import NavBar from './src/components/TabNavigator.js';
import ProfileScreen from './src/components/profile_tab/ProfileScreen.js';
import DiscoverScreen from './src/components/discover_tab/DiscoverScreen.js';
import InboxScreen from './src/components/inbox_tab/InboxScreen.js';
import SavedScreen from './src/components/saved_tab/SavedScreen.js';
import ToysScreen from './src/components/toys_tab/ToysScreen.js';


export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <NavBar />
      </ApolloProvider>
    );
  }
}
