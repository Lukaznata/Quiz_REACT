// hooks
import { useContext } from 'react'

// context
import { QuizContext } from '../context/quiz'

// css
import './Wellcome.css'

// imagens
import Quiz from '../img/quiz.svg'



export default function Wellcome() {

    const [quizState, dispatch] = useContext(QuizContext)


  return (
    <div id='wellcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão para começar:</p>
        <button onClick={() => dispatch({type:"CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}
