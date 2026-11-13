import PlayScreen from "./PlayScreen";
import playButton from "../images/play-outline.svg"
import setinha from '../images/setinha.png'
import { useState } from "react";

export default function Flashcard({ question, answer, index, whenAnswered, configResult }) {
    const [status, setStatus] = useState('closed');  // STATUS: 'closed','question','answer', 'finished'
    const [result, setResult] = useState(null);


    function handleResult(chosenAnswer) {
        setStatus('finished');
        setResult(chosenAnswer);

        if (whenAnswered) {
            whenAnswered(chosenAnswer);

        }

    }

    if (status === 'closed') {
        return (
            <div className="flashcard face-down" >
                <h1>{`Pergunta ${index + 1}`}</h1>
                <img src={playButton} alt="play-button" onClick={() => setStatus('question')} />
            </div>
        );
    }

    if (status === 'finished') {
        const info = configResult[result]
        return (
            <div className={`flashcard face-down ${info.class}`} >
                <h1>{`Pergunta ${index + 1}`}</h1>
                {info.icon}
            </div>
        );
    }

    return (

        <>
            {status === 'question' ?
                (<div className="flashcard face-up">
                    <h1>{question}</h1>
                    <img src={setinha} alt="setinha" onClick={() => setStatus('answer')} />
                </div>) :
                (<div className="flashcard face-up">
                    <h1>{answer}</h1>
                    <div className="cards-answers">
                        <div className="error" onClick={() => handleResult('error')}>Não lembrei</div>
                        <div className="almost" onClick={() => handleResult('almost')}>Quase não lembrei</div>
                        <div className="zap" onClick={() => handleResult('zap')}>Zap!</div>
                    </div>
                </div>)
            }
        </>
    );
}