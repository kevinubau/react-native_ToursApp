import React from 'react';
import {
  Alert,
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  Image, 
  FlatList, 
  RefreshControl, 
  TouchableHighlight, 
  ScrollView } from 'react-native';

import axios from 'react-native-axios';
import ListActivities from './src/components/ListActivities';
import ModalSelect from './src/components/ModalSelect';
import FilterSelect from './src/components/FilterSelect';
import Hamburger from './src/components/Hamburger';
import Boton from './src/components/Boton';

export default class App extends React.Component {

  constructor(){
    super();

    this.state = {
      placeName:'',
      activities: [],
      refreshing: true,
      keyFilter: '',
      valueFilter:''
     
    };
    

    /*axios.get('https://excursionesdatabase.firebaseapp.com/getAllActivitiess')
        .then(response => {
      
          var actsList = []
          const activitiesList = Object.values(response.data);
          activitiesList.map( (element, index) => {
    
            actsList.push(element);
          });
          this.setState({activities: actsList, refreshing: false});
        })
        .catch(err => {
          console.log(err, 'Error');
        });*/

        this.handlerFilter = this.handlerFilter.bind(this);
        

        
        
  };


  _onRefresh() {

    this.setState({refreshing: true});
    axios.get('https://excursionesdatabase.firebaseapp.com/getAllActivities')
        .then(response => {
          

          var actsList = []
          const a = Object.values(response.data);
          a.map( (element, index) => {
            
            actsList.push(element);
          });
          this.setState({activities: actsList, refreshing: false});
        })
        .catch(err => {
          console.log(err, 'Error');
        });

    

  };
  

  placeNameChangedHandler = val => {
    
    this.setState({
      placeName:val
    
    });

  };

  _onPressButton(item) {
    Alert.alert(
      "ID "+item.activityID+'\n'+
      "Descripción: "+item.descripcion
    );
  };

  reformatDate(date){
    var partsOfStr = date.split('-');
    console.log(partsOfStr);
    return "hola";
  };



  handlerFilter(key, value) {
   
    this.setState({refreshing: true});
    console.log("https://excursionesdatabase.firebaseapp.com/filtrarKeyValue?key="+key+"&value="+value);
    axios.get("https://excursionesdatabase.firebaseapp.com/filtrarKeyValue?key="+key.toLowerCase()+"&value="+value)
        .then(response => {
          

          var actsList = []
          console.log(response.data);
          if(response.data != null){
            const a = Object.values(response.data);
            a.map( (element, index) => {
            
              actsList.push(element);
           });
          }
          
          console.log(actsList);
          
          this.setState({activities: actsList, refreshing: false});
        })
        .catch(err => {
          console.log(err, 'Error');
        });

  }

  render() {
  
    
    return (
      

     
      <View style={styles.container}>
      

        <Text style={styles.titleText}>ACTIVIDADES</Text>
        
        

        <FilterSelect handler = {this.handlerFilter}/>
        <Boton texto={"aceptar"}/>
        <Boton texto={"cancelar"}/>

        <FlatList

          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />}/>
        {this.state.activities.length > 0 ?
        <FlatList

          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />

          }

        data={this.state.activities}

        renderItem={({item, index}) => 
        
          <TouchableHighlight key={item.activityID+'t'} onPress={()=>this._onPressButton(item)} underlayColor="white">
              <View key={item.activityID} style={styles.activtiesStyle} >

                <Text key={item.activityID+'a'} style={{fontSize: 18, fontWeight: 'bold'}} >{item.lugarDestino}</Text>
                <Text key={item.activityID+'b'} style={{fontSize: 14}} >Lugar de Salida: {item.lugarSalida}</Text>
                <Text key={item.activityID+'c'} style={{fontSize: 14}} >Precio: {item.precio}</Text>            
                <Text key={item.activityID+'d'} style={{fontSize: 14}} >Cupo: {item.cupo}</Text>
                <Text key={item.activityID+'e'} style={{fontSize: 14}} >Categoria: {item.categoria}</Text>
                <Text key={item.activityID+'f'} style={{fontSize: 14}} >Fecha: {new Date(item.fechaInicio).toLocaleDateString("es")}</Text>

                
                <Image  
                  key={item.activityID+'img'}
                                
                  style={{width: 120, height: 120}}
                  source={{ uri: item.images[0] }}
                />
              
              
            
            </View>
          </TouchableHighlight>
      
        }
    
    
      />
        :(
          <View>

            <Text style={{flex: 1, textAlign: 'center', margin: 10, fontSize: 20}}>NO HAY ACTIVIDADES</Text>
          </View>
        )
        
        
        }
        
      
      
       </View>
       
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'column',  
    backgroundColor: 'white',
    
  },

  titleText: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    width: '70%'
  },

  activtiesStyle: {
    padding: 10,
    margin: 6,
    backgroundColor: "#F8F8F8",
    borderRadius: 5,
  },

});
