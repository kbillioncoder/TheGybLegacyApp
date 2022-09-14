import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity,FlatList,SafeAreaView} from 'react-native';
//import { WebLinks } from './WebNav';
import { Linking } from 'react-native';
//import { TouchableHighlight } from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-paper';


const Links=({navigation})=>{
   
    const WebLinks=[
        {
            id:1,
            uri:"https://kogistate.gov.ng",
            name:"Kogi State Government Official Website"

        },
        {
            id:2,
            uri:"https://www.kogipedia.net/",
            name:"Kogipedia"
        },
        {
            id:3,
            uri:"https://en.wikipedia.org/wiki/Rashida_Bello",
            name:"Rashida Bello Wikepedia"
        },
        {
            id:4,
            uri:"https://irs.kg.gov.ng",
            name:"Kogi State Internal Revenue Service"
        },
       
        {
            id:5,
            uri:"https://web.facebook.com/OfficialGYBKogi",
            name:"Yahaya Bello Official Facebook Page"
        },
        {
            id:6,
            uri:"https://en.wikipedia.org/wiki/Yahaya_Bello",
            name:"Yahaya Bello Wikipedia"
        },
        
        
    
    ]
   
 return(
    <ScrollView style={{}}>
            <View style={{height:1000}}>
              {WebLinks.map((image,index)=>(
              
          <TouchableOpacity onPress={() => Linking.openURL(image.uri)} style={{marginLeft:15,width:350,height:80,backgroundColor:"seashell",top:50,marginBottom:20,borderRadius:10,flexDirection:"row",
          shadowRadius:3.5,
        elevation:5,
        shadowColor:'#7f5df0',
        shadowOffset:{
           width:0,
           height:10
       }
          }}>
            <Text style={{color: 'lightseagreen',marginVertical:15,marginTop:30,fontSize:16,fontWeight:"bold",marginLeft:10}} >
                {image.name}
            </Text>
            <Icon name="external-link" size={30} style={{marginTop:30,marginLeft:15,color:"indigo"}}/>
            </TouchableOpacity>  
             ))}
 
            </View>
           
    </ScrollView>
       
       
 );
};

export default Links;