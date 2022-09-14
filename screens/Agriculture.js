import { StyleSheet, Text, View,ScrollView,Image,SafeAreaView} from 'react-native';



export const Agriculture=({navigation})=>{
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
         <Text style={{alignItems:"center",justifyContent:"center",marginLeft:100,marginVertical:25,fontWeight:"bold",fontSize:20,color:"blue"}}>Agriculture</Text>
       </View>
               
            </SafeAreaView>
            <ScrollView style={{marginTop:70}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Policy framework called agricultural rebirth programme{"\n"}{"\n"}
                {'\u2B24'} Construction of Kogi Rice Mill Factory, situated in Ejigba town, Yagba East LGA.{"\n"}{"\n"}
                {'\u2B24'}Construction of the second largest rice mill factory in ejigba,yagba west LGA</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Procurement and distribution of 1400 power tillers to farmers across 21  LGA{"\n"}{"\n"}
                {'\u2B24'} Collaboration with CBN on Anchor borrowers scheme for wet season in 2017{"\n"}{"\n"}
                {'\u2B24'} Inauguration of cassava peel processing factory and cassava production cluster in Ojapata,Ankpa LGA under the state patnership for agriculture SPA core delivery team CDT, to convert cassava to peels livestock feed</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Mass vacccination of cattle against Contagious Bovine pleuropneumonia CBBP in the state{"\n"}{"\n"}
                {'\u2B24'} Rehabilitation of the ramshackle hatchery at Aiyetoro Gbede Ijumu LGA{"\n"}{"\n"}
                {'\u2B24'} Establishment of nursery farms at Kabba,Lokoja and Ochaja for raising cocoa,cashew and oil palm seedlings for farmers in the state</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Training of 500 youths in various agricultural ventures under the FADAMA project.{"\n"}{"\n"}
                {'\u2B24'} MRelease of 3m to agro allied company limited for use to prune 6510 stands of palm oil trees at Aloma, engaged 600 youths in the process{"\n"}{"\n"}
                {'\u2B24'} KProcurement and duistribution ofc1400 massy ferguson tractors to farmers across 21 LGA</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Biofuel project for the establishment of biofuel factory and sugarcane plantation with NNPC{"\n"}{"\n"}
                {'\u2B24'} Patnership with world bank to train and empower 2000 persons in agro processing,productivity enhancement and livelihood improvement support (APPEALS){"\n"}{"\n"}
                {'\u2B24'} Signing of  two years deal with world bank and International fund for Agricultural Development (IFAD) valued at 62000000 and 10000000 respectfully to boost over 500km of rural road and agricultural development to fight food insecurity in the state{"\n"}{"\n"}
                {'\u2B24'}
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

