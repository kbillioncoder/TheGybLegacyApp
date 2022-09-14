import { StyleSheet, Text, View,ScrollView,Image,SafeAreaView} from 'react-native';



export const Reforms=({navigation})=>{
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
         <Image style={{borderRadius:100,height:60,width:60,position:"absolute",marginLeft:12,marginTop:10}}source={require("../PicsFolder/gyb4.jpg")}></Image>
         <Text style={{alignItems:"center",justifyContent:"center",marginLeft:100,marginVertical:25,fontWeight:"bold",fontSize:20,color:"blue"}}>Financial Reforms</Text>
       </View>
               
            </SafeAreaView>
            <ScrollView style={{marginTop:70}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Under the stewardship of the Honoroble comissioner of Finance Idris Ashiru,  Kogi State came first in the World Bank States Fiscal Transparency,Accountability and Sustainability Programme SFTAS </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Under the styate Fiscal Transparency and accountability programme.Kogi state scored 100 percent for all indicators.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>IGR increases to highest level ever under GYB administration</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Annual publication of financial statements.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Strengthened publc debt management and fiscal responsibility framework
Improved clearance/reduction of stock of domestic expenditure arrears
Improved debt sustainability</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>World bank commends the New Direction Administration for refunding 4.63 million surplises under the Nigerian Erosion and Watershed Management Project (NEWMAP)</Text>
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
       backgroundColor:"#dcdcdc",
       width:300,height:200
        
    },
    
    TextStyle:{
        padding:20,
        color:"purple",
        fontWeight:"bold",
        fontSize:15
       
    }
    
    
    ,})

