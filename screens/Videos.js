import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,Text,Image,TouchableOpacity,FlatList,SafeAreaView ,ScrollView,TouchableHighlight,BackgroundImage} from 'react-native';
//import { ImageBackground } from 'react-native-web';
//import Draw from '../navigation/Draw';
//import _onPress from './_onPress';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import onpressaction from './Onpressaction';
import { Hosp } from './Onpressaction';
import {Video,Audio} from 'expo-av';
import { Divider } from 'react-native-paper';
//import Video from 'expo';
//import Video from 'react-native-video';
//import { WebView } from 'react-native-webview';




//import Img from '../ImageFolder/Img';


//import { SafeAreaView } from 'react-native-safe-area-context';

const Videos =({ navigation })=> {
    //const [postData,setpostData]=useState(route.params.data)
    //   NavVid = item => {
    //     if (item.id == 3) {
    //       navigation.navigate('Onpressaction',{data:item});
    //     } else if(item.id==2){
    //       navigation.navigate('Hosp',{data:item});
    //     }
    //     else if(item==4){
    //     navigation.navigate('Ganaja',{data:item});
    //   }
    //   else if(item==5){
    //     navigation.navigate('Civic',{data:item})
    //   }
    //   else if(item==6){
    //     navigation.navigate('Gegu',{data:item})
    //   }
    //   else if(item==7){
    //     navigation.navigate('Palace',{data:item})
    //   }
    //   else if(item==8){
    //     navigation.navigate('Ayingba',{data:item})
    //   }
    //   else if(item==9){
    //     navigation.navigate('Specialist',{data:item})
    //   }
    //   else if(item==10){
    //     navigation.navigate('Ajaokuta',{data:item})
    //   }
    // }
    //   ;
    const VidList = [
        {
            id: 1,
            description: "Yahaya bello Interview",
            title: "Interview",
            vid: { uri: "https://www.kogipedia.net/wp-content/uploads/2022/02/VID-20220216-WA0013.mp4" }
        },
        {
            id: 2,
            description: "Invest in Kogi state",
            title: "Invest in Kogi ",
            vid:{uri:"https://www.kogipedia.net/wp-content/uploads/2021/08/invest.mp4"}
            //vid:{uri:"https://fb.watch/eL7w4Rng3z/"}
        },
      
        {
            id: 3,
            description: "Support for Bello",
            title: "Kano State support for Bello",
            vid:{uri:"https://www.kogipedia.net/wp-content/uploads/2022/02/VID-20220213-WA0019.mp4"}
            //vid:{uri:"https://fb.watch/eL7w4Rng3z/"}
        },
        {
            id: 4,
            description: "Health Sector",
            title: "Giant strides in Health Sector",
            vid:{uri:"https://www.kogipedia.net/wp-content/uploads/2021/11/VID-20211126-WA0031.mp4"}
            //vid:{uri:"https://fb.watch/eL7w4Rng3z/"}
        },
        {
            id: 5,
            description:"Road Construction",
            title: "Ozuri road and other Constructions in kogi state",
            vid:{uri:"https://www.kogipedia.net/wp-content/uploads/2021/07/Ozuri-road.mp4"}
            //vid:{uri:"https://fb.watch/eL7w4Rng3z/"}
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
    return (
        <View>
            {/* <Image source={require('../assets/backg.png')} style={{position:"absolute", height:1000}}/> */}
            <FlatList
                ItemSeparatorComponent={Platform.OS !== 'android' &&
                    (({ highlighted }) => (
                        <View
                            style={[
                                style.separator,
                                highlighted && { marginLeft: 0 }
                            ]} />
                    ))}
                contentContainerStyle={{ paddingHorizontal: 40, paddingVertical: 70 }}
                data={VidList}
                keyExtractor={item => item.id}
                renderItem={({ item, index, separators }) => (



                    <SafeAreaView style={{ flex: 1, marginVertical: 5, paddingTop: 5, position: "relative" }}>

                        <View style={{ padding: 10, paddingBottom: 10 ,justifyContent:"center",alignItems:"center"}}>
                           
                                  

                              
                            <View style={{justifyContent:"center",backgroundColor:"skyblue",width:320,height:200,borderRadius:10,marginTop:5, shadowRadius:3.5,
         elevation:5,
         shadowColor:'#7f5df0',
         shadowOffset:{
            width:0,
            height:10
        }}}>
                            <Video source={item.vid} style={{height:200,width:320,borderRadius:10, justifyContent:"space-evenly",}} useNativeControls
        resizeMode="contain"
        isLooping
       /> 
                            
                             </View>
                           

                            <View style={{ justifyContent: "center", backgroundColor: "blue" ,borderRadius:10,width:320,marginTop:5,}}>
                                <Text style={{ fontWeight: "bold",paddingLeft:10,color:"white",fontStyle:"italic" }}>{item.description}</Text>
                                <Text style={{ fontWeight: "bold" ,paddingLeft:10,color:"white",fontStyle:"italic"  }}>{item.title}</Text>
                            </View>

                        </View>

                        <Divider bold style={{color:"red",marginTop:25}}/>

                    </SafeAreaView>
                )}
                showsVerticalScrollIndicator={true}
                Vertical={true} />
        </View>






    );


}

export default Videos ;

