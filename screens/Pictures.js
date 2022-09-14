import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList,SafeAreaView ,ScrollView,TouchableHighlight,BackgroundImage} from 'react-native';
//import { ImageBackground } from 'react-native-web';
//import Draw from '../navigation/Draw';
//import _onPress from './_onPress';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onpressaction } from './Onpressaction';
import { Hosp } from './Onpressaction';
import { Divider } from 'react-native-paper';

//import Img from '../ImageFolder/Img';


//import { SafeAreaView } from 'react-native-safe-area-context';


  
  

const Pictures=({navigation})=>{

  const Navcon = item => {
   

    if (item.id == 3) {
      navigation.navigate('Onpressaction',{data:item});
    } else if(item.id==2){
      navigation.navigate('Hosp',{data:item});
    }
    else if(item.id==4){
    navigation.navigate('Ganaja',{data:item});
  }
  else if(item.id==5){
    navigation.navigate('Civic',{data:item})
  }
  else if(item.id==6){
    navigation.navigate('Gegu',{data:item})
  }
  else if(item.id==7){
    navigation.navigate('Palace',{data:item})
  }
  else if(item.id==8){
    navigation.navigate('AYINGBA',{data:item})
  }
  else if(item.id==9){
    navigation.navigate('Specialist',{data:item})
  }
  else if(item.id==10){
    navigation.navigate('Ajaokuta',{data:item})
  }
  else if(item.id==1){
    navigation.navigate('Custech',{data:item})
  }
}
  
  ;
   
   
   const ProjList=[
    {
        id:1,
        description:"CUSTECH",
        title:"Osara",
        img:require("../ImageFolder/custech.png")
    },
    {
        id:2,
        description:"Reference Hospital Okene",
        title:"Okene",
        img:require("../ImageFolder/refer.png")

    },
    {
        id:3,
        description:"Model Government Science School",
        title:"Adankolo, Lokoja",
        img:require("../ImageFolder/gov2.png")
    },
    {
        id:4,
        description:"Ganaja Flyover",
        title:"Ganaja Junction, Lokoja",
        img:require("../ImageFolder/ganaja.png")
    },
    
  {
    id:5,
    description:"Muhammadu Buhari Civic Center",
    title:"Beside Amusement park, Lokoja",
    img:require("../ImageFolder/Civic.png")
},
{
  id:6,
  description:"Ultra Modern General Hospital",
  title:"Gegu, Kogi LGA",
  img:require("../ImageFolder/Gegu.png")
},
{
  id:7,
  description:"Ohinoyi of Ebira Royal Palace",
  title:"Okene LGA",
  img:require("../ImageFolder/Palace.png")
},
{
  id:8,
  description:"PAAU Teaching Hospital",
  title:"Ayingba, Dekina LGA",
  img:require("../Projpix/ksu1.jpg")
},
{
  id:9,
  description:"Reinovation of Specialist Hospital and Construction of Admin Block",
  title:"Opposite Treasures, Lokoja",
  img:require("../ImageFolder/specialist.png")
},
{
  id:10,
  description:"Ajaokuta Ultra Modern General Hospital",
  title:"Eganyi, Ajaokuta",
  img:require("../ImageFolder/Ajaokuta.png")
},
   ];
   
    // const[Proj, setProj]=React.useState(ProjList)

    // function renderProjects(){
    // const renderItem=({item})=>{
        
    //     <TouchableOpacity
    //     style={{marginVertical:10,width:60,height:60}} onPress={()=>{console.log(item.description)}}>
    //           <View style={{Height:80,borderBottomLeftRadius:20,borderBottomRightRadius:20,backgroundColor:'blue'}}>
    //               <Image
    //             source={item.img} resizeMode="cover" style={{width:260, height:300, borderWidth:2,
    //                 borderColor:'#d35647',
    //                 resizeMode:'contain',
    //                 margin:8}}/>  
                
               
    //          </View>  
    //          <View style={{padding:10,backgroundColor:'black',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
    //                 <Text>
    //                     {item.description}
    //                  </Text>
    //              </View>


    //     </TouchableOpacity>
    //  }
    return(
       <View style={{backgroundColor:"mintcream"}}>
        
        {/* <Image source={require('../assets/backg.png')} style={{position:"absolute", height:1000}}/> */}
        <FlatList
        ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({ highlighted }) => (
              <View
                style={[
                  style.separator,
                  highlighted && { marginLeft: 0 }
                ]}
              />
            ))
          }
       contentContainerStyle={{paddingHorizontal:40, paddingVertical:70}}
       data={ProjList}
       keyExtractor={item=>item.id}
       renderItem={({ item , index, separators}) => (
       
        <TouchableOpacity
         key={item.key}
        
          onPress={()=>{Navcon(item)}} //this._onPress(item.id)
          
          //onShowUnderlay={separators.highlight}
        // onHideUnderlay={separators.unhighlight} 
         style={{paddingVertical:5}}
         >
        
           
            <SafeAreaView  style={{flex:1,marginVertical:10,paddingTop:5,position:"relative"}}>
              
            
            <View style={{padding:2,paddingBottom:30}}>  
            
                 <View style= {{height:210,width:320,borderRadius:10,shadowOpacity:0.25,
         shadowRadius:3.5,
         elevation:5,
         shadowColor:'#7f5df0',
         shadowOffset:{
            width:0,
            height:10
        }}}>
                 <Image source={item.img} styel resizeMode='cover' style={{width:"100%",height:"100%", borderRadius:10, padding:60,borderColor:"#ff00ff"}}/>
                 </View>
                 
                <View style={{ justifyContent:"space-evenly",backgroundColor:"darkblue",width:320,height:50,borderRadius:10,marginTop:10, shadowRadius:3.5,
         elevation:5,
         shadowColor:'#7f5df0',
         shadowOffset:{
            width:0,
            height:10
        }}}>
                <Text style={{fontWeight:"bold",color:"white",paddingLeft:10,fontStyle:"italic"}} >{item.description}</Text>     
          <Text  style={{fontWeight:"bold",color:"white",paddingLeft:10,fontStyle:"italic"}}>Location: {item.title}</Text>
       
                </View>
                
                </View>
           
           
               
                <Divider bold style={{color:"red"}}/>
            
            </SafeAreaView>
         
            
           
          
        </TouchableOpacity>
      )}
       showsVerticalScrollIndicator={true}
       Vertical={true}

       

       />
       </View>
        
           
       

     

    )
   
   
    }

export default Pictures ;

