import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/screens/home/Home';
import SideDrower from './src/screens/sideDrower/SideDrower';
import Activity from './src/screens/activity/Activity';
import Filtros from './src/screens/filtros/Filtros';
import Compra from './src/screens/comprar/Compra';
import ElegirTarjeta from './src/screens/comprar/ElegirTarjeta';

Navigation.registerComponent("tours-App.Home", () => Home);
Navigation.registerComponent("tours-App.SideDrower", () => SideDrower);
Navigation.registerComponent("tours-App.Activity", () => Activity);
Navigation.registerComponent("tours-App.Filtros", () => Filtros);
Navigation.registerComponent("tours-App.Compra", () => Compra);
Navigation.registerComponent("tours-App.ElegirTarjeta", () => ElegirTarjeta);

const star = () => {
  Promise.all([
    Icon.getImageSource("ios-menu", 30)

  ]).then(sources => {

    Navigation.startSingleScreenApp({
  
      screen:{
        screen: "tours-App.Home",
        title: "Actividades",
        navigatorButtons:{
          rightButtons: [
            {
              title: "Menu",
              id: "mostrarSideDrower",
              icon: sources[0]
            }
          ]
        }
    
      },
    
    
     
    
      drawer:{
        right:{
          screen:"tours-App.SideDrower"
        }
        
    
      },
    
    
    
    });


  });
};

star();




