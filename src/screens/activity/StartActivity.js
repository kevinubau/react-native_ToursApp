import {Navigation} from 'react-native-navigation';

const startActivity =  () => {

    Navigation.startSingleScreenApp({

        screen:{
          screen: "tours-App.Activity",
          title: "Actividad",

          
      
        },
      
      
      });

};

export default startActivity;