import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {View, Button, StyleSheet, Dimensions} from 'react-native';



class Maps extends Component{
    constructor(props) {
        super(props);

        this.state = {
            focusedLocation:{
                latitude: 10.363639,//37,
                longitude: -84.513359,//-122,
                latitudeDelta: 0.0122,
                longitudeDelta: Dimensions.get("window").width/
                Dimensions.get("window").height*0.0122

            }

        };
    }


    elegirUbicacionHandler = event =>{

        const coords = event.nativeEvent.coordinate;

        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude  

        });

        this.setState(prevState=>{
            return {

                focusedLocation:{

                    ...prevState.focusedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                }
            }
        });

        
    }

    obtenerUbicacionHandler = () =>{
        //alert("fetching");
        navigator.geolocation.getCurrentPosition(pos =>{
            const coordsEvent = {
                nativeEvent: { 

                    coordinate:{
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude
                    }
                    
                }
            };
            this.elegirUbicacionHandler(coordsEvent);

        },err =>{
            console.log(err);
        })

    }
    
    render(){
        return(
            <View style={styles.container}>
                <MapView
                    initialRegion={this.state.focusedLocation}
                    style={styles.map}
                   
                    onPress={this.elegirUbicacionHandler}
                    
                    ref={ref=> this.map = ref}
                    showsMyLocationButton = {true}
                    showsUserLocation = {true}
                />
                <View>
                    <Button title="Localizar" onPress={this.obtenerUbicacionHandler}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignItems: "center"
    },
    map:{
        width:"100%",
        height: 250
    }
});
export default Maps;