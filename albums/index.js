import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a component
const App = () => (
    <View>
        <Header headerText={'Dogs'} />
        <AlbumList />
    </View>
);

//render device
AppRegistry.registerComponent('albums', () => App);
