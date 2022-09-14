import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground,Dimensions, Text, View,Image,TouchableOpacity,FlatList,SafeAreaView ,ScrollView,TouchableHighlight,BackgroundImage, ImageStore} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { itemlist } from './Projects';

let DeviceHeight=Dimensions.get('window').height;
           let DeviceWidth= Dimensions.get('window').width;
           const ShowImage=(props)=>{
              return(
                <View>
                <ImageBackground
                source={props.route.params.img}
                style={{height:DeviceHeight-300,width:DeviceWidth,top:100}}
               // resizeMode='contain'
                />
                </View>
              )
           }

const Onpressaction=(props)=>{
    
        
        const ImgList=[
            {
                id:1,
                img:require("../Projpix/science2.jpg")
                
            },
            {
                id:2,
             
                img:require("../Projpix/science1.jpg")
        
            },
            {
                id:3,
                
                img:require("../Projpix/science3.jpg")
            },
            {
                id:4,
                img:require("../Projpix/science4.jpg")
            },
            {   id:5,
                img:require("../Projpix/science5.jpg")
            },
            {
              id:6,
              img:require("../Projpix/science7.jpg")
            },
            {
              id:7,
              img:require("../Projpix/science8.jpg")
            },
            
            {
              id:8,
              img:require("../Projpix/science10.jpg")
            },
            {
              id:9,
              img:require("../Projpix/science11.jpg")
            },
            

           ];

           
           return(

          <ScrollView>
            <View style={{display:"flex", flexDirection:'row',flexWrap:'wrap'}}>
              {ImgList.map((image,index)=>(
              <TouchableOpacity key={index} onPress={()=>props.navigation.navigate('ShowImage',{img:image.img})}>
                <Image source={image.img} style={{height:DeviceHeight/3,width:DeviceWidth/2-5,borderRadius:10,margin:2}}>

                </Image>

              </TouchableOpacity>))}

            </View>
          </ScrollView>
                    
                
         
              
         
             
           )
       
        
      
    
   }

   export {ShowImage,Onpressaction,Hosp,Ganaja,Custech,Gegu,Ajaokuta,Civic,Specialist,Palace,AYINGBA} ;

   const Hosp=(props)=>{
        
    const ImgList2=[
        {
            id:1,
            img:require("../Projpix/hosp1.jpg")
        },
        {
            id:2,
         
            img:require("../Projpix/hosp2.jpg")
    
        },
        {
            id:3,
            
            img:require("../Projpix/hosp3.jpg")
        },
        {
            id:4,
           
            img:require("../Projpix/hosp4.jpg")
        },
        {   id:5,
            img:require("../Projpix/hosp5.jpg")
        },
        {   id:6,
          img:require("../Projpix/hosp6.jpg")
      },
      {   id:7,
        img:require("../Projpix/hosp7.jpg")
    },
    {   id:8,
      img:require("../Projpix/hsop8.jpg")
  },
  {   id:9,
    img:require("../Projpix/hosp9.jpg")
},
{   id:10,
  img:require("../Projpix/hosp10.jpg")
},
{   id:11,
  img:require("../Projpix/hosp11.jpg")
},
{   id:12,
  img:require("../Projpix/hosp12.jpg")
},
{   id:13,
  img:require("../Projpix/hosp13.jpg")
},
{   id:14,
  img:require("../Projpix/hosp14.jpg")
},
{   id:15,
  img:require("../Projpix/hosp15.jpg")
},
{   id:16,
  img:require("../Projpix/hosp16.jpg")
},
{   id:17,
  img:require("../Projpix/hosp17.jpg")
},
{   id:18,
  img:require("../Projpix/hosp18.jpg")
},
{   id:19,
  img:require("../Projpix/hosp19.jpg")
},
{   id:20,
  img:require("../Projpix/hosp20.jpg")
},
{   id:21,
  img:require("../Projpix/hosp21.jpg")
},
{   id:22,
  img:require("../Projpix/hosp22.jpg")
},
{   id:23,
  img:require("../Projpix/hosp23.jpg")
},
{   id:24,
  img:require("../Projpix/hosp24.jpg")
},
{   id:25,
  img:require("../Projpix/hosp25.jpg")
},
{   id:26,
  img:require("../Projpix/hosp27.jpg")
},
{   id:27,
  img:require("../Projpix/hosp26.jpg")
},
{   id:28,
  img:require("../Projpix/hosp28.jpg")
},
{   id:28,
  img:require("../Projpix/hsop8.jpg")
},
       ];

       return(

        <ScrollView>
            <View style={{display:"flex", flexDirection:'row',flexWrap:'wrap'}}>
              {ImgList2.map((image,index)=>(
              <TouchableOpacity key={index} onPress={()=>props.navigation.navigate('ShowImage',{img:image.img})}>
                <Image source={image.img} style={{height:DeviceHeight/3,width:DeviceWidth/2-5,borderRadius:10,margin:2}}>

                </Image>

              </TouchableOpacity>))}

            </View>
          </ScrollView>
        
      //      <View>



      //         <Image source={require('../assets/backg.png')} style={{position:"absolute", height:1000}}/>
      //        <FlatList
      //        ItemSeparatorComponent={
      //            Platform.OS !== 'android' &&
      //            (({ highlighted }) => (
      //              <View
      //                style={[
      //                  style.separator,
      //                  highlighted && { marginLeft: 0 }
      //                ]}
      //              />
      //            ))
      //          }
      //       contentContainerStyle={{paddingHorizontal:40, paddingVertical:70}}
      //       data={ImgList2}
      //       keyExtractor={item=>item.id}
      //       renderItem={({ item , index, separators}) => ( 
            
      //       //   <TouchableOpacity
      //       //    key={item.key}
             
      //       //     onPress={toggleExpanded()} //this._onPress(item.id)
               
      //       // onShowUnderlay={separators.highlight}
      //       //  onHideUnderlay={separators.unhighlight} 
      //       //    style={{paddingVertical:5}}
      //       //  >

                 
      //     //        <SafeAreaView  style={{flex:1,marginVertical:20,paddingTop:10,position:"relative",}}>
      //     //           <Text>    REFERENCE HOSPITAL OKENE </Text>
      //     //        <View style={{padding:10,paddingLeft:20,paddingBottom:30,marginVertical:10}}>  
      //     //             <View style= {{}}>
                        
      //     //             <Image source={item.img} styel resizeMode='cover' style={{width:"100%",height:"100%", borderBottomLeftRadius:20,borderTopRightRadius:20,padding:60,borderColor:"#ff00ff"}}/>
      //     //             </View>
      //     //            <View style={{ justifyContent:"space-evenly",backgroundColor:"white"}}>
      //     //            <Text style={{fontWeight:"bold"}} >{item.id}</Text>     
               
             
      //     //            </View>
     
      //     //            </View>
                
                
                    
                     
                 
      //     //        </SafeAreaView>
                 
                
               
      //     //   //   </TouchableOpacity>
      //     //  )}
      //     //   showsVerticalScrollIndicator={true}
      //     //   Vertical={true}
     
            
     
      //     //   />
      //     //  </View>
             
                
            
     
          
     
         
      )
   
    
  

};

