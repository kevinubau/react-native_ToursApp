
import React, { Component } from 'react';
import {
   Modal,
   Text,
   TouchableHighlight,
   View,
   StyleSheet,
   Button,
   Picker,
   
} from 'react-native';
import Boton from '../../components/Boton';
import App from '../../../App';
import NumericInput,{ calcSize } from 'react-native-numeric-input'

var navigationVarRuta={
    LeftButton: function(route, navigator, index){
  
    }
  }
class Filtros extends Component {
    constructor(props) {
        super(props);
        this.handlerButtom = this.handlerButtom.bind(this);
    }
    
    handlerButtom(){
        this.props.navigator.popToRoot({
            animated: true, // does the popToRoot have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the popToRoot have different transition animation (optional)
          });
          
    }

    
  
    

    render(){

        return(
            <View>
                <Text>Tarjeta</Text>
                
                {/* <NumericInput 
                    onChange={value => console.log(value)} 
                    initValue={1}
                    minValue={1}
                    maxValue={this.props.cupo}
                
                /> */}
                {/* <Text>Subtotal: {"‎₡"+this.props.precio}</Text>
                <Text>Total: {"‎₡"+this.props.precio}</Text> */}
                <TouchableHighlight underlayColor="steelblue" >
                        <View >
                            <Text>{"Agregar tarjeta"}</Text>
                        </View>
                    </TouchableHighlight>


                <Boton handler={this.handlerButtom} texto={"Cancelar"}/>
                


                

            </View>
        );
    }

}
export default Filtros;