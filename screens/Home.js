import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity ,SafeAreaView,FlatList} from 'react-native';
import { color } from 'react-native-reanimated';
import Achievements from './Achievements';
//import Awards from './Awards';
import Icon from 'react-native-vector-icons/FontAwesome';



const Home=({navigation})=>{
    
    
    const Contains=(item)=>{
        if(item.id==1){
            navigation.navigate('Achievements',{data:item})
        }
        else if(item.id==2){
            navigation.navigate('Innovation',{data:item})
        }
        else if(item.id==3){
            navigation.navigate('Reforms',{data:item})
        }
        else if(item.id==4){
            navigation.navigate('Security',{data:item})
        }
        else if(item.id==5){
            navigation.navigate('Agriculture',{data:item})
        }
        else if(item.id==6){
            navigation.navigate('Health',{data:item})
        }
        else if(item.id==7){
            navigation.navigate('Awards',{data:item})
        }
        else if(item.id==8){
            navigation.navigate('Education',{data:item})
        }
        else if(item.id==9){
            navigation.navigate('About',{data:item})
        }
      


    }
   
    
        
            
    
    const ViewList=[
        {
            id:1,
            Text:"  Achievements",
            name:"star-o",
            col: {color:"orange"}
        },
        {
            id:2,
            Text:"  Innovation",
            name:"lightbulb-o",
            col:{color:"purple"}
        },
        {
            id:3,
            Text:"  Financial Reforms",
            name:"money",
            col:{color:"indigo"}
        },
        {
            id:4,
           Text:"  Secuity" ,
           name:"bomb",
            col:{color:"black"}

        },
        {
            id:5,
           Text:"  Agriculture" ,
           name:"leaf",
            col:{color:"green"}

        },
        {
            id:6,
           Text:"  Health" ,
           name:"medkit",
            col:{color:"red"}

        },
        {
            id:7,
           Text:"  Awards" ,
           name:"trophy",
            col:{color:"gold"}

        },
        {
            id:8,
           Text:" Education" ,
           name:"graduation-cap",
            col:{color:"blue"}

        },
        {
            id:9,
           Text:"  About" ,
           name:"info-circle",
            //col:{color:"gold"}

        },

          
       
           
      
    ];

    return(

        



        <View style={{}}>
            <View style={{justifyContent:"center",alignItems:"center",}}>
                <View style={{width:400,height:400,borderRadius:2000,backgroundColor:"#191970",marginRight:20,bottom:250,marginLeft:20,
        
        }}>
            
            
          
                
                <Text style={{fontSize:30,top:650,paddingLeft:120,fontWeight:"bold",color:"#daa520"}}>GYB LEGACY</Text>
                </View>
            </View>
            
               
            

        
    



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
       data={ViewList}
       keyExtractor={item=>item.id}
       renderItem={({ item, index, separators}) => (
       
        <TouchableOpacity
         key={item.key}
        
          onPress={()=>{Contains(item)}} //this._onPress(item.id)
          
          //onShowUnderlay={separators.highlight}
        // onHideUnderlay={separators.unhighlight} 
         style={{backgroundColor:"#fdf5e6",bottom:-8,marginLeft:20,height:60,width:200,alignItems:"center",padding:8,borderRadius:10,justifyContent:"center",
         shadowOpacity:0.25,
         shadowRadius:3.5,
         elevation:5,
         shadowColor:'#7f5df0',
         shadowOffset:{
            width:0,
            height:10
        }
       
        
            }}
         >
            
         
          <View style={{width:200,height:200,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
            <Icon name={item.name} size={30} style={item.col}/>
          <Text style={{fontSize:15,fontWeight:"bold"}} >{item.Text}</Text> 
          </View>
                    
         
        
             

            
            
            
           
          
        </TouchableOpacity>
        
      )}
       showsHorizontalScrollIndicator={false}
       horizontal={true}

       

       />
       
        <View  style={{justifyContent:"center",alignItems:"center",bottom:50}}>
        <TouchableOpacity style={{backgroundColor:"#191970", height:60,width:200,borderRadius:10,alignItems:"center",bottom:-30,justifyContent:"center"}} onPress={()=>{navigation.navigate('QuizSingleChoiceApp')}}>
            <Text style={{fontWeight:"bold", fontSize:20,color:"white"}}> TRIVIA</Text>
        </TouchableOpacity>
        </View>
       
        <View style={{borderRadius:100,marginLeft:100,width:200,height:200,alignItems:"center",justifyContent:"center",bottom:480,shadowOpacity:0.55,
         shadowRadius:25,
         elevation:15,
         shadowColor:'#000',
         shadowOffset:{
            width:0,
            height:11
        }}}>
            <Image source={require('../PicsFolder/gyb6.jpg')} style={{borderRadius:100,width:200,height:200}}/>
        </View>
       </View>
        
        
    );
};

export default Home;
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

