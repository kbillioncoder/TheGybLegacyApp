import { StyleSheet, Text, View,ScrollView,Image,SafeAreaView} from 'react-native';



export const Awards=({navigation})=>{
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
         <Text style={{alignItems:"center",justifyContent:"center",marginLeft:100,marginVertical:25,fontWeight:"bold",fontSize:20,color:"blue"}}>Awards</Text>
       </View>
               
            </SafeAreaView>
            <ScrollView style={{marginTop:70}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'}Icon on Security award  by the Association of Nigerians in Diaspora{"\n"}{"\n"}</Text>
             
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>
                {'\u2B24'} SUN Newspapers Governor of the Year Award{"\n"}{"\n"}
               </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Award for the enterprising leadership by NUJ lagos state chapter{"\n"}{"\n"}
             
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'}Award of the Torchbearer of security by NUJ FCT Chapter{"\n"}{"\n"}
             .</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'}Governor of the Year by Kwararafa Reporters{"\n"}{"\n"}
</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Most youth Friendly Governor of the year by New Telegraph{"\n"}{"\n"}
               </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Best governor on Security and Peace by the Business Day{"\n"}{"\n"}
             </Text>
            </View>
           
            
            </ScrollView>
        </View>
        )
   
        
        
}
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
       width:300,height:250
        
    },
    
    TextStyle:{
        padding:20,
        color:"black",
        fontWeight:"bold",
        fontSize:17
       
    }
    
    
    ,})

