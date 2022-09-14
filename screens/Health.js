import { StyleSheet, Text, View,ScrollView,Image,SafeAreaView} from 'react-native';



export const Health=({navigation})=>{
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
         <Text style={{alignItems:"center",justifyContent:"center",marginLeft:100,marginVertical:25,fontWeight:"bold",fontSize:20,color:"blue"}}>Health</Text>
       </View>
               
            </SafeAreaView>
            <ScrollView style={{marginTop:70}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'}
876 surgeries and over 50000 other medical cases were sponsored under the Bello Health Initiative, some of which were treated abroad through the indigent funds set up under this initiative
{"\n"}{"\n"}
               
                {'\u2B24'}About 332 primary health care centers across the wards in kogi state were fully renovated and remodelled for proper health care service delivery</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>
                {'\u2B24'} Prince Abubakar Audu University Teaching Hospital.{"\n"}{"\n"}
                {'\u2B24'} Reconstruction and Renovation of Specialist Hospital Lokoja.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} GYB administration constructed and furnished the nutrition house for acceleration Nutrition Results in Nigeria (ANRIN) to quiken the delivery of nutrition services to the malnourished children in the state{"\n"}{"\n"}
               </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'}The new Direction Administration in collaboration with SDG purchased 12 state of the art vehicles(ambulances) and were distributed to the benefiting LGA health centers across the state{"\n"}{"\n"}
                {'\u2B24'} Kogi State Reference Hospital Okene.{"\n"}{"\n"}
                {'\u2B24'} Modern General Hospital Project in Gegu Beki.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Modern General Hospital Project in Eganyi.{"\n"}{"\n"}
                {'\u2B24'} Modern General Hospital Project in Isanlu.{"\n"}{"\n"}
                {'\u2B24'} 5 public hospitals across the three senatorial districts were equipped with state of the art medical equipment,essential drugs and premium quality diagnostic apparatus of international standard</Text>
            </View>
            <View style={styles.container}>
            <Text style={styles.TextStyle}> {'\u2B24'}Through the governor Yahaya Bello health care plus Kogi state recorded the lowest infant mortality rates in Nigeria according to November 2019 study by the NPC and federal Ministry of Health.
{"\n"}{"\n"}</Text>
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

