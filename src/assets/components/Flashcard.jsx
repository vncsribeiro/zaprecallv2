import PlayScreen from "./PlayScreen";
import playButton from "../images/play-outline.svg"
import { useState } from "react";

export default function Flashcard({ question, answer, index }) {
    const [isTapped, setIsTapped] = useState(false);

    return (
        <>
            {isTapped ? 
            (<div className="flashcard face-up">
                <h1>{question}</h1>
            </div>) : 
            (<div className="flashcard face-down" onClick={() => setIsTapped(true)}>
                <h1>{`Pergunta ${index + 1}`}</h1>
                <img src={playButton} alt="play-button" />
            </div>)
            }
        </>

    );
}