import React from "react";

import QuizeSingleChoice from "react-native-react-native-quiz-single-choice";




const QuizSingleChoiceApp = () => {
    
    
    const data=[
        {   question:"When was Governor Yahaya Bello Sworn in as the executive Governor of Kogi state ?",
        
                   optionA:"19 july 2015",
                    optionB:"8 May 2015",
                    optionC:"22 Nov 2016",
                    optionD:"27 January 2016",
                    answer:"27 January 2016"
        
        },
       
        {   question:"What is the name of the Deputy Governor of Kogi state ?",
            
                    optionA:"Kingsley Fanwo",
                    optionB:"Simon Achuba",
                    optionC:"Jamiu asuku",
                    optionD:"Edward Onoja",
                    answer:"Edward Onoja"
        
        },
        {   question:"What is the name of the ultra modern hospital built by bello in Okene LGA ?",
          
                   optionA:"Okene specialist hospital",
                    optionB:"General Hospital Okene",
                    optionC:"Reference Hospital Okene",
                    optionD:"FMC okene",
                    answer:"Reference Hospital Okene"
        
        },
        {   question:"How many fountains are found in Muhammadu Buhari Civic center built by GYB ?",
           
                   optionA: "One",
                    optionB:"Two",
                    optionC:"Three",
                    optionD:"None",
                    answer:"Two"
        
        },
        {   question:"How many standing pillars does Ganaja flyover bridge have ?",
         
                   optionA:"10",
                   optionB:"8",
                    optionC:"12",
                    optionD:"6",
                    answer:"12"
            
        
        },
        {   question:"How many stories does model science school built by GYB have ?",
           
                   optionA:"One",
                    optionB:"Two",
                    optionC:"Three",
                    optionD:"None",
                    answer:"Three"
            
        
        },
        {   question:"What is the name of kogi state Commisioner of works ?",
     
                  optionA:"Abubakar Ohere",
                    optionB:"Abdullahi Bello",
                   optionC:"Nurudeen Okala",
                   optionD:"Ashiru Asiwaju",
                   answer:"Abubakar Ohere"
            
        
        },
        {
            question:"Which state came first in the world bank fiscal transparency,accountability and sustainability programme? ",
        
                   optionA:"Ondo",
                    optionB:"LAGOS",
                    optionC:"Kogi",
                    optionD:"plateau",
                    answer:"Kogi"
            
        },
        {
          question:"What is the name of kogi state commissioner of finance?",
      
                 optionA:"Idris Ashiru",
                  optionB:"Asiwaju Ahmed",
                  optionC:"James Fleke",
                  optionD:"Smart Adeyemi",
                  answer:"Idris Ashiru"
          
      },
      {
        question:"Who is the First lady of Kogi state?",
    
               optionA:"Hajiya Ramotu Bello",
                optionB:"Rasheeda Bello",
                optionC:"Sadiya Bello",
                optionD:"Aishat Bello",
                answer:"Rasheeda Bello"
        
    },
    {
      question:"Which University was established by the GYB administration?",
  
             optionA:"Prince Abubakar Audu University",
              optionB:"Salem University",
              optionC:"Confluence University of Science and Technology",
              optionD:"Federal University Lokoja",
              answer:"Confluence University of Science and Technology"
      
  }
        
        ]
       

        return (
            <QuizeSingleChoice
              containerStyle={{ backgroundColor: "#61dafb", paddingTop: 30 }}
              questionTitleStyle={{ fontSize: 22, color: "#FFF" }}
              responseStyle={{
                borderRadius: 15,
              }}
              responseTextStyle={{ fontSize: 12, fontWeight: "normal" }}
              selectedResponseStyle={{
                borderRadius: 15,
                backgroundColor: "#fa5541",
              }}
              selectedResponseTextStyle={{
                fontSize: 14,
                fontWeight: "normal",
              }}
              responseRequired={true}
              nextButtonText={"Next"}
              nextButtonStyle={{ backgroundColor: "#06d755" }}
              nextButtonTextStyle={{ color: "#FFF" }}
              prevButtonText={"Prev"}
              prevButtonStyle={{ backgroundColor: "#fa5541" }}
              prevButtonTextStyle={{ color: "#FFF" }}
              endButtonText={"Done"}
              endButtonStyle={{ backgroundColor: "#000" }}
              endButtonTextStyle={{ color: "#FFF" }}
              buttonsContainerStyle={{ marginTop: "auto" }}
              onEnd={(results) => { 
                console.log(results), alert('You scored '+ results + ' out of '+ data.length);
              }}
              data={data}
            />
          );

    }

    export default QuizSingleChoiceApp;

        