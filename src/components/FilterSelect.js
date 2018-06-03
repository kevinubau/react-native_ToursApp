import React, { Component } from 'react';
import {
    Modal,
    Text,
    TouchableHighlight,
    View,
    StyleSheet,
    Button,
    Picker,
    TextInput,
    ActivityIndicator
    
 } from 'react-native';
 import axios from 'react-native-axios';


class FilterSelect extends Component{

    constructor(props){
        super(props);

        

        this.state = {
            tipoDeFiltro: '',
            Subtipo: '',
            tempListaFiltros: ['Seleccione'],
            tempCategorias: ['Seleccione tipo'],
            dificultades: ['Seleccione'],
            precio: 0,
            cupo: 0,
            isLoading: true
         };
         this.handlerSelectedValue = this.handlerSelectedValue.bind(this);
         this.handlerSubtipoSelectedValue = this.handlerSubtipoSelectedValue.bind(this);
         this.handlerPrecioChange = this.handlerPrecioChange.bind(this);
        

       

    };

    componentDidMount() {

    
      fetch('https://excursionesdatabase.firebaseapp.com/getFilterTypes')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          tempListaFiltros: ['Seleccione'].concat(responseJson),
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });

      fetch('https://excursionesdatabase.firebaseapp.com/getCategories')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          tempCategorias: ['Seleccione tipo'].concat(responseJson),
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });


      fetch('https://excursionesdatabase.firebaseapp.com/getDificulties')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dificultades: ['Seleccione tipo'].concat(responseJson),
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });

      

    }


    handlerSelectedValue(itemValue, itemIndex){
        this.setState({tipoDeFiltro: itemValue});
        console.log(itemValue);

    };

    handlerSubtipoSelectedValue(itemValue, itemIndex){
        this.setState({Subtipo: itemValue});
        console.log(itemValue);
        this.props.handler(this.state.tipoDeFiltro, itemValue);

    };

    handlerPrecioChange(e){
        this.setState({precio: e});
        console.log(e);

    };

    


   
     

     render(){

        if(this.state.isLoading){
            return(
              <View style={{padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }

        const listFilterOptions = this.state.tempListaFiltros.map((element, index) =>
            <Picker.Item key={index.toString()} label={element} value={element} />
        );

        const listCategoriesOptions = this.state.tempCategorias.map((element, index) =>
            <Picker.Item key={index.toString()} label={element} value={element} />
        );

        const listDificulties = this.state.dificultades.map((element, index) =>
            <Picker.Item key={index.toString()} label={element} value={element} />
        );
         return(
             <View>
                
                <Picker
                    selectedValue={this.state.tipoDeFiltro}
                    style={{ height: 50, width: '60%' }}
                    onValueChange={(itemValue, itemIndex) => this.handlerSelectedValue(itemValue, itemIndex)}
                    
                >
                    {listFilterOptions}
                    
                   

                </Picker>

                {
                    this.state.tipoDeFiltro == 'Categoria' ?

                    <View>
                        <Picker
                            selectedValue={this.state.Subtipo}
                            style={{ height: 50, width: '60%' }}
                            onValueChange={(itemValue, itemIndex) => this.handlerSubtipoSelectedValue(itemValue, itemIndex)}
                            
                        >
                            {listCategoriesOptions}
                    
                   

                        </Picker>



                    </View>
                    
                    :this.state.tipoDeFiltro == 'Precio' ?
                        <View>
                            
                            <TextInput
                                style={{ width: '50%', height: 40, textAlign: 'center', fontSize: 17}}
                                placeholder="Digite el precio tope"
                                onChangeText={(text) => this.handlerPrecioChange(text)}
                                value={this.state.precio}
                                keyboardType='numeric'
                                maxLength={7}
                            />

                        </View>

                    :this.state.tipoDeFiltro == 'Cupo' ?
                    <View>
                            
                            <TextInput
                                style={{ width: '50%', height: 40, textAlign: 'center', fontSize: 17}}
                                placeholder="Digite cupo mínimo"
                                onChangeText={(text) => this.handlerPrecioChange(text)}
                                value={this.state.precio}
                                keyboardType='numeric'
                                maxLength={4}
                                
                            />

                        </View>

                    :this.state.tipoDeFiltro == 'Dificultad' ?

                        <View>
                            <Picker
                                selectedValue={this.state.Subtipo}
                                style={{ height: 50, width: '60%' }}
                                onValueChange={(itemValue, itemIndex) => this.handlerSubtipoSelectedValue(itemValue, itemIndex)}
                                
                            >
                                {listDificulties}
                        
                    

                            </Picker>



                        </View>
                    :(
                        <View>
                            <Text >
                                Soon!
                            </Text>


                        </View>
                    )
                }

            

             </View>

         );
     };

}
export default FilterSelect;