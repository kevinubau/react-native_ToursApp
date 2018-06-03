
import React, { Component } from 'react';
import {
   Modal,
   Text,
   TouchableHighlight,
   View,
   StyleSheet,
   Button,
   Picker,
   Alert
   
} from 'react-native';
import FilterSelect from '../../components/FilterSelect'
import Maps from '../../components/Maps'
import SliderValue from '../../components/SliderValue'

class Filtros extends Component {

    constructor(props) {
        super(props);
        
    }
    
    
    render(){
       
        return(
            <View>
                <Text>{this.props.hola}</Text>
                <Maps/>
                <FilterSelect/>
                <SliderValue/>
            </View>
        );
    }

}
export default Filtros;