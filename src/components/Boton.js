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
      
                <Button 
                    onPress={() => {

                            this.props.handler();
                        }
                    }
                    title={this.props.texto}
                    color="steelblue"
                    
                />

  
        )
    }



 }

 export default Boton;