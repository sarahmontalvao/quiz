import React, { useState } from 'react';
import '../style.css';

const Quiz = () => {
  const questions = [
    {
      questionText: 'Qual é a capital da França?',
      answerOptions: [
        { answerText: 'Londres', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Berlim', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false },
      ],
    },
    {
      questionText: 'Qual é a cor da pedra safira?',
      answerOptions: [
        { answerText: 'Vermelho', isCorrect: false },
        { answerText: 'Verde', isCorrect: false },
        { answerText: 'Azul', isCorrect: true },
        { answerText: 'Amarelo', isCorrect: false },
      ],
    },
    {
      questionText: 'Quem pintou a Mona Lisa?',
      answerOptions: [
        { answerText: 'Leonardo da Vinci', isCorrect: true },
        { answerText: 'Pablo Picasso', isCorrect: false },
        { answerText: 'Vincent van Gogh', isCorrect: false },
        { answerText: 'Michelangelo', isCorrect: false },
      ],
    },
    {
      questionText: 'Quem é considerado o pai da pintura renascentista?',
      answerOptions: [
        { answerText: 'Sandro Botticelli', isCorrect: false },
        { answerText: 'Leonardo da Vinci', isCorrect: true },
        { answerText: 'Rafael Sanzio', isCorrect: false },
        { answerText: 'Michelangelo', isCorrect: false },
      ],
    },
    {
      questionText: 'Qual cor é obtida ao misturar vermelho e amarelo na teoria das cores?',
      answerOptions: [
        { answerText: 'Verde', isCorrect: false },
        { answerText: 'Roxo ou violeta', isCorrect: false },
        { answerText: 'Laranja', isCorrect: true },
        { answerText: 'Marrom', isCorrect: false },
      ],
    },
    {
      questionText: 'Quem escreveu a peça "Hamlet"?',
      answerOptions: [
        { answerText: 'William Shakespeare', isCorrect: true },
        { answerText: 'Charles Dickens', isCorrect: false },
        { answerText: 'Mark Twain', isCorrect: false },
        { answerText: 'Jane Austen', isCorrect: false },
      ],
    },
    {
      questionText: 'Qual é o maior planeta do nosso sistema solar?',
      answerOptions: [
        { answerText: 'Marte', isCorrect: false },
        { answerText: 'Júpiter', isCorrect: true },
        { answerText: 'Saturno', isCorrect: false },
        { answerText: 'Vênus', isCorrect: false },
      ],
    },
    {
      questionText: 'O que significa a sigla "HTML"?',
      answerOptions: [
        { answerText: 'Hyper Text Markup Language', isCorrect: true },
        { answerText: 'Hyperlinks and Text Markup Language', isCorrect: false },
        { answerText: 'Home Tool Markup Language', isCorrect: false },
        { answerText: 'Hyper Transfer Markup Language', isCorrect: false },
      ],
    },
    {
      questionText: 'Qual é o sistema operacional móvel desenvolvido pela Google?',
      answerOptions: [
        { answerText: 'iOS', isCorrect: false },
        { answerText: 'Windows', isCorrect: false },
        { answerText: 'Android', isCorrect: true },
        { answerText: 'Linux', isCorrect: false },
      ],
    },
    {
      questionText: 'Qual é a capital do Brasil?',
      answerOptions: [
        { answerText: 'Buenos Aires', isCorrect: false },
        { answerText: 'Brasília', isCorrect: true },
        { answerText: 'Rio de Janeiro', isCorrect: false },
        { answerText: 'São Paulo', isCorrect: false },
      ],
    },
    {
      questionText: 'Qual destas empresas é conhecida por ser líder em serviços de streaming de vídeo?',
      answerOptions: [
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Netflix', isCorrect: true },
        { answerText: 'Microsoft', isCorrect: false },
        { answerText: 'Disney', isCorrect: false },
      ],
    },
    {
      questionText: 'Na teoria das cores, ao misturar azul e vermelho, qual cor resulta?',
      answerOptions: [
        { answerText: 'Verde', isCorrect: false },
        { answerText: 'Roxo ou violeta', isCorrect: true },
        { answerText: 'Laranja', isCorrect: false },
        { answerText: 'Marrom', isCorrect: false },
      ],
    },
    {
      questionText: 'Quem pintou a "Noite Estrelada"?',
      answerOptions: [
        { answerText: 'Leonardo da Vinci', isCorrect: false },
        { answerText: 'Pablo Picasso', isCorrect: false },
        { answerText: 'Vincent van Gogh', isCorrect: true },
        { answerText: 'Michelangelo', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);


  function handleCurrentQuestions(isCorrect, index) {
    if (isCorrect) {
      setScore(score + 1);
    }
    setSelectedAnswer(index);

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;

      if (nextQuestion >= questions.length) {
        setEnd(true);
      } else {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
       
      }
    }, 500); 
  }

  return (
    <>
   { !end &&  <div id='container'>
    <div className='scoreContainer'>
    <div className='qtd'>{`${currentQuestion + 1} / ${questions.length}`}</div>
        <div className="score">{score}</div>
    </div>

        <div className='question'>{questions[currentQuestion].questionText}</div>
        <div className='answer'>
          {questions[currentQuestion].answerOptions.map((answerOption, index) => (
            <div className='button-container '>
           <button
               key={index}
               onClick={() => handleCurrentQuestions(answerOption.isCorrect, index)}
               className={
                 selectedAnswer !== null &&
                 selectedAnswer === index &&
                 answerOption.isCorrect
                   ? 'correct'
                   : selectedAnswer !== null && selectedAnswer === index
                   ? 'wrong'
                   : selectedAnswer !== null && answerOption.isCorrect
                   ? 'correct'
                   : ''
               }
               disabled={selectedAnswer !== null}
         >
               {answerOption.answerText}
         </button>
         </div>

          ))}
        </div>
      </div>}

      {end && (
        <div className='end'> 
          <h2>Fim do Jogo!!!</h2>
          <p>Você acertou {score} de {questions.length}</p>
          <button className='endBtn' onClick={() => window.location.reload()}>Jogar novamente</button>
        </div>
      )}
    </>
  );
};

export default Quiz;
