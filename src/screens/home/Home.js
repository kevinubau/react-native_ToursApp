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
import ListActivities from '../../components/ListActivities';
import ModalSelect from '../../components/ModalSelect';
import FilterSelect from '../../components/FilterSelect';
import Boton from '../../components/Boton';
import StartActivity from '../activity/StartActivity';
import Icon from 'react-native-vector-icons/MaterialIcons';




export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    

    this.state = {
      placeName:'',
      activities: [],
      refreshing: true,
      keyFilter: '',
      valueFilter:'',
      
     
    };

    
    

    axios.get('https://excursionesdatabase.firebaseapp.com/getAllActivities')
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
        });

        this.handlerFilter = this.handlerFilter.bind(this);
        

        
        
  };

  onNavigatorEvent = event =>{
      if(event.type === "NavBarButtonPress"){
          if(event.id === "mostrarSideDrower"){
              this.props.navigator.toggleDrawer({
                  side: "right" ,
                  
              
              });
          }
          
      }
  }


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
    /*Alert.alert(
      "ID "+item.activityID+'\n'+
      "Descripción: "+item.descripcion
    );*/
    //StartActivity();
    
    this.props.navigator.push({
      screen: "tours-App.Activity",
      title: item.lugarDestino,
      passProps: item

  

    });

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
      

     
      <View style={styles.containerList}>
      

        
        
        

        {/*<FilterSelect handler = {this.handlerFilter}/>
        <Boton texto={"aceptar"}/>
        <Boton texto={"cancelar"}/>*/}

        <FlatList

          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        />

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
              
              
              <View style={styles.activtiesStyle}>
              
                  <Text style={{fontSize: 18, fontWeight: 'bold'}} >{item.lugarDestino}</Text>
              
                <View style={styles.container}>


                  <View >

                    

                    {item.imagenes ?
                    (
                      <Image          
                      style={{width: 120, height: 120}}
                      source={{ uri: item.imagenes[0] }}
                    />

                    ):(
                      <Image          
                      style={{width: 120, height: 120}}
                      source={{ uri: "https://camo.githubusercontent.com/f8ea5eab7494f955e90f60abc1d13f2ce2c2e540/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323037383234352f3235393331332f35653833313336322d386362612d313165322d383435332d6536626439353663383961342e706e67" }}
                    />

                    )}
                    <Text style={{fontSize: 18}} >Cupo: {item.cupo}</Text>


                  
                  </View>



                  <View style={styles.containerInfo}>
                    <View style={{flexDirection:"row"}}>
                        <Icon name="place" size={20}/>
                        <Text style={{fontSize: 16}} >Salida: {item.lugarSalida}</Text>
                    </View>

                    <View style={{flexDirection:"row"}}>
                        <Icon name="date-range" size={20}/>
                        <Text style={{fontSize: 18}} >Fecha: {new Date(item.fechaInicio).toLocaleDateString("es")}</Text>
                    </View>

                    <View style={{flexDirection:"row"}}>
                        <Icon name="attach-money" size={20}/>
                        <Text style={{fontSize: 18}} >Precio: ‎₡{item.precio}</Text>               
                    </View>
                    
                  </View>

                </View>

             
              
              
              {/*<View key={item.activityID} style={styles.activtiesStyle} >

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
                />*/}
              
              
            
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
  containerImagen:{
    margin:10

  },
  containerInfo:{
    margin: 10,
    


  },

  container: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',  
    
    
    
  },

  containerList: {
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


