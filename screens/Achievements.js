import { StyleSheet, Text, View,ScrollView,Image,SafeAreaView} from 'react-native';



export const Achievements=({navigation})=>{
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
         <Text style={{alignItems:"center",justifyContent:"center",marginLeft:100,marginVertical:25,fontWeight:"bold",fontSize:20,color:"blue"}}>Achievements</Text>
       </View>
               
            </SafeAreaView>
            <ScrollView style={{marginTop:70}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Establishment of Kogi Reveue House Lokoja.{"\n"}{"\n"}
                {'\u2B24'} Construction of Kogi Rice Mill Factory, situated in Ejigba town, Yagba East LGA.{"\n"}{"\n"}
                {'\u2B24'} Mohammed Buhari Event Centre Lokoja.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Ganaja Junction Flyover Lokoja.{"\n"}{"\n"}
                {'\u2B24'} Prince Abubakar Audu University Teaching Hospital.{"\n"}{"\n"}
                {'\u2B24'} Reconstruction and Renovation of Specialist Hospital Lokoja.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Establishment of Confluence University of Science & Technology Osara.{"\n"}{"\n"}
                {'\u2B24'} Kogi State Reference Hospital Okene.{"\n"}{"\n"}
                {'\u2B24'} Modern General Hospital Project in Gegu Beki.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Modern General Hospital Project in Eganyi.{"\n"}{"\n"}
                {'\u2B24'} Modern General Hospital Project in Isanlu.{"\n"}{"\n"}
                {'\u2B24'} Kabba Township roads.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Anyiba Township Roads.{"\n"}{"\n"}
                {'\u2B24'} Ankpa Township Roads.{"\n"}{"\n"}
                {'\u2B24'} Okpo – Olamaboro Roads.{"\n"}{"\n"}
                {'\u2B24'} Okene Township Roads.
Ihima – Adavi Eba Okengwe Roads.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Construction work to control the overflowing of River Niger and River Benue in case of flooding in Lokoja.{"\n"}{"\n"}
                {'\u2B24'} Nigeria Bar Association Secretariat building in Lokoja.{"\n"}{"\n"}
                {'\u2B24'} SDG building Lokoja.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Township street light in Lokoja.{"\n"}{"\n"}
                {'\u2B24'}  House of Assembly complex Remodeling and Renovation.{"\n"}{"\n"}
                {'\u2B24'}  Operation light up Kogi Eastern senatorial district.
                {'\u2B24'}  Bishop Court – Kasuwa road Lokoja</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} GYB model Science Secondary School project at Ogaminana in Adavi LGA.{"\n"}{"\n"}
                {'\u2B24'} GYB model Science Secondary School at Isanlu in Yagba West LGA.{"\n"}{"\n"}
                {'\u2B24'} Renovation of construction of about 3 edifices structures at School of midwifery Obangede</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Rehabilitation and construction of 50 space hostel space at Govt Girls Secondary School Obangede in Okehi LGA.{"\n"}{"\n"}
                {'\u2B24'} Construction of lectures theatres at College of Education and Technical Kabba.{"\n"}{"\n"}
                {'\u2B24'} Establishment of Military forward base at Achoze in Okene LGA.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Nutrition house at the ministry of Health Lokoja.{"\n"}{"\n"}
                {'\u2B24'} Reconstruction and remodeling of Ohinoyi palace in Okene.{"\n"}{"\n"}
                {'\u2B24'} Building of govt house chapel and govoernment house jumaat mosque in Lokoja.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Rehabilitation and reconstruction of General Hospital in Okene.{"\n"}{"\n"}
                {'\u2B24'} Construction of Ozuwaya road in Okene.{"\n"}{"\n"}
                {'\u2B24'} Construction of Ogori-Mangogo township road.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Electrification of Banda – Magajiya village along Abuja Lokoja expressway to the national grid.{"\n"}{"\n"}
                {'\u2B24'} Reconstruction of renovation projects at State College of Education Ankpa.{"\n"}{"\n"}
                {'\u2B24'} Go to Kogi State Polytechnic Lokoja most of the projects there are under his name.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Expansion/Reticulation of Okene Waterworks Project.{"\n"}{"\n"}
                {'\u2B24'} Federal University University Adankolo road to Dunamis junction.{"\n"}{"\n"}
                {'\u2B24'} NTA roundabout – GTB junction road.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.TextStyle}>{'\u2B24'} Old township road Lokoja.{"\n"}{"\n"}
                {'\u2B24'} GYB model Science Secondary school project in Lokoja.{"\n"}{"\n"}
                {'\u2B24'} Construction of road from Total junction via Zenith Bank to Govt house in Okene – Ohinoyi palac
                {'\u2B24'} Kogi emerges overall first among 2nd tier NEWMAP statese</Text>
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

