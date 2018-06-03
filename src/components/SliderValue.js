import React, { Component } from 'react';
import {View, Text, Slider,StyleSheet} from 'react-native';



class SliderValue extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value:1,
            age :0
        };


        
    }

    handlerChange = (event) =>{
        //alert(event);
    }

    getVal = (val) => {
        //alert(val);
    } 

    
    render(){
        return(
            <View style={styles.container}>
             <Text style={{fontSize: 20, margin:20}}>Kilometros: {this.state.value}</Text>
            
            <Slider
                style={{ width: 300 }}
                step={1}
                minimumValue={1}
                maximumValue={50}
                value={this.state.value}
                onValueChange={val => this.setState({ value: val })}
                onSlidingComplete={ val => this.getVal(val)}
                thumbTouchSize={{width: 50, height: 80}}
            />

           
       
               
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignItems: "center"
    }
   
});
export default SliderValue;