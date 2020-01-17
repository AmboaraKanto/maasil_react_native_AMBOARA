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

import { Ionicons } from '@expo/vector-icons';

export class ItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      item: this.props.item,
    };
  }

  render () {
    var item = this.state.item;
    return (
      <View style={styles.todoItem}>
        <TouchableOpacity style={styles.todoContent} onPress={this._switchTodoState}>
          <Ionicons
            name={ 
              item.active ?
              Platform.OS === 'ios' ? `ios-radio-button-on` : 'md-radio-button-on' :
              Platform.OS === 'ios' ? `ios-radio-button-off` : 'md-radio-button-off'
            }
            size={26}
            color={"#000"}
          />
          <Text style={styles.todoText}>
            {item.titre}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  _switchTodoState = () => {
    this.setItemState(!this.state.item.active);
  }

  setItemState = (active) => {
    var item = this.state.item;
    item.active = active;
    this.setState({item});
  }
}

const styles = StyleSheet.create({
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
    // backgroundColor: "#eee",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
});
