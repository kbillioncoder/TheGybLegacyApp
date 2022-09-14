import { StyleSheet, Text, View,ScrollView,Image,SafeAreaView} from 'react-native';



export const Education=({navigation})=>{
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
         <Text style={{alignItems:"center",justifyContent:"center",marginLeft:100,marginVertical:25,fontWeight:"bold",fontSize:20,color:"blue"}}>Education</Text>
       </View>
               
            </SafeAreaView>
            <ScrollView style={{marginTop:70}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Kogi state was ranked 7th top performer among all the states and FCT in Basic Education funding according to the records of Universal Basic Education commission (UBEC), as a result of the construction of 375 classroom blocks and renovation of over 700 in Basic Education Primary School across the state{"\n"}{"\n"}
               </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} The secondary schools in kogi state has also received extensive attention in terms of provision of enhanced learning materials, redistribution of teachers across the secondary schools in the state and also development of physical infrastructure.
{"\n"}{"\n"}
               </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'}A 50 bed hostel was constructed at government secondary school Obangede and also completion of hostel block in GSS Icheke in Omala LGA{"\n"}{"\n"}
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'}Enacted a law prohibiting children fromhawking during school hours and to also streamline the activities of stakeholders and give clear roadmap for improved engagement{"\n"}{"\n"}
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'}Construction of model security house wired with security communication gadgets and installation of cctv equipment as a replacement for 3 room cubicles inherited{"\n"}{"\n"}
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'}Construction of 30 bed medical center as a replacement for a three bed sick bay inherited
{"\n"}{"\n"}
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'}Remodelling and reequipping the school of college of health science and technology idah, thus making it suitable and conducive place for learning
{"\n"}{"\n"}
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'}Establishment of Confluence University of Science and Technology(CUSTECH) osara
{"\n"}{"\n"}
                </Text>
            </View>
            
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'}GYB administration ensured prompt payment of the yearly 1.5 billion naira
College of Health Science and Technology Obangede was granted full accreditation


{"\n"}{"\n"}
                {'\u2B24'} Distribution of layland mercedes buses across the state tertiary institution{"\n"}{"\n"}
                {'\u2B24'}Renovation of schools across the state </Text>
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

