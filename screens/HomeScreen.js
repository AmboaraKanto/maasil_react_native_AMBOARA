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

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      taches: [
        {titre: "To do 1", date: "10/01/2020", active: true},
        {titre: "To do 2", date: "10/01/2020", active: false},
        {titre: "To do 3", date: "10/01/2020", active: false},
        {titre: "To do 4", date: "10/01/2020", active: false},
      ] 
    };
  } 

  render () {
    var taches = this.state.taches;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
  
          {
            taches.map((tache, index) => {
              return (
                <ItemComponent key={index} item={tache}/>
              )
            })
          }
        
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: "Mes To Do"
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
