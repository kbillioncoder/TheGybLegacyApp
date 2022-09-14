import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import BioData from '../screens/BioData';
import Home from '../screens/Home';
import Links from '../screens/Links';
import Projects from '../screens/Projects';
import Quotes from '../screens/Quotes';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();

const Tabs=()=>{
  return(
           <Tab.Navigator 
      screenOptions={{
        headerShown:false,
          tabBarShowLabel:false,
         
          tabBarStyle:{
              display:"flex",
              position:'absolute',
              bottom:25,
              left:20,
              right:20,
              elevation:0,
              backgroundColor:'#fffaf0',
              borderRadius:15,
              height:90,
              ...styles.shadow
            
          }
         
          
         
        
        
        
        
  
        }}
        
      >
          <Tab.Screen name="home" component={Home} options={{
            headerShown:false,
            //   headerLeft:()=>(
            //       <Icon.Button name="bars" size={25} background="#009387" onPress={()=>navigation.openDrawer()}>

            //       </Icon.Button>
            //   ),
              tabBarIcon:({focused})=>(
                  <View>
                      <Icon name="home" size={30}  />
                     
                      <Text style={{color: focused ? '#e32f45' :'#748c94', fontSize:12}}>Home</Text>

                    
                  </View>
              )
          }}/>
          <Tab.Screen name="biodata" component={BioData} 
          options={{
             headerShown:false,
             tabBarIcon:({focused})=>(
                 <View>
                     
                     <Image source={require('../assets/biodata.png')}
                     resizeMode='contain'
                     style={{
                         width:30,
                         height:30,
                         //tintColor:focused ? '#e32f45' :'#748c94',
                     }}
                    
                     />
                     <Text style={{color: focused ? '#e32f45' :'#748c94', fontSize:12}}>Biodata</Text>
                     
                     

                   
                 </View>
             ),
             
          }}
          
         />

         
           <Tab.Screen name="projects" component={Projects}
           options={{
              headerShown:false,
              tabBarIcon:({focused})=>(
                  <View style={{}}>
                      <Image source={require('../assets/favpng_project-icon-business-analytics-icon-people-icon.png')}
                      resizeMode='contain'
                      style={{
                          width:30,
                          height:30,
                          //tintColor: '#fff'
                      }}
                      />
                      <Text style={{color: focused ? '#e32f45' :'#748c94', fontSize:12}}>Projects</Text>

                    
                      </View>
              ),
             
                  }}
          />
          <Tab.Screen name="links" component={Links}
          
           options={{
            
              headerShown:false,
              tabBarIcon:({focused})=>(
                  <View>
                     <Icon name="external-link" size={30} />
                      <Text style={{color: focused ? '#e32f45' :'#748c94', fontSize:12}}>Links</Text>

                    
                  </View>
              )
                  }}
          />
          <Tab.Screen name="quotes" component={Quotes}
           options={{
              headerShown:false,
              tabBarIcon:({focused})=>(
                  <View>
                      <Icon name="quote-left" size={30} />
                      <Text style={{color: focused ? '#e32f45' :'#748c94', fontSize:12}}>Quotes</Text>

                    
                  </View>
              )
                  }}
          />
           
         
      </Tab.Navigator>
   
  )
  
}
export default Tabs;

const styles=StyleSheet.create({
  shadow:{
      shadowOpacity:0.25,
      shadowRadius:3.5,
      elevation:5,
      shadowColor:'#7f5df0',
      shadowOffset:{
          width:0,
          height:10
      }
  }
})