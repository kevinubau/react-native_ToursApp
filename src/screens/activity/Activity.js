import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, ScrollView, TouchableHighlight, Dimensions, Alert} from 'react-native';
import SliderActivity from './SliderActivity';




class Activity extends Component{

    constructor(props) {
        super(props);
        


    }
    comprarHandler2(){
        Alert.alert(
            "Comprando..."
          );
    }

    comprarHandler(){
        
        this.props.navigator.push({
            screen: "tours-App.Compra",
            title: "Inscripción",
            passProps: this.props
        
      
        });
        
    }

    render(){
        return(
            <View style={{flex:1}}>
                
                
                <ScrollView>
                <SliderActivity imagenes={this.props.imagenes}/>

                
                    <Text style={{fontSize: 18}}>Lugar de destino: {this.props.lugarDestino}</Text>
                   
                    <Text style={{fontSize: 18}}>Lugar de salida: {this.props.lugarSalida}</Text>
                    <Text style={{fontSize: 18}}>Hora: {this.props.horaInicio}</Text>
                    <Text style={{fontSize: 18}}>Cupo: {this.props.cupo}</Text>
                    <Text style={{fontSize: 18}}>Fecha de inicio: {new Date(this.props.fechaInicio).toLocaleDateString("es")}</Text>
                    <Text style={{fontSize: 18}}>Descripción: {this.props.descripcion}</Text>

                     
                     
        


                </ScrollView>
                <View style={styles.footer} >

                    <Text style={styles.textPrecio}>{"‎₡"+this.props.precio}</Text>

                    <TouchableHighlight underlayColor="steelblue" onPress={()=>this.comprarHandler(this.props)}>
                        <View style={styles.containerComprar}>
                            <Text style={styles.comprarButtom}>{"Inscribirme"}</Text>
                        </View>
                    </TouchableHighlight>
                
                </View>
                
            </View>

        );
    }
}

const styles = StyleSheet.create({
    containerComprar:{
        backgroundColor: "gray",
        justifyContent: 'center',  
        alignItems: 'center',
        margin: 20
    },
    comprarButtom:{
        backgroundColor: "white",
        width: 200,
        height: 50,
        textAlign: 'center',
        textAlignVertical: "center",
        fontSize: 20,
        fontWeight: "bold"
        

    },
    textPrecio:{
        
        fontSize: 30,
        fontWeight: 'bold',
        color: "white",
        padding: 20
    },
    footer:{
        backgroundColor: "steelblue",
        width: Dimensions.get("window").width,
        height: 70,
        justifyContent: 'center',  
        alignItems: 'center',
        flexDirection: "row",
        
    },
    container:{
        alignItems: 'center',
        
        

    },
    imagen:{
        width: 300,
        height: 300,
        margin: 30
        

    }
});

export default Activity;





