import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

export default class ActivitiesListView extends React.Component {

  state = {placeName:''};

  placeNameChangedHandler = val => {
    
    this.setState({
      placeName:val
    
    });

  };

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.titleText}>APP II</Text>
        <Text style={styles.titleText}>{this.state.placeName}</Text>
        <TextInput
          style={{width:300, fontSize: 42}}
          placeholder="Add some text..."
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
      
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />

       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});
