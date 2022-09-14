import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { StyleSheet, Text, View } from 'react-native';
const Tab = createMaterialTopTabNavigator();
import Pictures from './Pictures';
import Videos from './Videos';

const Projects=()=> {
  return (
    <Tab.Navigator  screenOptions={{
      tabBarLabelStyle: { fontSize:15 },
      tabBarItemStyle: { height:70 },
      tabBarStyle: { backgroundColor: 'powderblue' },
    }} >

      <Tab.Screen name="pictures" component={Pictures}  />
      <Tab.Screen name="videos" component={Videos} />
    </Tab.Navigator>
  );
}
export default Projects;

const styles=StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'Blue'
    },
});