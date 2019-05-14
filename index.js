// Import a library to help create a component
import React from 'react';
import { AppRegistry }  from 'react-native';
import Header from './src/components/header';

//create component
const App = () => (
    //this is JSX and follows same semantics of HTML
    <Header />
  );

//render component to a device
//returns app even thoug don't have a return key wor
AppRegistry.registerComponent('albums', () => App);
