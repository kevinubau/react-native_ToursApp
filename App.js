import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,Image, FlatList  } from 'react-native';
import axios from 'react-native-axios';
export default class App extends React.Component {

  constructor(){
    super();

    this.state = {
      placeName:'',
      activities: []
    };
    /*this.state = {
      placeName:'',
      activities: [
        {"lugarDestino": "Visita Rio Celeste","precio": 2000, "cupo":5,"img":"https://media-cdn.tripadvisor.com/media/photo-s/0e/cd/3e/65/rio-celeste-waterfall.jpg"},
  
        {"lugarDestino": "Camping en Parque nacional","precio": 3000, "cupo":15,"img":"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png"}, 
        {"lugarDestino": "Paseo a Playa Nosara","precio": 1000, "cupo":2,"img":"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png"},
        {"lugarDestino": "Caminata Volcán Arenal","precio": 2000, "cupo":5,"img":"https://www.nacion.com/resizer/YYI9EWU1LCtHXs2J1p02Gz-BV1E=/600x0/center/middle/filters:quality(100)/arc-anglerfish-arc2-prod-gruponacion.s3.amazonaws.com/public/ZXBYNEECDJGH5PH4RFHFG5Q6G4.jpg"},
        {"lugarDestino": "Camping en Parque nacional","precio": 3000, "cupo":15,"img":"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png"}, 
        {"lugarDestino": "Paseo a Playa Nosara","precio": 1000, "cupo":2,"img":"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png"},
        {"lugarDestino": "Caminata Volcán Arenal","precio": 2000, "cupo":5,"img":"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png"},
        {"lugarDestino": "Camping en Parque nacional","precio": 3000, "cupo":15,"img":"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png"}, 
        {"lugarDestino": "Paseo a Playa Nosara","precio": 1000, "cupo":2,"img":"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png"}
      ]
  
    };*/

    axios.get('https://excursionesdatabase.firebaseapp.com/getAllActivities')
        .then(response => {
          //console.log(response, 'Proceso exitoso!');
    
          //console.log(response);
          var actsList = []
          const a = Object.values(response.data);
          a.map( (element, index) => {
            alert(element.images[0][0]);
            actsList.push(element);
          });
          this.setState({activities: actsList});
        })
        .catch(err => {
          console.log(err, 'Error');
        });
        
        
  }
  

  placeNameChangedHandler = val => {
    
    this.setState({
      placeName:val
    
    });

  };

  onPressButton = (e) => {
    alert("usted escribio: "+this.state.placeName);
  };

  render() {
    
    const activities = this.state.activities.map( (act, index) =>(
        <View>
          <Text >{act.nombre}</Text>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: act.img}}
          />
          
        </View>
    ));
    
    return (
      
      <View style={styles.container}>

      <Text style={styles.titleText}>ACTIVIDADES</Text>

       
      <FlatList
        data={this.state.activities}
        renderItem={({item}) => 
          
          <View style={styles.activtiesStyle}>
            <Text style={{fontSize: 16, fontWeight: 'bold',}} >{item.lugarDestino}</Text>
            <Image
              style={{width: 100, height: 100}}
              source={{uri: item.images[0] }}
            />
          
        </View>
      }
      />
      
      
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    flexDirection: 'column',  
    backgroundColor: 'white',
    
  },

  titleText: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },

  activtiesStyle: {
    padding: 10,
    margin: 6,
    backgroundColor: "#F8F8F8",
    borderRadius: 5,
  },

});
