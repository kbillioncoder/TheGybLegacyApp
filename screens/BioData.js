import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { StyleSheet, Text, View } from 'react-native';
const Tab = createMaterialTopTabNavigator();
import Biography from './Biography';
import { Gallery } from './Gallery';

const BioData=()=> {
  return (
    <Tab.Navigator  screenOptions={{
      tabBarLabelStyle: { fontSize: 15 },
      tabBarItemStyle: { height:70 },
      tabBarStyle: { backgroundColor: 'powderblue' },
    }} >

      <Tab.Screen name="biography" component={Biography}/>
      <Tab.Screen name="gallery" component={Gallery}/>
    </Tab.Navigator>
  );
}
export default BioData;

const styles=StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'Blue'
    },
});
