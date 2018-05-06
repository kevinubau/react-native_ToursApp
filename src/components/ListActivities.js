import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button,Image, FlatList,RefreshControl  } from 'react-native';



class ListActivities extends Component{
 
  constructor(props){
    super(props);
  }

  render(){
    

    return(
      <View>
        <Text>{this.props.mensaje}</Text>
      </View>
    );
  }
}
    


export default ListActivities;