import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView,SafeAreaView} from 'react-native';

export const About=({navigation})=>{
return(
<View>

    <Text ellipsizeMode='tail' numberOfLines={70}  style={{top:10,padding:15,fontFamily:"monospace",fontSize:16,justifyContent:"center",alignItems:"center"}}>
        
    
    GYB legacy app is a cross platform mobile application and a compendium of the legacies of his excellency Yahaya Bello, 
    this mobile application compiles the list of his projects,achievements and reforms and seeks to project them to digitally savvy Nigerians and Kogites alike. 
    {"\n"}{"\n"}
    This application will serve as a timeless reference point for the achievements of Yahaya Bello. Gyb legacy app is a warehouse of sort for all GYB projects and achievement. 
    This will be a permanent digital record of the achievements of Yahaya Bello administration and future endeavors.
    ------------------------------------------------------------------------
    {"\n"}{"\n"}
    {"\n"}{"\n"}
    {"\n"}{"\n"}
    {"\n"}{"\n"}
   
    Developed by Kabir Garba{"\n"}{"\n"}
    CEO/CTO Jandi Global{"\n"}{"\n"}
    email: kgarba1988@gmail.com{"\n"}{"\n"}
    Whatsapp number: 09125120876
    </Text>
</View>

)


}