const Ganaja=(props)=>{     
  const ImgList3=[
      {
          id:1,
          img:require("../Projpix/ganaja1.jpg")
          
      },
      {
          id:2,
       
          img:require("../Projpix/ganaja2.jpg")
  
      },
      {
          id:3,
          
          img:require("../Projpix/ganaja3.jpg")
      },
      {
          id:4,
         
          img:require("../Projpix/ganaja4.jpg")
      },
      {
        id:5,
       
        img:require("../Projpix/ganaja5.jpg")
    },
     
     ];

     return(
      
      <ScrollView>
      <View style={{display:"flex", flexDirection:'row',flexWrap:'wrap'}}>
        {ImgList3.map((image,index)=>(
        <TouchableOpacity key={index} onPress={()=>props.navigation.navigate('ShowImage',{img:image.img})}>
          <Image source={image.img} style={{height:DeviceHeight/3,width:DeviceWidth/2-5,borderRadius:10,margin:2}}>

          </Image>

        </TouchableOpacity>))}

      </View>
    </ScrollView>
  
          
   
        
   
       
     )
 
  


};
const Custech=(props)=>{
    
    
        
        
  const ImgList4=[
      {
          id:1,
          img:require("../Projpix/cust1.jpg")
          
      },
      {
          id:2,
       
          img:require("../Projpix/cust2.jpg")
  
      },
      {
          id:3,
          
          img:require("../Projpix/cust3.jpg")
      },
      {
          id:4,
         
          img:require("../Projpix/cust6.jpg")
      },
      {   id:5,
          img:require("../Projpix/cust7.jpg")
      }
     ];

     return(
      
      <ScrollView>
      <View style={{display:"flex", flexDirection:'row',flexWrap:'wrap'}}>
        {ImgList4.map((image,index)=>(
        <TouchableOpacity key={index} onPress={()=>props.navigation.navigate('ShowImage',{img:image.img})}>
          <Image source={image.img} style={{height:DeviceHeight/3,width:DeviceWidth/2-5,borderRadius:10,margin:2}}>

          </Image>

        </TouchableOpacity>))}

      </View>
    </ScrollView>
              
          
   
        
   
       
     )
 
  


}

