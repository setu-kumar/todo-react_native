import {styles} from 'ansi-colors';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';
import FirstApp from './firstApp';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {noteArray: [], noteText: '', updateText: 'original Text'};
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray});
  }

  updateText = () => {
    const temp = this.state.no[Key];
    this.state.noteArray.splice(Key, 1);
    this.setState({noteText: this.state.noteText, temp});
    //  this.setState({myText: 'Changed Text'});
  };

  addNote = () => {
    alert('iteam added');

    if (this.state.noteText) {
      const TempNote = this.state.noteArray;
      TempNote.push({
        note: this.state.noteText,
      });
      this.setState({noteArray: TempNote});
      this.setState({noteText: ''});
      this.setState({updateText: ''});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={(styles.headerText = '')}> TODO APP</Text>
        </View>
        <ScrollView>
          {this.state.noteArray.map((item, key) => {
            return (
              <View>
                <Text>{item.note}</Text>
                <Button
                  onPress={() => this.deleteNote(key)}
                  color="gray"
                  title="Delete"
                />

                <Button
                  onPress={() => this.updateText(key)}
                  title="Edit"
                  color="red">
                  {/* {this.state.myText} */}
                </Button>
              </View>
            );
          })}

          <TextInput
            style={styles.textInput}
            onChangeText={noteText => this.setState({noteText})}
            value={this.state.noteText}
            placeholder="what do you do.."></TextInput>

          <Button
            title="Add"
            onPress={this.addNote}
            style={styles.addButton}></Button>
        </ScrollView>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    borderBottomWidth: 10,
    textAlign: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    padding: 25,
  },
  scrollcontainer: {
    flex: 1,
    marginBottom: 80,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#ffe',
    padding: 20,
    borderWidth: 2,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 25,
  },
});
