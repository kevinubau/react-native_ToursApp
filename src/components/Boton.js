import React, { Component } from 'react';
import {

    View,
    StyleSheet,
    Button,
 } from 'react-native';


 class Boton extends Component{

    constructor(props){
        super(props);

        
    }

    render(){

  

        return(
            <View style={{width: '100%', alignItems: 'center', alignContent:'center', flexDirection:'row', padding:10}}>

                <Button 
                    onPress={() => {

                            this.props.handler();
                        }
                    }
                    title={this.props.texto}
                    color="steelblue"
                    
                />

            </View>
        )
    }



 }

 export default Boton;