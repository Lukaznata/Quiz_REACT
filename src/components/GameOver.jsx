// hooks
import { useContext } from 'react'

// context
import { QuizContext } from '../context/quiz'

// IMG
import Welldone from '../img/welldone.svg'

// css
import './GameOver.css'

// components


const GameOver = () => {

    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id='gameover'>
        <h2>Fim de jogo</h2>
        <p>Pountuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <img src={Welldone} alt="fim do Quiz" />
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver