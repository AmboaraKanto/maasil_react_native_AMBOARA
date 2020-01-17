import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {ItemComponent} from '../components/ItemComponent';
import {getTaches} from '../helpers/TacheHelper';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      taches: [
      ] 
    };

  } 

  render () {
    getTaches().then((res) => {
      this.setState({taches: res.reverse()});
    });
    var taches = this.state.taches;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
  
          {
            taches.map((tache) => {
              return (
                <ItemComponent key={tache.id} item={tache}/>
              )
            })
          }
        
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: "Mes taches"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
  },
  todoContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  todoText: {
    marginLeft: 10,
  },
  todoItem: {
    padding: 20,
    backgroundColor: "#eee",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
});
