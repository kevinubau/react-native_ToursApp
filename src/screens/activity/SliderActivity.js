import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, ScrollView, TouchableHighlight, Dimensions, Alert} from 'react-native';
import Swiper from 'react-native-swiper';



const {width}=Dimensions.get('window')
const Slider = props=>(
    console.log(JSON.stringify(props)),
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: props.uri}}/>

    </View>
)
export default class extends Component{
    constructor(props) {
        super(props);
        this.state={
            //imagensSlider: require(this.props.images)
            imagensSlider:[]
        }
        


    }
    render(){
        return(
            <View style={styles.container}>

                    <Swiper
                        autoplay
                        height={240}
                        >
                        {
                            this.props.imagenes.map((item,i)=>
                            <Slider
                                uri={item}
                                key={i}
                            />)
                        }

                    </Swiper>

                </View>
        );
            }
        }
        const styles = StyleSheet.create({
            
            container:{
                flex: 1,
                //justifyContent:'center'
            },
            image:{
                flex:1,
                width
            }
        });
       // export default Slider;