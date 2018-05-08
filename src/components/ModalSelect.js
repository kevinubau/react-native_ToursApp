
import React, { Component } from 'react';
import {
   Modal,
   Text,
   TouchableHighlight,
   View,
   StyleSheet,
   Button
} from 'react-native';


class ModalSelect extends Component {
   state = {
      modalVisible: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }


   render() {
      return (
         <View style = {styles.container}>
            <Modal animationType = {"slide"} transparent = {true}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               <View style = {styles.modal}>
                  <Text style = {styles.text}>Modal is open!</Text>
                  
                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     
                     <Button
                        onPress={() => {
                            this.toggleModal(!this.state.modalVisible)}}
                        title="Cancelar"
                        color="#841584"
                     />
                  
                  </TouchableHighlight>
               </View>
            </Modal>
            
            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.text}>Open Modal</Text>
            </TouchableHighlight>
         </View>
      )
   }
}
export default ModalSelect;

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      backgroundColor: '#ede3f2',
      
   },
   modal: {
      
      alignItems: 'center',
      backgroundColor: '#F8F8F8',
      padding: 100,
      marginTop: 100,
      
   },
   text: {
      color: '#3f2949',
      marginTop: 10
   }
})