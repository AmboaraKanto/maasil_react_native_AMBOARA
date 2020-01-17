import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export class IconInputText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {margintTop} = this.props;
    return (
      <View style={[styles.iconInputText, margintTop? {marginTop: margintTop}: {marginTop: 25}]}>
        {
          this.props.icon
          ? <Ionicons
              name={ 
                Platform.OS === 'ios' ? `ios-`+this.props.icon : 'md'+this.props.icon
              }
              size={20}
              color={"#000"}
            />
          : null
        }
        <TextInput 
            style={[styles.inputText, {height: this.props.height}, this.props.disabled? {backgroundColor: "#C6C6C6"}: {}]}
            {...this.props} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  labelInputText: {
    flexDirection: 'column',
    marginTop: 15,
  },
  iconInputText: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingBottom: 5
  },
  iconStyle: {
    padding: 10,
    margin: 5,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  inputText: {
    height: 40,
    paddingLeft: 5,
    flex: 9,
    fontSize: 14,
    // textAlignVertical: "bottom"
  },
});
