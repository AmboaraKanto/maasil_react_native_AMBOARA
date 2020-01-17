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
import {storeTache} from '../helpers/TacheHelper';

export class ItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      item: this.props.item,
    };
  }

  formatDate(date) {
    var ret=date.split("T");
    if(ret.length>0) {
      ret=ret[0].split("-");
      if(ret.length==3) {
        return ret[2]+"/"+ret[1]+"/"+ret[0];
      }
      return ret[0];
    }
    return ret;
  }

  render () {
    var item = this.state.item;
    // var dateValue = item.date.getDate()+"/"+(item.date.getMonth()+1)+"/"+item.date.getFullYear();
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
          <View style={styles.dateContent}>

            <Text style={styles.dateText}>
              {this.formatDate(item.date)}
            </Text>
          </View>
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
    storeTache(item).then(() => {
      this.setState({item});
    })
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
  dateText: {
    marginLeft: 10,
    fontSize: 10,
    textAlign: "right",
  },
  dateContent: {
    flex: 1,
    justifyContent: "flex-end",
  },
  todoItem: {
    padding: 20,
    // backgroundColor: "#eee",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
});
