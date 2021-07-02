import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class FirstApp extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={StyleSheet.note}>
        <Text style={StyleSheet.noteText}>{this.props.val.date} </Text>
        <Text style={StyleSheet.noteText}>{this.props.val.note} </Text>
        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={StyleSheet.noteDelete}>
          <Text style={StyleSheet.noteDeleteText} D></Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // note: {
  //   position: 'relative',
  //   padding: 20,
  //   paddingRight: 80,
  //   borderBottomWidth: 2,
  //   borderBottomColor: '#ededed',
  // },
  // noteText: {
  //   paddingLeft: 20,
  //   borderLeftWidth: 10,
  //   borderLeftColor: '@e91e63',
  // },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
