import { StyleSheet, Text, View,ScrollView,Image,SafeAreaView} from 'react-native';



export const Innovation=({navigation})=>{
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
         <Image style={{borderRadius:100,height:60,width:60, position:"absolute",marginLeft:12,marginTop:10}}source={require("../assets/yahaya.png")}></Image>
         <Text style={{alignItems:"center",justifyContent:"center",marginLeft:100,marginVertical:25,fontWeight:"bold",fontSize:20,color:"blue"}}>Innovation</Text>
       </View>
               
            </SafeAreaView>
            <ScrollView style={{marginTop:70}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Governor bello initiated the EBIGO policy to unite all the ethnic groups in Kogi state</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>GYB displayed his love for technology by adopting the Covid 19 App to help in the fight against the dreaded disease</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Refusal to compromise his stance on covid 19 and refusal to engage in the sensationalism and propaganda surrounding covid 19 </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Yahya Bello christened the New Direction Agenda, Capturing the young,women and the disabled for the first time </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>GYB displayed his no nonsense approach to security when he directed all local government administrators to take charge as the chief security officers of their domain</Text>
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
       backgroundColor:"#f0fff0",
       width:300,height:200
        
    },
    
    TextStyle:{
        padding:20,
        color:"purple",
        fontWeight:"bold",
        fontSize:15
       
    }
    
    
    ,})

