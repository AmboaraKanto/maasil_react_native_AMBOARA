import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import {IconInputText} from '../components/InputComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {apiGet} from '../helpers/ApiHelper';

export default class PostScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      comments: [],
      postId: "1",
    };
  } 

  render() {
    var {comments} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <IconInputText icon={'chatboxes'} height={30} placeholder="Id du post" value={this.state.postId} onChangeText={text => this.setState({postId: text})} keyboardType="numeric"/>
        </View>
        <TouchableOpacity style={styles.bouton} onPress={this._rechercherPost}>
          <View>
            <Text style={styles.boutonText}>Rechercher le post</Text>
          </View>
        </TouchableOpacity>
        {
          
          comments.map((comment) => {
            console.log(comment);
            return (
              <View key={comment.id} style={styles.commentContent}>
                {/* <Image
                  style={{width: 50, height: 50}}
                  source={require(comment.owner.image)} 
                /> */}
                <Text style={styles.nomText}>{comment.owner.firstName + " " + comment.owner.lastName}</Text>
                <Text>{comment.message}</Text>
              </View>
            );
          })

        }
      </View>
    );
  }

  _rechercherPost = () => {
    apiGet("https://n161.tech/api/dummyapi/post/"+this.state.postId+"/comment").then((res) => {
      var coms = res.data;
      var ret = [];
      var last = res.data.length;
      if(last>2) {
        ret=[coms[last-1], coms[last-2]]
      }
      this.setState({comments: ret});
    })
  }
  
}

PostScreen.navigationOptions = {
  title: 'Posts',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  bouton: {
    marginVertical: 30,
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
    
  },
  commentContent: {
    backgroundColor: "#eee",
    borderWidth: 1, 
    borderColor: "#aaa", 
    marginVertical: 5,
    padding: 15,

  },
  nomText: {
    fontWeight: "bold",
  }
});