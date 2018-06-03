import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import ModalSelect from '../../components/ModalSelect';


class SideDrower extends Component{
    constructor(props) {
        super(props);
        
    }
    
    filtrosHandler = ()=>{
        
        this.closeIt();
        this.props.navigator.push({
            screen: "tours-App.Filtros",
            title: "Configura tus preferencias!",
            passProps: this.props

        
      
        });
        
    }

    closeIt(){
        this.props.navigator.toggleDrawer({
            side: 'right', // the side of the drawer since you can have two, 'left' / 'right'
            animated: false, 
            to: 'missing' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
          });

    }
   
    render(){
        return(
            <View style={styles.sideBar}>

                 <View style={styles.botonContainer}>
                    <Text style={styles.text}>MENÚ</Text>

                    <TouchableOpacity style={styles.touch} onPress = {() => {this.filtrosHandler()}} >
                        <Text style={styles.textOptions}>FILTRAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch}  onPress = {() => {this.closeIt()}}>
                        <Text style={styles.textOptions}>MIS PASEOS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch}>
                        <Text style={styles.textOptions}>CERRAR SESIÓN</Text>
                    </TouchableOpacity>

                    
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 18,
        margin: 10,
        fontWeight: 'bold',
    },

    sideBar:{
        width: Dimensions.get("window").width*0.6,
        backgroundColor: "white",
        flex:1,
        paddingTop: 20,
        
    },

    botonContainer:{
        width: Dimensions.get("window").width*0.6

    },
    boton:{
        margin: 100,
        height: 200

    },

    textOptions:{
        textAlign: "center",
        fontSize: 15,
        color: "black",
        
        
    },

    touch:{
        height: 100, 
        borderWidth: 1, 
        backgroundColor: "white", 
        borderColor: "#bfbfbf", 
        justifyContent: 'center',  
        alignItems: 'center'
    }



});


export default SideDrower;