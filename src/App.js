import React,{useState} from 'react';
import './App.css';

function App() {
  const [finalResult, setFinalResult]=useState(false);
  const [score, setScore]=useState(0);
  const [currentQuestion, setCurrentQuestion]=useState(0);
  const questions = [
    {
      text: "What is the capital city of Americas ?",
      options: [
        {id: 0, text:"New york city", isCorrect:false },
        {id: 0, text:"Texas", isCorrect:false },
        {id: 0, text:"Los Angeles", isCorrect:false },
        {id: 0, text:"Washington DC", isCorrect:true },
      ],
    },
    {
      text: "What is the capital city of Ethiopia ?",
      options: [
        {id: 0, text:"Addis Ababa", isCorrect:true },
        {id: 0, text:"Bahir Dar", isCorrect:false },
        {id: 0, text:"Mekele", isCorrect:false },
        {id: 0, text:"Adama", isCorrect:false },
      ],
    },
    {
      text: "What is the capital city of Brazil ?",
      options: [
        {id: 0, text:"los Santos", isCorrect:false },
        {id: 0, text:"Flamingo", isCorrect:false },
        {id: 0, text:"Rio", isCorrect:true },
        {id: 0, text:"Las Vegas", isCorrect:false },
      ],
    },
    {
      text: "What is the capital city of France ?",
      options: [
        {id: 0, text:"Boston", isCorrect:false },
        {id: 0, text:"paris", isCorrect:true },
        {id: 0, text:"Mumbai", isCorrect:false },
        {id: 0, text:"Madrid", isCorrect:false },
      ],
    },
    {
      text: "What is the capital city of English ?",
      options: [
        {id: 0, text:"Manchester", isCorrect:false },
        {id: 0, text:"London", isCorrect:true },
        {id: 0, text:"Liverpool", isCorrect:false },
        {id: 0, text:"British", isCorrect:false },
      ],
    },
  ];
  //helper function
  const optionAnswer=(isCorrect)=>{
    if(isCorrect){
      setScore(score +1);
    }

    if(currentQuestion  + 1 < questions.length){
    setCurrentQuestion(currentQuestion + 1);
    }else{
    setFinalResult(true);
    }
  }
  const resetButton = ()=>{
    setCurrentQuestion(0);
    setScore(0);
    setFinalResult(false);
  }
  return (
    <div className="App">
    <h1>Kingo Quiz App</h1>
    <h2>Current Score : 2</h2>
    {finalResult ?  (
      <div className="final-card">
      <h1>final Result</h1>
      <h2>
        {score} out of {questions.length} is correct -({(score/questions.length)*100}%)
      </h2>
      <button onClick={()=>resetButton()}className='buttons'>Restart Game</button>
    </div>
    ) :
    (
      <div className='question-card'>
    <h2>Question {currentQuestion + 1} out of  {questions.length}</h2>
      <h3 className="question" >{questions[currentQuestion].text}</h3>
      <ul>
      {
        questions[currentQuestion].options.map((option)=>{
          return(
            <li onClick={()=>optionAnswer(option.isCorrect)} key={option.id}>{option.text}</li>
          );
        })
      }
      </ul>
    </div>
    )}

    
   
        </div>
  );
}

export default App;
