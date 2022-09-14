import React from 'react';
import { StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Dimensions,ImageBackground,ScrollView,TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';

let DeviceWidth=Dimensions.get('window').width;
let DeviceHeight=Dimensions.get('window').height-500;

const ShowGallery=props=>{
    return(

        <View>
          <ImageBackground 
          source={props.route.params.cng}
          style={{height:DeviceHeight,width:DeviceWidth,top:200}}
          resizeMode='cover'
          />

          
           
            
        </View>
    )

}


const Gallery=(props)=>{
  
const Pics=[
    {   id:1,
        cng:require("../PicsFolder/gyb01.png")
    },
    {
    
        id:2,
        cng:require("../PicsFolder/gyb02.png")
    },
    {
        id:3,
        cng:require("../PicsFolder/gyb3.jpg")
    },
    {
        id:4,
        cng:require("../PicsFolder/gyb4.jpg")
    },
    {
        id:5,
        cng:require("../PicsFolder/gyb5.jpg")
    },
    {
        id:6,
        cng:require("../PicsFolder/gyb6.jpg")
    },
    {
        id:7,
        cng:require("../PicsFolder/gyb7.jpg")
    },
    {
        id:8,
        cng:require("../PicsFolder/gyb22.jpg")
    },
    {
        id:9,
        cng:require("../PicsFolder/gyb9.jpg")
    },
    {
        id:10,
        cng:require("../PicsFolder/gyb10.jpg")
    },
    {
        id:11,
        cng:require("../PicsFolder/gyb11.jpg")
    },
    {
        id:12,
        cng:{uri:"https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/289231740_581397696665995_7439104881488529042_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG6t4QmLczpLU4UmhLRYIsdOFaKPmFreas4Voo-YWt5q-5Ox5B1AdQNHFfRCqrrApXJ5H02OQc29Sr2O7M-gwkF&_nc_ohc=1ZDBGhgqd-4AX_f0mc2&tn=1fPleFafRRaGJmjz&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&oh=00_AT_qfaQakCm1HL37FW-pn0OMeEvzdV-dH4-rS0my8jCUlA&oe=62EEE706"}
    },
  
];

    return(

       
        <ScrollView>
        <View style={{display:"flex", flexDirection:'row',flexWrap:'wrap'}}>
          {Pics.map((image,index)=>(
          <TouchableOpacity key={index} onPress={()=>props.navigation.navigate('ShowGallery',{cng:image.cng})}>
            <Image source={image.cng} style={{height:DeviceHeight/2,width:DeviceWidth/2-4,borderRadius:10,margin:2}}/>

           

          </TouchableOpacity>))}

        </View>
      </ScrollView>
    )

    

}

export {Gallery,ShowGallery};