const Gegu=(props)=>{
    
      
        
  const ImgList5=[
      
      {   id:1,
          img:require("../Projpix/beki1.jpg")
      },
      {   id:2,
        img:require("../Projpix/beki2.jpg")
    },
    {   id:3,
      img:require("../Projpix/beki3.jpg")
  },
  {   id:4,
    img:require("../Projpix/beki4.jpg")
},
{   id:5,
  img:require("../Projpix/beki5.jpg")
},
{   id:6,
  img:require("../Projpix/beki6.jpg")
},
     ];

     return(
      
      <ScrollView>
      <View style={{display:"flex", flexDirection:'row',flexWrap:'wrap'}}>
        {ImgList5.map((image,index)=>(
        <TouchableOpacity key={index} onPress={()=>props.navigation.navigate('ShowImage',{img:image.img})}>
          <Image source={image.img} style={{height:DeviceHeight/3,width:DeviceWidth/2-5,borderRadius:10,margin:2}}>

          </Image>

        </TouchableOpacity>))}

      </View>
    </ScrollView>
   
       
     )
 
  


}

const Ajaokuta=(props)=>{
    
    
        
        
  const ImgList6=[
      {
          id:1,
          img:require("../Projpix/gegu1.jpg")
          
      },
      {
          id:2,
       
          img:require("../Projpix/gegu2.jpg")
      },
      {
          id:3,
          
          img:require("../Projpix/gegu3.jpg")
      },
      {
          id:4,
         
          img:require("../Projpix/gegu4.jpg")
      },
      {   id:5,
          img:require("../Projpix/ajaokuta1.jpg")
      },
      {   id:6,
        img:require("../Projpix/ajaokuta2.jpg")
    }
     ];

     return(
      
      <ScrollView>
      <View style={{display:"flex", flexDirection:'row',flexWrap:'wrap'}}>
        {ImgList6.map((image,index)=>(
        <TouchableOpacity key={index} onPress={()=>props.navigation.navigate('ShowImage',{img:image.img})}>
          <Image source={image.img} style={{height:DeviceHeight/3,width:DeviceWidth/2-5,borderRadius:10,margin:2}}>

          </Image>

        </TouchableOpacity>))}

      </View>
    </ScrollView>
       
     )
 
  


}
const Civic=(props)=>{   //Pics uploaded
    
    
        
        
  const ImgList7=[
      {
          id:1,
          img:require("../Projpix/civic1.jpg")
          
      },
      {
          id:2,
       
          img:require("../Projpix/civic2.jpg")
  
      },
      {
          id:3,
          
          img:require("../Projpix/civic3.jpg")
      },
      {
          id:4,
         
          img:require("../Projpix/civic4.jpg")
      },
      {   id:5,
          img:require("../Projpix/civic5.jpg")
      },
      {
        id:6,
       
        img:require("../Projpix/civic6.jpg")
    },
    {
      id:7,
     
      img:require("../Projpix/civic7.jpg")
  },
     ];

     return(
      
      <ScrollView>
      <View style={{display:"flex", flexDirection:'row',flexWrap:'wrap'}}>
        {ImgList7.map((image,index)=>(
        <TouchableOpacity key={index} onPress={()=>props.navigation.navigate('ShowImage',{img:image.img})}>
          <Image source={image.img} style={{height:DeviceHeight/3,width:DeviceWidth/2-5,borderRadius:10,margin:2}}>

          </Image>

        </TouchableOpacity>))}

      </View>
    </ScrollView>
   
       
     )
 
  


}
const Specialist=(props)=>{
    
    
        
        
  const ImgList8=[
      {
          id:1,
          img:require("../Projpix/specialist77.jpg")
          
      },
      {
          id:2,
       
          img:require("../Projpix/specialist78.jpg")
  
      },
      {
          id:3,
          
          img:require("../Projpix/specialist79.jpg")
      },
      {
          id:4,
         
          img:require("../Projpix/specialist80.jpg")
      },
      {   id:5,
          img:require("../Projpix/specialist81.jpg")
      },
      {   id:6,
        img:require("../Projpix/specialist82.jpg")
    },
    {   id:7,
      img:require("../Projpix/specialist83.jpg")
  },
  {   id:8,
    img:require("../Projpix/specialist84.jpg")
},

      
     ];

     return(
      
      <ScrollView>
      <View style={{display:"flex", flexDirection:'row',flexWrap:'wrap'}}>
        {ImgList8.map((image,index)=>(
        <TouchableOpacity key={index} onPress={()=>props.navigation.navigate('ShowImage',{img:image.img})}>
          <Image source={image.img} style={{height:DeviceHeight/3,width:DeviceWidth/2-5,borderRadius:10,margin:2}}>

          </Image>

        </TouchableOpacity>))}

      </View>
    </ScrollView>
   
       
     )
 
  


}
const Palace=(props)=>{
    
    
        
        
  const ImgList9=[
      {
          id:1,
          img:require("../Projpix/palace1.jpg")
          
      },
      {
          id:2,
       
          img:require("../Projpix/palace2.jpg")
  
      },
      {
          id:3,
          
          img:require("../Projpix/palace3.jpg")
      },
      {
          id:4,
         
          img:require("../Projpix/palace4.jpg")
      },
      {   id:5,
          img:require("../Projpix/palace5.jpg")
      },
      {   id:6,
        img:require("../Projpix/palace6.jpg")
    },
    {   id:7,
      img:require("../Projpix/palace7.jpg")
  },
  {   id:8,
    img:require("../Projpix/palace8.jpg")
}
     ];

     return(
      
      <ScrollView>
      <View style={{display:"flex", flexDirection:'row',flexWrap:'wrap'}}>
        {ImgList9.map((image,index)=>(
        <TouchableOpacity key={index} onPress={()=>props.navigation.navigate('ShowImage',{img:image.img})}>
          <Image source={image.img} style={{height:DeviceHeight/3,width:DeviceWidth/2-5,borderRadius:10,margin:2}}>

          </Image>

        </TouchableOpacity>))}

      </View>
    </ScrollView>
       
     )
 
  


}

