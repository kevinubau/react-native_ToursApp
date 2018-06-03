
import React, { Component } from 'react';
import {
    Alert,
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

class Filtros extends Component {
    constructor(props) {
        super(props);
        this.handlerButtom = this.handlerButtom.bind(this);

        this.state = {
            cantidad: 1,
         };
         this.handlerCantidad = this.handlerCantidad.bind(this);
         
    }
    
    handlerButtom(){
        this.props.navigator.popToRoot({
            animated: true, // does the popToRoot have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the popToRoot have different transition animation (optional)
          });
          
    }

    handlerCantidad(e){
        this.setState({cantidad: e});
        console.log(e);

    };

    confirmar() {
        // Alert.alert(
        //   "Coño"
        // )
        //StartActivity();
        
        this.props.navigator.push({
          screen: "tours-App.ElegirTarjeta",
          title: "Elegir Tarjeta",
          passProps: this.props
    
      
    
        });
    
      };
  
    

    render(){

        return(
            <View style={{flex: 1}}>
                <Text style={{fontSize: 18, marginTop: 5}}>Cupo: </Text>
                
                <NumericInput 
                    title={"Cupo: "}
                    onChange={(value) => this.handlerCantidad(value)}
                    value={this.state.cantidad} 
                    initValue={1}
                    minValue={1}
                    maxValue={this.props.cupo}
                
                />
                <Text style={{fontSize: 18, marginTop: 5}}>Subtotal: {"‎₡"+this.props.precio}</Text>
                <Text style={{fontSize: 18, marginTop: 5}}>Total: {"‎₡"+(this.props.precio*this.state.cantidad)}</Text>
                
                <Boton handler={this.handlerButtom} texto={"Cancelar"}/>
                <Button title="Confirmar" onPress={()=>this.confirmar(this.props)}/>
                {/* <Boton handler={this.handlerButtom} texto={"Confirmar"} onPress={()=>this.confirmar()}/> */}

            </View>
        );
    }

}
export default Filtros;

