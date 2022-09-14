import * as React from 'react'; 
import { StyleSheet, Text, View ,Button,Image,ImageBackground,FlatList,TouchableOpacity,ScrollView} from 'react-native';
//import Constants from 'expo-constants';
//import { ActionB } from './ActionB';

import { SafeAreaView } from 'react-native-safe-area-context';


const Biography =({navigation})=>{
    return(
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View styles={styles.container} >
          {/*  <ImageBackground source={require('../assets/backg.png')} resizeMode='cover' style={{height:1000,width:1000}}>*/}
          
            
            <Image style={{position:"absolute", height:3000,backgroundColor:'#f5f5f5'}}/>
            <View style={{shadowOpacity:0.25,
         shadowRadius:3.5,
         elevation:20,
         shadowColor:'#7f5df0',
         shadowOffset:{
            width:0,
            height:10
        },width:300,height:260,borderBottomLeftRadius:30,borderTopRightRadius:30,marginTop:35,marginLeft:40,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../assets/yahaya.png')}// resizeMode='cover'
                        style={{position:"relative",width:290,height:246,borderBottomLeftRadius:30,borderTopRightRadius:30,padding:5,marginTop:1,marginLeft:1,justifyContent:'center',alignItems:'center'}}/>
            </View>
           
            <Text ellipsizeMode='tail' numberOfLines={700}  style={{fontWeight:"normal",top:10,padding:15}}>
           
            The birth of a child in a typical African cultural setting heralds boundless joy and happiness. Apparently, this is because, at the birth of a child into the human family, such a child is perceived to be a potentially great man on an ordained mission.{"\n"}{"\n"} It is thus the fervent prayers and wishes of every parent that their children excel in the exploit of life and become great.{"\n"}{"\n"}

At a relatively tender age, Yahaya Bello started his early education and began the journey to great heights, consciously choosing the noble path of diligence, hard work and resolute determination to succeed in life.{"\n"}{"\n"}

As a pupil in the primary school, Bello showed and manifested early traits and signs of sharp intellect and proven leadership qualities, when in primary (2), he was made the class monitor until he was appointed the school head boy in class six.{"\n"}{"\n"} His quest for qualitative education saw him changing schools until he finally settled for Government Secondary School Suleja in Niger State where he came out in flying colours in his Senior School Certificate Examination in 1994.{"\n"}{"\n"}

With a burning passion for higher education, he enrolled for A level at the Kaduna Polytechnic in 1995 and in 1996, he proceeded to the famous Ahmadu Bello University Zaria to study Accounting. {"\n"}{"\n"}He graduated in 1999. Still not resting on his oars, he went back to Ahmadu Bello University, Zaria to obtain a Master’s degree in Business Administration in 2004.{"\n"}{"\n"} While pursuing his Master’s degree, the ambitious forward-looking Bello enrolled for a professional certificate with the Association of National Accountants of Nigeria, Jos to qualify as a Chartered Fellow of ANAN.

Alhaji Yahaya Bello’s working career started in 2001 when he was posted to the Revenue Mobilization Allocation and Fiscal Commission for his mandatory National Youth Service.{"\n"}{"\n"} While serving there as a corps member, he distinguished himself as exceptionally hardworking, resourceful and dedicated young man. {"\n"}{"\n"}His workaholic traits and commitment to duty earned him an uncommon favour as he was offered appointment in the same place he did his primary assignment as Revenue Officer II.{"\n"}{"\n"}

Apparently, because of his dexterity and dedication to duty, he was singled out for promotion to the rank of Senior Accountant within a short period. Again, because of his competence and manifest potentials, he was transferred to Makurdi Zonal Office to head the Account department. {"\n"}{"\n"}He rose steadily to the position of Assistant Chief Accountant until he voluntarily resigned his appointment to harness his potentials and professional skills in the uncertain terrain of the private sector. {"\n"}{"\n"}Through sheer diligence and prudent husbandry of his hard-earned resources, young Bello invested in Stock Trading Business and luck smiled at him with a financial breakthrough shortly before the crash in the stock market business.

His stock portfolio Investment cuts across the oil, gas, banking, transportation, agro-related business, and real estate development.{"\n"}{"\n"} It is indeed heartwarming and reassuring to note that his sprawling and expansive business networks have greatly facilitated employment opportunities for hundreds of unemployed youths and graduates, particularly from Kogi State.{"\n"}{"\n"}

Apart from his passion and drive for business, Alhaji Yahaya Bello has a moral burden for the poor and the less privileged. He is a highly committed public-spirited philanthropist and currently funds three orphanages, in addition to his sponsorship of the education of hundreds of Kogi State undergraduates in various institutions of higher learning.{"\n"}{"\n"}

Genuinely disturbed by the prevailing rot and decadence in the murky waters of the Nigeria politics and inspired by a propelling vision to sanitize the Augean stable of the Nigeria politics, Alhaji Yahaya Bello along with like-minded progressive young men and women formed a formidable network known as “Kogi Youth Arise Group”.{"\n"}{"\n"} Under his workaholic and articulate leadership, this group was able to mobilize youths from across the 239 Wards in the State and threw its weight behind the candidature of President Muhammodu Buhari which led to the overwhelming victory of President Buhari in the presidential pool.{"\n"}{"\n"}

With the victory of the APC at the National level as the ruling party, Yahaya Bello felt challenged and inspired to offer himself for leadership as a change agent to rescue the State that had been bedeviled by corrupt and inept leadership. In the titanic gubernatorial primaries, Yahaya Bello who was the youngest among the gubernatorial aspirants proved the cynics who did not give him a chance wrong.{"\n"}{"\n"}

He polled the second highest vote after late Prince Abubakar Audu. Following the sudden death of Prince Abubakar Audu, fate and destiny brought in the young Yahaya Bello as the 4th democratically elected Governor of Kogi State. {"\n"}{"\n"}The story of the emergence of Alhaji Yahaya Bello, a multi-talented young man in the prime of his youth as the Governor of Kogi State is an eloquent testimony of a man entrusted by destiny and the unmistaken hand of God to salvage his people and generation at a critical and agonizing moment of the people’s quest for development and true happiness.{"\n"}{"\n"}

It is, therefore, hope rekindling and reassuring that at a critical time as this, Kogi State is blessed with a leader in the person of Alhaji Yahaya Bello who has a sufficient dose of morality and a driving passion to redress fatal fundamental errors of the past. {"\n"}{"\n"}With the pragmatic steps taken so far, the Governor has proved beyond all reasonable doubt that when honest, sincere, effective, competent, bold and God-fearing leaders ascend the mantle of leadership the sky will be the limit of the people in growth and opportunities.{"\n"}{"\n"}

Going by the consummate passion and the driving zeal with which Yahaya Bello has brought into the governance of Kogi State since he was sworn in, it is most reassuring that the young man has come to the pulpit of leadership sufficiently prepared and formidably guided with a well-thought-out blueprint to reposition Kogi State among the leading of States in the Country. {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
            </Text>
          
   {/* </ImageBackground>*/}
            
   
           
        </View>
        
    
        </ScrollView>
         
     
          
    )

}
export default Biography;

const styles = StyleSheet.create({
    container: {
      flex: 1,
     //backgroundColor: '#8fcbbc',
     alignItems: 'center',
     justifyContent: 'center',
    },
   
        
   
  });
  