const AYINGBA=(props)=>{
    
    
        
        
  const ImgList10=[
      {
          id:1,
          img:require("../Projpix/ksu1.jpg")
          
      },
      {
          id:2,
       
          img:require("../Projpix/ksu2.jpg")
  
      },
      {
          id:3,
          
          img:{uri:"https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/288523677_581396886666076_2165999213227702903_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEEVpZm1EW5C4cbMjxJNeQVBa4EpS1VuUoFrgSlLVW5SvWUean0GbfyK_ZZGOaZidSc-dXhyrjHBelxmQ-rcKLk&_nc_ohc=KS6rAzAkTBQAX8yk0qi&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&oh=00_AT--7I4DCt1mHW3obxSbjFNSeQ855FTt1LXkStArkJGmqQ&oe=62EE9044"}
      },
      {
          id:4,
         
          img:{uri:"https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/289193911_581397726665992_4618893779791781083_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE8d7iUGfNFuX1Vdzw3DcNOmd4ZaUOsAD2Z3hlpQ6wAPYw2Bc9erJnPGF9HXaZ2sf-P8B6hNSeF6ZQoPe_HJkzE&_nc_ohc=SrkMpyXzZu4AX_wudQu&tn=1fPleFafRRaGJmjz&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&oh=00_AT9h6hE5pND8K0GS6w_KaCQXKgBpwSeg6QlZVZiDcFVHvA&oe=62ED017E"}
      },
      {   id:5,
          img:{uri:"https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/288602558_581397786665986_957515165080537663_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEmuoWhK90RJ32xc6whZBl84NbKJQdbjJXg1solB1uMlTw2OoD3xmiXXvyO0J0MwljacwQnxskZGZPvjnS4NJTq&_nc_ohc=CXHpnOwFVy0AX916z51&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&oh=00_AT8n25vGsotmwvJjXbLjgslImS_emRegwdjZmO6dAyBTIQ&oe=62EDDD94"}
      }
     ];

     return(
      
      <ScrollView>
      <View style={{display:"flex", flexDirection:'row',flexWrap:'wrap'}}>
        {ImgList10.map((image,index)=>(
        <TouchableOpacity key={index} onPress={()=>props.navigation.navigate('ShowImage',{img:image.img})}>
          <Image source={image.img} style={{height:DeviceHeight/3,width:DeviceWidth/2-5,borderRadius:10,margin:2}}>

          </Image>

        </TouchableOpacity>))}

      </View>
    </ScrollView>
   
       
     )
 
  


}










  