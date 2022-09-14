import { StyleSheet, Text, View,ScrollView,Image,SafeAreaView} from 'react-native';



export const Security=({navigation})=>{
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
         <Image style={{borderRadius:100,height:60,width:60, position:"absolute",marginLeft:12,marginTop:10}}source={require("../PicsFolder/gyb2.jpg")}></Image>
         <Text style={{alignItems:"center",justifyContent:"center",marginLeft:100,marginVertical:25,fontWeight:"bold",fontSize:20,color:"blue"}}>Security</Text>
       </View>
               
            </SafeAreaView>
            <ScrollView style={{marginTop:70}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Establishment of Kogi state vigilante service</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Formation of operation total freedom</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Operation Total Freedom (OPT) was immediately set up to give support to the already existing security officials and all the resources needed to function effectively were provided for them</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Governor Bello also provided over 200 utility vehicles, 500 motorcycles for security patrol and employed the services of vigilance security outfit</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Bello’s administration also targeted youths, who are usually the most susceptible to committing crime and empowered many of them economically and through education.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Reduction in cases of armed robbery and kidnapping</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>To recognise his efforts which led to Kogi being adjudged one of the states with the lowest crime rates in the country, the Crime Reporters Association of Nigeria (CRAN), made up of journalists on the crime beat, recently made Governor Bello its patron in recognition of his efforts.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Hosting of security organisations</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Dialogue approach to herdsmen/farmers crisis</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Establishment of VGS</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Building of Forward operational base for the Army</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Repairing of roads and clearing of bushes along major roads</Text>
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
       backgroundColor:"lightseagreen",
       width:300,height:200
        
    },
    
    TextStyle:{
        padding:20,
        color:"black",
        fontWeight:"bold",
        fontSize:15
       
    }
    
    
    ,})

