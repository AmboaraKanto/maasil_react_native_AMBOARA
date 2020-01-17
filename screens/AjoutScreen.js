import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import {IconInputText} from '../components/InputComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {storeTache} from '../helpers/TacheHelper';

export default class AjoutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(),
      titre: "",
    };
  } 

  render() {
    var {date} = this.state;
    var dateValue = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    return (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <IconInputText icon={'calendar'} height={30} placeholder="Date" onChangeText={text => this.setState({date: text})}  value={dateValue}/>
            <IconInputText icon={'create'} height={30} placeholder="Titre" onChangeText={text => this.setState({titre: text})} />
          </View>
          <TouchableOpacity style={styles.bouton} onPress={this._saveTache}>
            <View>
              <Text style={styles.boutonText}>Ajouter la tache</Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  }

  _saveTache = async () => {
    var newTache = {
      titre: this.state.titre,
      date: this.state.date,
      active: true,
    }
    await storeTache(newTache).then(() => {
      this.props.navigation.navigate('Home');
    });
  }
}

AjoutScreen.navigationOptions = {
  title: 'Ajouter une tache',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  bouton: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#000",
    borderWidth: 2,
    alignItems: "center"
  },
  boutonText: {
    fontWeight: "bold",
  },
  inputContainer: {
    
  }
});
