import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView,SafeAreaView} from 'react-native';



const Quotes=({navigation})=>{
   
   
 return(
    <View style={{justifyContent:"center",alignItems:"center",paddingVertical:10, flexDirection:"column",marginTop:10,}}>
    <SafeAreaView style={{justifyContent:"center",alignItems:"center",marginRight:250,flexDirection:"row",marginBottom:-60}}>
         
                <View style={{width:320,height:80,backgroundColor:"white", marginLeft:670,borderRadius:30,shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5,
        shadowColor:'#7f5df0',
        shadowOffset:{
           width:0,
           height:10
       }}}>
         <Image style={{borderRadius:100,height:60,width:60, position:"absolute",marginLeft:12,marginTop:10}}source={require("../PicsFolder/gyb6.jpg")}></Image>
         <Text style={{alignItems:"center",justifyContent:"center",marginLeft:100,marginVertical:25,fontWeight:"bold",fontSize:20,color:"blue"}}>Words On Marble</Text>
       </View>  
            </SafeAreaView>
<SafeAreaView>
            <ScrollView style={{marginTop:70}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>"We didn't come this far just to chicken out."</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>"Some peopeles Knees are on the neck of Nigeria."</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>"For those who felt that because i lost out in the primaries and they want to test waters, The white Lion is back."</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>"Only Mr president can ask me to step down."</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>"As far as this state is concerned we are in charge"</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>"We are not talking about winning, we are lookin at the Margin of victory."</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>"The more you bear the burden of leadership the more you realize that people, and not things,events or places matter the most. This places on you a demand to place your people and their welfare at the heart of your leadership"</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>"I want a public health facilities where I can confidently take myself and my family to for medicals"</Text>
            </View>
            <View style={{ width:300,height:200,
       bottom:130,
       top:10}}>
                <Text style={styles.TextStyle}></Text>
            </View>
            </ScrollView>
            </SafeAreaView>
        </View>
   
       
            
 );
};

export default Quotes;
const styles=StyleSheet.create({

    container:{
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5,
        shadowColor:'#7f5df0',
        shadowOffset:{
           width:0,
           height:10
       },borderRadius:20,
       marginBottom:15,
       backgroundColor:"lightblue",
       width:300,height:300,
       bottom:130,
       top:10
        
    },
    
    TextStyle:{
        padding:20,
        color:"black",
        fontWeight:"bold",
        fontSize:24,
        justifyContent:"center",
        alignItems:"center"
        
       
    }
    
    
    ,})

