import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/Tabs';
import {Onpressaction,Hosp,Gegu,Specialist,Ganaja,Ajaokuta,Palace,Civic,AYINGBA,Custech} from './screens/Onpressaction';
//import { createDrawerNavigator } from 'react-navigation-drawer';

import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import { ShowImage } from './screens/Onpressaction';
import { ShowGallery } from './screens/Gallery';
import QuizSingleChoiceApp from './Trivia/QuizSingleChoiceApp';
import { Achievements } from './screens/Achievements';
import { Security } from './screens/Security';
import { Innovation } from './screens/Innovation';
import { Reforms } from './screens/Reforms';
//import Splash from './screens/Splash';
import { Health } from './screens/Health';
import { Agriculture } from './screens/Agriculture';
import { Awards } from './screens/Awards';
import { About } from './screens/About';
import { Education } from './screens/Education';



const Stack = createNativeStackNavigator();
//const Homestack=createNativeStackNavigator();


export default function App()
{
  return(
    <NavigationContainer> 
     <Stack.Navigator screenOptions={{headerShown:false}} >
    
     {/* <Stack.Screen name="Splash" component={Splash}/>   */}
     <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
     

     <Stack.Screen name="home" component={Home}/> 

        <Stack.Screen name="Onpressaction" component={Onpressaction}/>
        {/* <Stack.Screen name="Slide" component={Slide}/>    */}
          <Stack.Screen name="hosp" component={Hosp} options={{headerShown:"false"}}/>  
          <Stack.Screen name="ShowImage" component={ShowImage}/> 
         
          <Stack.Screen name="Hosp" component={Hosp}/>
          <Stack.Screen name="Ganaja" component={Ganaja} options={{headerShown:"false"}}/> 
         <Stack.Screen name="ShowGallery" component={ShowGallery}/>
         <Stack.Screen name="Home" component={Home}/> 
         <Stack.Screen name="QuizSingleChoiceApp" component={QuizSingleChoiceApp}/> 
         <Stack.Screen name="Achievements" component={Achievements}  options={{headerShown:"false"}}/> 
         <Stack.Screen name="Security" component={Security}  options={{headerShown:"false"}}/> 
         <Stack.Screen name="Awards" component={Awards}  options={{headerShown:"false"}}/> 
         <Stack.Screen name="Agriculture" component={Agriculture}  options={{headerShown:"false"}}/> 
         <Stack.Screen name="Health" component={Health}  options={{headerShown:"false"}}/> 
         <Stack.Screen name="Innovation" component={Innovation}  options={{headerShown:"false"}}/> 
         <Stack.Screen name="Reforms" component={Reforms}  options={{headerShown:"false"}}/> 
         <Stack.Screen name="About" component={About}  options={{headerShown:"false"}}/> 
         <Stack.Screen name="Education" component={Education} options={{headerShown:"false"}}/>
 
         <Stack.Screen name="Civic" component={Civic}/> 
         <Stack.Screen name="Gegu" component={Gegu}/> 
         <Stack.Screen name="Ajaokuta" component={Ajaokuta}/> 
         <Stack.Screen name="Specialist" component={Specialist}/> 
         <Stack.Screen name="Palace" component={Palace}/> 
         <Stack.Screen name="AYINGBA" component={AYINGBA}/> 
         <Stack.Screen name="Custech" component={Custech}/> 
     </Stack.Navigator>    
      {/* <Tabs/>   */}
    </NavigationContainer>


    
  )
 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
