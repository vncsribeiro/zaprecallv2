import PlayScreen from "./PlayScreen";
import playButton from "../images/play-outline.svg"
import setinha from '../images/setinha.png'
import { useState } from "react";

export default function Flashcard({ question, answer, index }) {
    const [status, setStatus] = useState('closed');  // STATUS: 'closed','question','answer', 'finished'

    if (status === 'closed') {
        return (
            <div className="flashcard face-down" onClick={() => setStatus('question')}>
                <h1>{`Pergunta ${index + 1}`}</h1>
                <img src={playButton} alt="play-button" />
            </div>
        );
    }
    
    return (
        
        <>
            {status ===  'question' ?
                (<div className="flashcard face-up">
                    <h1>{question}</h1>
                    <img src={setinha} alt="setinha" onClick={() => setStatus('answer')}/>
                </div>) :
                (<div className="flashcard face-up">
                    <h1>{answer}</h1>
                    <div className="cards-answers">
                        <div className="error">Não lembrei</div>
                        <div className="almost">Quase não lembrei</div>
                        <div className="zap">Zap!</div>
                    </div>
                </div>)
            }
        </>
    );
}